'use client';
import React from 'react';
import Lenis from '@studio-freight/lenis'
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const galleryImageIds = [
  'gallery-2',
  'gallery-1',
  'gallery-3',
  'doctor-portrait',
  'cert-nss',
  'cert-rcp',
  'cert-guinness'
];

const images = galleryImageIds
  .map(id => PlaceHolderImages.find(img => img.id === id))
  .filter(Boolean)
  .map(image => ({
    src: image!.imageUrl,
    alt: image!.description,
  }));


const Gallery = () => {

	React.useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])


	return (
		<section id="gallery" className="w-full bg-background">
			<div className="relative flex h-[50vh] items-center justify-center">
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/0.1),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-primary">Our Clinic & Credentials</h2>
					<p className="text-base md:text-lg text-foreground/80 mt-2">
						A glimpse into our professional environment and qualifications.
					</p>
				</div>
			</div>
			<ZoomParallax images={images} />
			<div className="h-[50vh] bg-background"/>
		</section>
	);
}

export default Gallery;
