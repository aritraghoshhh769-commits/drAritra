'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

interface CredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const CredentialsModal: React.FC<CredentialsModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-lg m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="border-primary/20 bg-card max-h-[90vh] flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-primary">Recognitions & Credentials</CardTitle>
                <CardDescription>A commitment to excellence.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center">
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
                              width={cred.width * 1.2}
                              height={cred.height * 1.2}
                              className="object-contain h-auto w-full max-h-[60vh]"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="inline-flex -left-4" />
                  <CarouselNext className="inline-flex -right-4" />
                </Carousel>
              </CardContent>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-foreground/70 hover:text-foreground"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CredentialsModal;
