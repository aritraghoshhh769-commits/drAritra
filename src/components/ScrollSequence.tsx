"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useScroll, useTransform, motion, useMotionValueEvent, AnimatePresence } from 'framer-motion';

// --- Configuration Constants ---
const TOTAL_FRAMES = 120;
const SCROLL_HEIGHT = "400vh";

type TextOverlay = {
  start: number;
  end: number;
  position: 'left' | 'center' | 'right';
  title: string;
  subtitle?: string;
};

// --- Story Beats Configuration ---
const storyBeats: TextOverlay[] = [
  {
    start: 0.05,
    end: 0.25,
    position: 'center',
    title: 'Dr. Aritra Ghosh',
    subtitle: 'Oral & Dental Surgeon',
  },
  {
    start: 0.3,
    end: 0.5,
    position: 'left',
    title: '5+ Years of Experience',
    subtitle: 'Dedicated to providing comprehensive dental care with a gentle touch.',
  },
  {
    start: 0.6,
    end: 0.8,
    position: 'right',
    title: 'Advanced Clinical Practice',
    subtitle: 'Utilizing modern techniques for pain-free and effective treatments.',
  },
  {
    start: 0.85,
    end: 0.95,
    position: 'center',
    title: 'Your Smile, Our Priority',
    subtitle: 'Book a consultation today.',
  },
];

// --- Helper Functions ---
const getFramePath = (frame: number): string => {
  const frameNumber = String(frame + 1).padStart(3, '0');
  return `https://yqhlxtvpnziabkrrprbs.supabase.co/storage/v1/object/public/assets/aritro/ezgif-frame-${frameNumber}.jpg`;
};

const preloadImages = (onProgress: (progress: number) => void, onComplete: (images: HTMLImageElement[]) => void) => {
  const imagePromises: Promise<HTMLImageElement>[] = [];
  let loadedImagesCount = 0;

  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Required for cross-origin images on canvas
    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      img.onload = () => {
        loadedImagesCount++;
        onProgress((loadedImagesCount / TOTAL_FRAMES) * 100);
        resolve(img);
      };
      img.onerror = (err) => {
        console.error(`Failed to load image: ${img.src}`);
        reject(err);
      };
    });
    img.src = getFramePath(i);
    imagePromises.push(promise);
  }

  Promise.all(imagePromises).then(onComplete).catch(err => console.error("Error preloading images:", err));
};

const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

// --- Text Overlay Component ---
const TextOverlayContent: React.FC<{ overlay: TextOverlay, scrollYProgress: any }> = ({ overlay, scrollYProgress }) => {
  const FADE_DURATION = 0.05;

  const opacity = useTransform(
    scrollYProgress,
    [overlay.start, overlay.start + FADE_DURATION, overlay.end - FADE_DURATION, overlay.end],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    scrollYProgress,
    [overlay.start, overlay.start + FADE_DURATION],
    ['20px', '0px']
  );

  const positionClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 h-full w-full flex flex-col justify-center p-8 md:p-16 pointer-events-none z-30 ${positionClasses[overlay.position]}`}
    >
      <div className="max-w-md">
        <h2 className="text-4xl md:text-6xl font-bold text-white/90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">{overlay.title}</h2>
        {overlay.subtitle && <p className="mt-4 text-lg md:text-xl text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">{overlay.subtitle}</p>}
      </div>
    </motion.div>
  );
};

// --- Main Scroll Sequence Component ---
const ScrollSequence: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);
  const lastDrawnFrame = useRef(-1);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const ndFilterOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.25],
    [0, 0.14]
  );

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);
  const targetFrame = useRef(0);
  const currentFrame = useRef(0);
  const rafId = useRef<number>();

  useEffect(() => {
    preloadImages(setLoadingProgress, (loadedFrames) => {
      setFrames(loadedFrames);
      setLoading(false);
    });
  }, []);

  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    const image = frames[frameIdx];
    if (!canvas || !image || lastDrawnFrame.current === frameIdx) return;
    
    lastDrawnFrame.current = frameIdx;

    const context = canvas.getContext('2d');
    if (!context) return;
    
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgWidth = image.naturalWidth;
    const imgHeight = image.naturalHeight;

    const canvasRatio = canvasWidth / canvasHeight;
    const imgRatio = imgWidth / imgHeight;

    let scale = 1;
    if (imgRatio > canvasRatio) {
      scale = canvasWidth / imgWidth;
    } else {
      scale = canvasHeight / imgHeight;
    }

    const scaledWidth = imgWidth * scale;
    const scaledHeight = imgHeight * scale;

    const x = (canvasWidth - scaledWidth) / 2;
    const y = (canvasHeight - scaledHeight) / 2;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(image, x, y, scaledWidth, scaledHeight);
  }, [frames]);


  useEffect(() => {
    const handleResize = () => {
      lastDrawnFrame.current = -1; // Force redraw on resize
      if (frames.length > 0) {
        drawFrame(Math.round(currentFrame.current));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame, frames]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    targetFrame.current = latest;
  });

  useEffect(() => {
    const animateFrame = () => {
      if (!loading && frames.length > 0) {
        currentFrame.current = lerp(currentFrame.current, targetFrame.current, 0.1);

        const roundedFrame = Math.round(currentFrame.current);
        if(frames[roundedFrame]) {
            drawFrame(roundedFrame);
        }
      }
      rafId.current = requestAnimationFrame(animateFrame);
    };

    if (!loading && frames.length > 0) {
      rafId.current = requestAnimationFrame(animateFrame);
    }
    
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [loading, frames, drawFrame]);

  useEffect(() => {
    if (!loading && frames.length > 0) {
      drawFrame(0);
    }
  }, [loading, frames, drawFrame]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          >
            <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-white/60">Loading experience... {Math.round(loadingProgress)}%</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={scrollRef} style={{ height: SCROLL_HEIGHT }} className="relative w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
          <div 
            className="absolute inset-0 z-10" 
            style={{
              background: 'radial-gradient(circle at 0% 50%, #1e282f 0%, transparent 40%), radial-gradient(circle at 100% 50%, #1e282f 0%, transparent 40%), radial-gradient(circle at 100% 100%, #1e282f 0%, transparent 35%), radial-gradient(circle at 0% 100%, #1e282f 0%, transparent 30%), radial-gradient(circle at 0% 0%, #1e282f 0%, transparent 30%), radial-gradient(circle at 100% 0%, #1e282f 0%, transparent 30%)',
              opacity: 0.95,
            }}
          ></div>
          <motion.div className="absolute inset-0 bg-black z-20 pointer-events-none" style={{ opacity: ndFilterOpacity }} />
          {!loading && storyBeats.map((overlay) => (
            <TextOverlayContent key={overlay.title} overlay={overlay} scrollYProgress={scrollYProgress}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollSequence;
