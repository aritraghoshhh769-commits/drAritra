'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useScroll, useTransform, motion, AnimatePresence, type MotionValue } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { siteConfig } from '@/lib/config';
import About from '@/components/About';
import ClientOnly from '@/components/ClientOnly';

// --- Configuration ---
const TOTAL_FRAMES = 120;

// --- Helpers ---
const getFramePath = (frame: number): string => {
  const frameNumber = String(frame + 1).padStart(3, '0');
  return `https://yqhlxtvpnziabkrrprbs.supabase.co/storage/v1/object/public/assets/aritro/ezgif-frame-${frameNumber}.jpg`;
};

// --- Hero Content (Desktop Overlay) ---
const navLinks = siteConfig.navLinks;

const HeroContent = ({ onCredentialsClick, scrollYProgress }: { onCredentialsClick: () => void; scrollYProgress: MotionValue<number> }) => {
  const offsets = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    // A small delay to let browser finish layout before caching offsets
    const timer = setTimeout(() => {
      navLinks.forEach(link => {
          if (link.href.startsWith('#')) {
              const id = link.href.substring(1);
              const el = document.getElementById(id);
              if (el) {
                  // The offsetTop is the static position, before any transforms.
                  // The 600px is the amount the content is pulled up by the animation.
                  offsets.current[id] = el.offsetTop - 600;
              }
          }
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetOffset = offsets.current[targetId];

      if (targetOffset !== undefined) {
        const yOffset = -80; // Offset for the main header that will appear on scroll
        window.scrollTo({ top: targetOffset + yOffset, behavior: 'smooth' });
      }
    }
  };

  const bottomBarY = useTransform(scrollYProgress, [0.4, 0.5], [0, 100]);

  return (
    <>
      <div className="absolute inset-0 flex items-center p-8 md:p-16 lg:p-24 z-20">
        <div className="flex gap-4 max-w-xl translate-y-8">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '13rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-0.5 bg-white/50 rounded-full"
          />
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              Dr. Aritra Ghosh
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-2 text-xl text-white/80"
            >
              Oral & Dental Surgeon
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6"
            >
              <Button asChild variant="outline" className="border-white/80 bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 hidden h-8 md:block z-30"
        style={{ y: bottomBarY }}
      >
        <div className="absolute inset-x-0 bottom-0 h-full bg-black/30 backdrop-blur-md" />
        <div className="relative flex justify-between items-center h-full px-8">
          <button
            onClick={onCredentialsClick}
            className="text-xs text-white/60 hover:text-white"
          >
            Doctor&apos;s Credentials
          </button>

          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs text-white/60 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

// --- Mobile Hero ---
const MobileHero = () => {
  const img = PlaceHolderImages.find(i => i.id === 'mobile-hero');

  return (
    <section id="home" className="relative h-[70vh] w-full">
      {img && (
        <Image
          src={img.imageUrl}
          alt={img.description}
          fill
          priority
          className="object-cover object-top"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

      <div className="absolute bottom-[60px] left-0 right-0 p-6 z-20">
        <h1 className="text-4xl font-bold text-white">Dr. Aritra Ghosh</h1>
        <p className="text-lg text-white/80">Oral & Dental Surgeon</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 md:hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-[65px] w-full -scale-y-100">
          <path
            d="M1200 0L0 0 0 66.3c235.4 22.4 480 34.5 720.9 34.5 139.7 0 274.3-3.8 400.2-11C1167.6 85.3 1189.3 82.5 1200 80V0z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

// --- Desktop Scroll Sequence ---
const DesktopScrollSequence = ({ onCredentialsClick }: { onCredentialsClick: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const [frames, setFrames] = useState<(HTMLImageElement | null)[]>([]);
  useEffect(() => {
    const imageFrames: (HTMLImageElement | null)[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.src = getFramePath(i);
      imageFrames.push(img);
    }
    setFrames(imageFrames);
  }, []);

  const lastFrame = useRef(-1);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const aboutY = useTransform(scrollYProgress, [0.4, 1], [0, -600]);
  const frameIndex = useTransform(scrollYProgress, [0, 0.4], [0, TOTAL_FRAMES - 1]);

  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    const img = frames[idx];
    if (!canvas || !img) return;

    const draw = () => {
        const ctx = canvas.getContext('2d');
        if (!ctx || img.width === 0) return;
        
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const imgAspectRatio = img.width / img.height;
        const canvasAspectRatio = canvas.width / canvas.height;
        let drawWidth, drawHeight, x, y;

        if (imgAspectRatio > canvasAspectRatio) {
            drawHeight = canvas.height;
            drawWidth = drawHeight * imgAspectRatio;
            x = (canvas.width - drawWidth) / 2;
            y = 0;
        } else {
            drawWidth = canvas.width;
            drawHeight = drawWidth / imgAspectRatio;
            x = 0;
            y = (canvas.height - drawHeight) / 2;
        }
        
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    if (img.complete && img.naturalWidth > 0) {
      draw();
    } else {
      img.onload = draw;
    }
  }, [frames]);

  useEffect(() => {
    const unsub = frameIndex.on('change', (v) => {
      const f = Math.round(v);
      if (f >= 0 && f < TOTAL_FRAMES && f !== lastFrame.current) {
        drawFrame(f);
        lastFrame.current = f;
      }
    });
    return () => unsub();
  }, [frameIndex, drawFrame]);
  
  useEffect(() => {
    if (frames.length === 0) return;
  
    let isCancelled = false;
    let loadedCount = 0;
  
    const checkImages = () => {
      if (isCancelled) return;
  
      loadedCount = frames.filter(img => img?.complete && img.naturalWidth > 0).length;
  
      const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
      setLoadingProgress(progress);
  
      if (loadedCount === TOTAL_FRAMES) {
        setTimeout(() => {
          if (!isCancelled) setIsLoaded(true);
        }, 250);
      }
    };
  
    frames.forEach(img => {
      if (img) {
        img.onload = checkImages;
        img.onerror = checkImages; // Treat error as loaded to not get stuck
      }
    });
  
    // Initial check for cached images
    checkImages();
  
    return () => {
      isCancelled = true;
    };
  }, [frames]);


  // Redraw on resize
  useEffect(() => {
    const handleResize = () => {
      if (frames.length === 0) return;
      if (lastFrame.current > -1 && frames[lastFrame.current]) {
        drawFrame(lastFrame.current);
      } else if (frames[0]) {
        drawFrame(0);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame, frames]);

  const loadingScreen = (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Welcome to our clinic</h1>
            <div className="w-64 mx-auto">
                <Progress value={loadingProgress} className="h-2" />
                <p className="text-lg text-primary mt-2 font-semibold">{loadingProgress}%</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {loadingScreen}
      <div ref={targetRef} className="relative h-[300vh] w-full">
        <div className="sticky top-0 h-screen">
          <canvas ref={canvasRef} className="w-full h-full" />
          <HeroContent onCredentialsClick={onCredentialsClick} scrollYProgress={scrollYProgress} />
        </div>
      </div>
      <motion.div id="about" style={{ y: aboutY, marginBottom: -600 }} className="relative z-[1]">
          <div className="md:block hidden">
            <About onCredentialsClick={onCredentialsClick} />
          </div>
      </motion.div>
    </>
  );
};

// --- Export ---
const ScrollSequence = ({ onCredentialsClick }: { onCredentialsClick: () => void }) => {
  return (
    <>
      <div className="md:hidden">
        <MobileHero />
      </div>
      <div id="home" className="hidden md:block">
        <DesktopScrollSequence onCredentialsClick={onCredentialsClick} />
      </div>
    </>
  );
};

export default ScrollSequence;
