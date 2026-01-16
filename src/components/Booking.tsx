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
        <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Get in Touch</h2>
            <p className="text-lg text-foreground/80 mt-4">
              We are here to assist you with all your dental needs. Whether you have a question, need to schedule a routine check-up, or require urgent care, our team is ready to help. Reaching out is the first step towards a healthier, brighter smile.
            </p>
        </div>
        <div className="grid grid-cols-1 gap-12 items-center">
            <div className="flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
            <p className="text-lg text-foreground/80 font-semibold">Dr. Aritra Ghosh Dental Clinic</p>
            <p className="text-foreground/70 mt-4 leading-relaxed">
              Our clinic is conveniently located in the heart of Doctor Para, inside Mondal Apartment. We are situated near the well-known Nabin Club, making us easy to find. We've created a calm and welcoming environment to ensure your visit is as comfortable as possible.
            </p>
            <p className="text-foreground/80 mt-2">Mondal Apartment,<br />M. Sarkar Para, Near Nabin Club,<br />Doctor Para, Rampurhat</p>
            <p className="text-lg text-foreground/80 mt-6 font-semibold">
              <a href="tel:+919002694838" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" /> +91 90026 94838
              </a>
            </p>
            <p className="text-foreground/70 mt-8">
              You can reach us by phone during clinic hours or use our convenient online booking system to request an appointment at any time. Clicking the button below will take you to our appointment form where you can select a preferred date and time.
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
