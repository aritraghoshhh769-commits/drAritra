
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
    start: 0.1,
    end: 0.4,
    position: 'center',
    title: 'Dr. Aritra Ghosh',
    subtitle: 'Oral & Dental Surgeon',
  },
  {
    start: 0.45,
    end: 0.6,
    position: 'left',
    title: '5+ Years of Experience',
    subtitle: 'Dedicated to providing comprehensive dental care with a gentle touch.',
  },
  {
    start: 0.65,
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
      className={`absolute inset-0 h-full w-full flex flex-col justify-center p-4 sm:p-8 md:p-16 pointer-events-none z-30 ${positionClasses[overlay.position]}`}
    >
      <div className="max-w-md">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white/90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">{overlay.title}</h2>
        {overlay.subtitle && <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-lg text-white/90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">{overlay.subtitle}</p>}
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
    if (!canvas || !image) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    
    const container = canvas.parentElement;
    if (!container) return;

    const dpr = window.devicePixelRatio;
    const containerRect = container.getBoundingClientRect();
    
    const imgWidth = image.naturalWidth;
    const imgHeight = image.naturalHeight;
    const imgRatio = imgWidth / imgHeight;

    const canvasWidth = containerRect.width * dpr;
    const canvasHeight = containerRect.height * dpr;
    const containerRatio = canvasWidth / canvasHeight;

    if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }

    let drawWidth, drawHeight, drawX, drawY;

    // This is 'cover' logic to fill the container
    if (imgRatio > containerRatio) {
      drawHeight = canvasHeight;
      drawWidth = drawHeight * imgRatio;
    } else {
      drawWidth = canvasWidth;
      drawHeight = drawWidth / imgRatio;
    }
    
    drawX = (canvasWidth - drawWidth) / 2;
    drawY = (canvasHeight - drawHeight) / 2;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
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
        if(frames[roundedFrame] && roundedFrame !== lastDrawnFrame.current) {
            drawFrame(roundedFrame);
            lastDrawnFrame.current = roundedFrame;
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
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          >
            <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-foreground/60">Loading experience... {Math.round(loadingProgress)}%</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={scrollRef} style={{ height: SCROLL_HEIGHT }} className="relative w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
           <div 
            className="absolute inset-0 z-20 pointer-events-none" 
            style={{ 
                background: 'radial-gradient(ellipse 85% 75% at 50% 45%, transparent 40%, black 95%)'
            }} 
          />
          <canvas ref={canvasRef} className="absolute z-10" />
          
          {!loading && storyBeats.map((overlay) => (
            <TextOverlayContent key={overlay.title} overlay={overlay} scrollYProgress={scrollYProgress}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollSequence;
