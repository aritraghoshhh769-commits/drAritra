'use client';

import { motion } from 'framer-motion';
import AppointmentForm from '@/components/AppointmentForm';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
        <Link href="/" passHref>
             <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10 text-foreground/70 hover:text-foreground">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
            </Button>
        </Link>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-lg"
      >
        <AppointmentForm />
      </motion.div>
    </div>
  );
}
