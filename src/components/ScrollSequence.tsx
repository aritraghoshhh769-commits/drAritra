'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// --- Configuration Constants ---
const TOTAL_FRAMES = 120;

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

// --- Main Scroll Sequence Component ---
const ScrollSequence: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);
  const lastDrawnFrame = useRef(-1);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

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
    
    const imgWidth = image.naturalWidth;
    const imgHeight = image.naturalHeight;

    if (canvas.width !== imgWidth || canvas.height !== imgHeight) {
        canvas.width = imgWidth;
        canvas.height = imgHeight;
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  }, [frames]);


  useEffect(() => {
    const handleResize = () => {
      if (frames.length > 0) {
        drawFrame(Math.round(frameIndex.get()));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame, frames, frameIndex]);
  
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
        const roundedFrame = Math.round(latest);
        if (frames[roundedFrame] && roundedFrame !== lastDrawnFrame.current) {
            drawFrame(roundedFrame);
            lastDrawnFrame.current = roundedFrame;
        }
    });
    return () => unsubscribe();
  }, [frameIndex, frames, drawFrame]);

  useEffect(() => {
    if (!loading && frames.length > 0) {
      drawFrame(0);
    }
  }, [loading, frames, drawFrame]);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
      <div ref={targetRef} className="relative w-full h-[600vh]">
        <div className="sticky top-0 h-screen w-full">
            <section className="hero-scroll">
              <div className="hero-stage">
                  <canvas ref={canvasRef} />
              </div>
              
              {!loading && (
                <>
                  <div className="absolute bottom-0 right-0 z-20">
                    <div className="utility-panel flex items-center py-3 pr-8 pl-48">
                      <div className="flex items-center gap-3">
                        <a href="#" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
                        <a href="#" aria-label="Twitter" className="text-white/60 hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
                        <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
                        <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
                      </div>
                      <a href="#contact-us" onClick={(e) => handleLinkClick(e, '#contact-us')} className="ml-5 text-xs text-white/60 hover:text-white transition-colors font-light">
                          Clinic Info
                      </a>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                    className="absolute inset-0 flex items-center justify-start p-8 md:p-16 lg:p-24 z-20 pointer-events-none translate-y-56"
                  >
                      <div className="flex items-start gap-4 md:gap-5">
                          <div className="w-0.5 h-28 bg-white/50 rounded-full" />
                          <div>
                              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                                  Dr. Aritra Ghosh
                              </h1>
                              <p className="mt-2 text-base md:text-xl lg:text-2xl text-white/80 font-light tracking-wide">
                                  Oral & Dental Surgeon
                              </p>
                              <div className="mt-8 pointer-events-auto">
                                <Button asChild variant="outline" className="border-white/80 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black">
                                  <Link href="/appointment">Book Appointment</Link>
                                </Button>
                              </div>
                          </div>
                      </div>
                  </motion.div>
                </>
              )}
            </section>
        </div>
      </div>
    </>
  );
};

export default ScrollSequence;
