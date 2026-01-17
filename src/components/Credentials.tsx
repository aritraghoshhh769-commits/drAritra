'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
      className="py-16 md:py-24 bg-background hidden md:block"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Recognitions & Professional Credentials
          </h2>
          <p className="text-base md:text-lg text-foreground/80 mt-2">
            A commitment to continuous learning and excellence.
          </p>
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            className="w-full max-w-xs sm:max-w-sm mx-auto"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {credentials.map((cred) => {
                const image = PlaceHolderImages.find((img) => img.id === cred.id);
                return (
                  <CarouselItem key={cred.id} className="flex items-center justify-center p-1">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={cred.width}
                        height={cred.height}
                        className="object-contain h-auto w-full max-h-[280px]"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="inline-flex left-4 sm:left-auto" />
            <CarouselNext className="inline-flex right-4 sm:right-auto" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {credentials.map((cred) => {
            const image = PlaceHolderImages.find((img) => img.id === cred.id);
            return (
              <motion.div
                key={cred.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center"
              >
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={cred.width}
                    height={cred.height}
                    className="object-contain h-auto w-full max-h-[293px]"
                    data-ai-hint={image.imageHint}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Credentials;
