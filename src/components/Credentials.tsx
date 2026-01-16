'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const credentials = [
  {
    id: 'cert-nss',
    width: 270,
    height: 191,
  },
  {
    id: 'cert-guinness',
    width: 207,
    height: 293,
  },
  {
    id: 'cert-rcp',
    width: 270,
    height: 191,
  },
];

const Credentials = () => {
  return (
    <motion.section 
        id="credentials" 
        className="py-20 sm:py-32 bg-background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Recognitions & Professional Credentials</h2>
          <p className="text-lg text-foreground/80 mt-2">A commitment to continuous learning and excellence.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {credentials.map((cred) => {
            const image = PlaceHolderImages.find(img => img.id === cred.id);
            return (
              <div key={cred.id} className="relative transition-all duration-300 hover:z-10 hover:scale-105">
                {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={cred.width}
                      height={cred.height}
                      className="rounded-lg shadow-lg"
                      data-ai-hint={image.imageHint}
                    />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Credentials;
