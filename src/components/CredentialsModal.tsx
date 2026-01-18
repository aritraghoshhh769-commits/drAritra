'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface CredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const credentialImageIds = ['cert-rcp', 'cert-nss', 'cert-guinness'];
const credentialImages = credentialImageIds
  .map(id => PlaceHolderImages.find(img => img.id === id))
  .filter((img): img is NonNullable<typeof img> => Boolean(img));

const CredentialsModal: React.FC<CredentialsModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full h-full p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="relative w-full h-full bg-transparent border-none shadow-none flex flex-col items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-20 text-white/70 hover:text-white rounded-full bg-black/30 hover:bg-black/50"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>

              <CardContent className="p-0 w-full max-w-4xl">
                <Carousel className="w-full">
                  <CarouselContent>
                    {credentialImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card className="bg-background/10 border-none">
                            <CardContent className="flex aspect-[4/3] items-center justify-center p-2 relative">
                              <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-[-1rem] md:left-[-4rem] text-white" />
                  <CarouselNext className="right-[-1rem] md:right-[-4rem] text-white" />
                </Carousel>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CredentialsModal;
