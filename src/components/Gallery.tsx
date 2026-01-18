'use client';
import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryImageIds = [
  'gallery-2',
  'gallery-1',
  'gallery-3',
  'doctor-portrait',
];

// Ensure PlaceHolderImages is correctly typed and filtered for non-null values
const images = galleryImageIds
  .map((id) => PlaceHolderImages.find((img) => img.id === id))
  .filter((img): img is NonNullable<typeof img> => Boolean(img))
  .map((image) => ({
    src: image.imageUrl,
    alt: image.description,
    objectPosition: image.id === 'doctor-portrait' ? 'object-top' : 'object-cover',
  }));

const Gallery = () => {
  return (
    <section id="gallery" className="w-full bg-background py-16 md:py-24">
      <div className="text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Our Clinic
        </h2>
        <p className="text-base md:text-lg text-foreground/80 mt-2">
          A glimpse into our professional environment.
        </p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-[4/3] relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Image
                src={image.src}
                alt={image.alt || ''}
                fill
                className={cn(
                  'object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out',
                  image.objectPosition
                )}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
