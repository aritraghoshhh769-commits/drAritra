
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

type Service = {
  title: string;
  description: string;
  longDescription: string;
};

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  return (
    <AnimatePresence>
      {service && (
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
            className="relative w-full max-w-2xl m-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <Card className="border-primary/20 bg-card max-h-[90vh] flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-primary">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 overflow-y-auto flex-grow">
                <p className="text-foreground/80 whitespace-pre-line">
                    {service.longDescription}
                </p>
              </CardContent>
              <div className="p-6 pt-0">
                 <Button asChild className="w-full">
                    <Link href="/appointment" target="_blank" onClick={onClose}>Book an Appointment</Link>
                </Button>
              </div>

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

export default ServiceDetailModal;
