'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import ClientOnly from './ClientOnly';


const Booking = () => {
  return (
    <motion.section 
        id="contact-us" 
        className="py-16 md:py-24 bg-background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Get in Touch</h2>
            <p className="text-base md:text-lg text-foreground/80 mt-4 hidden md:block">
              We are here to assist you with all your dental needs. Whether you have a question, need to schedule a routine check-up, or require urgent care, our team is ready to help. Reaching out is the first step towards a healthier, brighter smile.
            </p>
             <p className="text-base text-foreground/80 mt-4 md:hidden">
              Ready to schedule your visit? Contact us today.
            </p>
        </div>
        
        <div className="md:hidden">
            <ClientOnly>
                <div className="flex flex-col items-center space-y-8 max-w-sm mx-auto">
                    <div className="space-y-4 text-sm text-foreground/80 w-full text-left">
                        <p className="flex items-center justify-start gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>Mondal Apartment, Near Nabin Club, Rampurhat</span>
                        </p>
                         <a href="tel:+919002694838" className="flex items-center justify-start gap-2 hover:text-primary transition-colors">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>+91 90026 94838</span>
                        </a>
                        <a href="mailto:Aritroghosh2013@gmail.com" className="flex items-center justify-start gap-2 hover:text-primary transition-colors">
                          <Mail className="h-4 w-4 text-primary" />
                          <span>Aritroghosh2013@gmail.com</span>
                        </a>
                    </div>
                </div>
            </ClientOnly>
        </div>
        
        <div className="hidden md:grid grid-cols-1 gap-12 items-center">
            <div className="flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
            <p className="text-lg text-foreground/80 font-semibold">Dr. Aritra Ghosh Dental Clinic</p>
            <p className="text-foreground/70 mt-4 leading-relaxed">
              Our clinic is conveniently located in the heart of Doctor Para, inside Mondal Apartment. We are situated near the well-known Nabin Club, making us easy to find. We've created a calm and welcoming environment to ensure your visit is as comfortable as possible.
            </p>
            <p className="text-foreground/80 mt-2">Mondal Apartment,<br />M. Sarkar Para, Near Nabin Club,<br />Doctor Para, Rampurhat</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6">
              <p className="text-lg text-foreground/80 font-semibold">
                <a href="tel:+919002694838" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" /> +91 90026 94838
                </a>
              </p>
              <p className="text-lg text-foreground/80 font-semibold">
                <a href="mailto:Aritroghosh2013@gmail.com" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" /> Aritroghosh2013@gmail.com
                </a>
              </p>
            </div>
            <p className="text-foreground/70 mt-8">
              You can reach us by phone or email. Our team is ready to assist you with scheduling your appointment and answering any questions you may have.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Booking;
