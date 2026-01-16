'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImageIds = ['gallery-1', 'gallery-2', 'gallery-3'];

const galleryImages = galleryImageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Clinic</h2>
          <p className="text-base md:text-lg text-foreground/80 mt-2">
            A clean, modern, and welcoming environment.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((image, index) => (
            image && (
                <motion.div
                    key={image.id}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                />
                </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
