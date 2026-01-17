'use client';
import React from 'react';
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import ClientOnly from './ClientOnly';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const galleryImageIds = [
  'gallery-2',
  'gallery-1',
  'gallery-3',
  'doctor-portrait',
  'cert-nss',
  'cert-rcp',
  'cert-guinness'
];

// Ensure PlaceHolderImages is correctly typed and filtered for non-null values
const images = galleryImageIds
  .map(id => PlaceHolderImages.find(img => img.id === id))
  .filter((img): img is NonNullable<typeof img> => Boolean(img))
  .map(image => ({
    src: image.imageUrl,
    alt: image.description,
    objectPosition: image.id === 'doctor-portrait' ? 'object-top' : 'object-cover',
  }));


const Gallery = () => {
    const isMobile = useIsMobile();

	return (
		<section id="gallery" className="w-full bg-background py-16 md:py-24">
			<div className="relative flex h-auto md:h-[50vh] items-center justify-center">
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/0.1),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<div className="text-center px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-primary">Our Clinic & Credentials</h2>
					<p className="text-base md:text-lg text-foreground/80 mt-2">
						A glimpse into our professional environment and qualifications.
					</p>
				</div>
			</div>

            <ClientOnly>
            { isMobile === undefined ? (
                <div className="h-[75vh]" /> // Fallback for SSR to prevent layout shift
            ) : isMobile ? (
				<div className="mt-8 md:hidden">
					<Carousel
						className="w-full max-w-md mx-auto"
						opts={{
                            align: 'center',
                            loop: true,
						}}
					>
						<CarouselContent>
						{images.map((image, index) => {
							return (
							<CarouselItem key={index} className="basis-full sm:basis-5/6 flex items-center justify-center p-1">
								<div className="w-full aspect-square relative overflow-hidden rounded-xl shadow-lg">
									<Image
										src={image.src}
										alt={image.alt || ''}
										fill
										className={cn('object-cover', image.objectPosition)}
                                        sizes="(max-width: 768px) 80vw, 33vw"
									/>
								</div>
							</CarouselItem>
							);
						})}
						</CarouselContent>
						<CarouselPrevious className="inline-flex left-0" />
						<CarouselNext className="inline-flex right-0" />
					</Carousel>
				</div>
			) : (
                <>
                    <ZoomParallax images={images.map(img => ({src: img.src, alt: img.alt, objectPosition: img.objectPosition}))} />
                    <div className="h-[50vh] bg-background"/>
                </>
			)}
            </ClientOnly>
		</section>
	);
}

export default Gallery;
