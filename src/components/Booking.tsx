'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Booking = () => {
  return (
    <motion.section 
        id="contact-us" 
        className="py-20 sm:py-32 bg-background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Contact Us</h2>
            <p className="text-lg text-foreground/80 mt-2">Book an appointment or get in touch.</p>
        </div>
        <div className="grid grid-cols-1 gap-12 items-center">
            <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Clinic Details</h3>
            <p className="text-lg text-foreground/80">Dr. Aritra Ghosh Dental Clinic</p>
            <p className="text-foreground/70 mt-2">Mondal Apartment,<br />M. Sarkar Para, Near Nabin Club,<br />Doctor Para, Rampurhat</p>
            <p className="text-lg text-foreground/80 mt-4 font-semibold">
              <a href="tel:+919002694838" className="flex items-center justify-center gap-2 hover:text-primary">
                <Phone className="h-5 w-5" /> +91 90026 94838
              </a>
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                  <Link href="/appointment" target="_blank">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Booking;
