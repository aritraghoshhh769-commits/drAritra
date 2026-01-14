'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Calendar } from 'lucide-react';
import ClientOnly from './ClientOnly';

const Booking = () => {
  return (
    <section id="contact-us" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Contact Us</h2>
            <p className="text-lg text-foreground/80 mt-2">Book an appointment or get in touch.</p>
        </div>
        <ClientOnly>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
              <h3 className="text-2xl font-bold text-primary mb-4">Clinic Details</h3>
              <p className="text-lg text-foreground/80">Dr. Aritra Ghosh Dental Clinic</p>
              <p className="text-foreground/70 mt-2">Mondal Apartment,<br />M. Sarkar Para, Near Nabin Club,<br />Doctor Para, Rampurhat</p>
              <p className="text-lg text-foreground/80 mt-4 font-semibold">
                <a href="tel:+919002694838" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-5 w-5" /> +91 90026 94838
                </a>
              </p>
            </div>
            <Card className="p-8 border-primary/20 bg-card/30 backdrop-blur-sm flex flex-col items-center justify-center text-center">
              <CardContent className="p-0">
                <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4">Ready for your check-up?</h3>
                <p className="text-foreground/80 mb-8">Click the button below to book your appointment in a new tab.</p>
                <Button asChild size="lg">
                    <Link href="/appointment" target="_blank">Book an Appointment</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </ClientOnly>
      </div>
    </section>
  );
};

export default Booking;
