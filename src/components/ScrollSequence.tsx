'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { siteConfig } from '@/lib/config';
import { Progress } from '@/components/ui/progress';

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
        const img = new window.Image();
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

const navLinks = siteConfig.navLinks;

const HeroContent = ({ onCredentialsClick }: { onCredentialsClick: () => void }) => {
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
            <div
                className="absolute inset-0 flex items-center justify-start p-8 md:p-16 lg:p-24 z-20"
            >
                <div className="flex items-start gap-4 md:gap-5 max-w-xl translate-y-8">
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "13rem" }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                        className="w-0.5 bg-white/50 rounded-full"
                    />
                    <div className="max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                        >
                            Dr. Aritra Ghosh
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
                            className="mt-2 text-base md:text-xl lg:text-2xl text-white/80 font-light tracking-wide"
                        >
                            Oral & Dental Surgeon
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
                            className="mt-4 text-sm md:text-base text-white/70 font-light"
                        >
                            Modern, high-trust dental services focused on your comfort and oral well-being. Experience personalized care with cutting-edge technology.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.1 }}
                            className="mt-8"
                        >
                            <Button asChild variant="outline" size="lg" className="border-white/80 bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black font-semibold">
                                <Link href="/appointment">Book Appointment</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-[60] hidden md:block">
                <div className="utility-panel flex items-center justify-between py-4 px-8">
                    <div className="flex items-center gap-6">
                        <button onClick={onCredentialsClick} className="text-xs text-white/60 hover:text-white transition-colors font-light">
                            Doctor&apos;s Credentials
                        </button>
                    </div>
                    <nav className="flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-xs font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button asChild variant="outline" className="border-white/80 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black">
                            <Link href="/appointment" target="_blank">Book Appointment</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

const MobileHero = () => {
    const mobileHeroImage = PlaceHolderImages.find(img => img.id === 'mobile-hero');

    return (
        <section
            id="home"
            className="relative h-[70vh] w-full mb-[-65px]"
        >
            {mobileHeroImage && (
                <Image
                    src={mobileHeroImage.imageUrl}
                    alt={mobileHeroImage.description}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="100vw"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

            <div className="absolute bottom-0 left-0 right-0 p-6 z-20" style={{ bottom: '60px' }}>
                <h1 className="text-4xl font-bold text-white tracking-tight">
                    Dr. Aritra Ghosh
                </h1>
                <p className="mt-1 text-lg text-white/80 font-light tracking-wide">
                    Oral & Dental Surgeon
                </p>
            </div>

            <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[65px] w-[calc(100%+1.3px)] -scale-y-100">
                    <path d="M1200 0L0 0 0 66.3c235.4 22.4 480 34.5 720.9 34.5 139.7 0 274.3-3.8 400.2-11C1167.6 85.3 1189.3 82.5 1200 80V0z" className="fill-background"></path>
                </svg>
            </div>
        </section>
    );
};

// --- Main Scroll Sequence Component ---
const ScrollSequence: React.FC<{ onCredentialsClick: () => void }> = ({ onCredentialsClick }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [frames, setFrames] = useState<HTMLImageElement[]>([]);
    const lastDrawnFrame = useRef(-1);
    const isMobile = useIsMobile();
    const hasMounted = isMobile !== undefined;


    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    useEffect(() => {
        if (hasMounted && !isMobile) {
            preloadImages(setLoadingProgress, (loadedFrames) => {
                setFrames(loadedFrames);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [isMobile, hasMounted]);

    const drawFrame = useCallback((frameIdx: number) => {
        const canvas = canvasRef.current;
        const image = frames[frameIdx];
        if (!canvas || !image) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        const canvasWidth = rect.width * dpr;
        const canvasHeight = rect.height * dpr;

        if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
        }

        const imgAspectRatio = image.naturalWidth / image.naturalHeight;
        const canvasAspectRatio = canvas.width / canvas.height;

        let renderWidth, renderHeight, x, y;

        if (imgAspectRatio > canvasAspectRatio) {
            renderHeight = canvas.height;
            renderWidth = renderHeight * imgAspectRatio;
            x = (canvas.width - renderWidth) / 2;
            y = 0;
        } else {
            renderWidth = canvas.width;
            renderHeight = renderWidth / imgAspectRatio;
            x = 0;
            y = (canvas.height - renderHeight) / 2;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, x, y, renderWidth, renderHeight);
    }, [frames]);


    useEffect(() => {
        if (isMobile) return;
        const handleResize = () => {
            if (frames.length > 0) {
                drawFrame(Math.round(frameIndex.get()));
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [drawFrame, frames, frameIndex, isMobile]);

    useEffect(() => {
        if (isMobile) return;
        const unsubscribe = frameIndex.on("change", (latest) => {
            const roundedFrame = Math.round(latest);
            if (frames[roundedFrame] && roundedFrame !== lastDrawnFrame.current) {
                drawFrame(roundedFrame);
                lastDrawnFrame.current = roundedFrame;
            }
        });
        return () => unsubscribe();
    }, [frameIndex, frames, drawFrame, isMobile]);

    useEffect(() => {
        if (isMobile || loading || frames.length === 0) return;
        drawFrame(0);
    }, [loading, frames, drawFrame, isMobile]);

    if (!hasMounted) {
        // SEO Fallback: Render H1 and key content for search engines
        // This is visible in the initial HTML before JS hydration
        return (
            <section id="home" className="relative h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16 lg:p-24">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                            Dr. Aritra Ghosh
                        </h1>
                        <p className="mt-2 text-base md:text-xl lg:text-2xl text-white/80 font-light tracking-wide">
                            Oral &amp; Dental Surgeon
                        </p>
                        <p className="mt-4 text-sm md:text-base text-white/70 font-light">
                            Modern, high-trust dental services focused on your comfort and oral well-being. Experience personalized care with cutting-edge technology.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (isMobile) {
        return <MobileHero />;
    }

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background p-8"
                    >
                        <div className="w-full max-w-sm text-center">
                            <h2 className="text-2xl font-bold text-primary mb-2">Welcome!</h2>
                            <p className="text-foreground/70 mb-4">Preparing your seamless experience.</p>
                            <Progress value={loadingProgress} className="h-2 w-full my-4" />
                            <p className="text-sm text-foreground/60 font-mono">{Math.round(loadingProgress)}%</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div id="home" ref={targetRef} className="relative w-full h-[600vh]">
                <div className="sticky top-0 h-screen w-full">
                    <section className="hero-scroll">
                        <div className="hero-stage">
                            <canvas ref={canvasRef} className="w-full h-full" />
                        </div>

                        {!loading && <HeroContent onCredentialsClick={onCredentialsClick} />}
                    </section>
                </div>
            </div>
        </>
    );
};

export default ScrollSequence;
