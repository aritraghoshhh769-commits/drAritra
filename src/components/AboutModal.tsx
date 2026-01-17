'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, GraduationCap, CheckCircle, Shield, Trophy, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const doctorImage = PlaceHolderImages.find(img => img.id === 'doctor-portrait');

  const badges = [
    { icon: CheckCircle, text: "BDS Qualified" },
    { icon: GraduationCap, text: "CME Certified (UK)" },
    { icon: Shield, text: "NSS Volunteer" },
    { icon: Trophy, text: "Guinness World Records Participant" },
  ];

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
            <Card className="border-primary/20 bg-card max-h-[90vh] flex flex-col overflow-hidden">
                <CardHeader className="p-0 relative">
                    <div className="w-full h-48">
                        {doctorImage && (
                        <Image
                            src={doctorImage.imageUrl}
                            alt={doctorImage.description}
                            fill
                            className="object-cover object-top"
                            data-ai-hint={doctorImage.imageHint}
                        />
                        )}
                    </div>
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, hsl(var(--card)), transparent 70%)' }} />
                     <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 z-10 text-white/80 bg-black/30 hover:bg-black/50 hover:text-white rounded-full"
                        onClick={onClose}
                    >
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close</span>
                    </Button>
                </CardHeader>

              <CardContent className="p-4 flex-grow overflow-y-auto space-y-4">
                <div className="text-center">
                    <CardTitle className="text-2xl text-primary">About Dr. Aritra Ghosh</CardTitle>
                    <CardDescription className="mt-1">Dedicated Dental Surgeon (BDS)</CardDescription>
                </div>

                <p className="text-sm text-foreground/80 text-center" style={{ lineHeight: 1.6 }}>
                  Committed to providing exceptional care through clinical precision and continuous medical education. With a strong foundation in community service and a passion for ethical practice, Dr. Ghosh ensures every patient receives personalized and effective treatment.
                </p>
                
                <div className="grid grid-cols-2 gap-3 w-full">
                  {badges.map((badge) => (
                    <div
                      key={badge.text}
                      className="flex items-center justify-center p-2 rounded-full border border-primary/40 bg-primary/10"
                    >
                      <badge.icon className="h-4 w-4 mr-2 shrink-0 text-primary" />
                      <span className="font-medium text-xs leading-normal text-primary">{badge.text}</span>
                    </div>
                  ))}
                </div>
              
                <Button 
                 asChild 
                 className="w-full h-11 text-base font-semibold text-primary-foreground rounded-full shadow-[0_8px_20px_rgba(47,154,160,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                 style={{
                   background: 'linear-gradient(100deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)'
                 }}
               >
                 <Link href="/appointment" aria-label="Book an appointment" onClick={onClose}>
                   <CalendarDays className="mr-2 h-5 w-5" />
                   Book Appointment
                 </Link>
               </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;
