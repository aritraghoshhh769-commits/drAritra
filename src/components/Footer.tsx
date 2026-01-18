'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact-us" className="py-12 bg-secondary text-secondary-foreground/80">
      <div className="container mx-auto px-4">
        {/* --- Mobile Footer --- */}
        <div className="md:hidden text-left space-y-6">
            <div>
              <p className="font-bold text-xl text-primary">Dr. Aritra Ghosh</p>
              <p className="text-base font-medium">Oral & Dental Surgeon</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-foreground">Dr. Aritra Ghosh Dental Clinic</p>
              <p className="text-sm leading-relaxed">
                Our clinic is conveniently located in the heart of Doctor Para, inside Mondal Apartment, near the well-known Nabin Club. We've created a calm and welcoming environment for your comfort.
              </p>
            </div>

            <div className="space-y-3 text-sm">
                <a href="tel:+919002694838" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4 shrink-0" />
                    <span>+91 90026 94838</span>
                </a>
                <a href="mailto:Aritroghosh2013@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4 shrink-0" />
                    <span>Aritroghosh2013@gmail.com</span>
                </a>
                 <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Mondal Apartment, M. Sarkar Para, Near Nabin Club, Doctor Para, Rampurhat</span>
                </div>
            </div>
        </div>

        {/* --- Desktop Footer (simpler) --- */}
        <div className="hidden md:block text-center space-y-2">
            <p className="font-bold text-lg text-primary">Dr. Aritra Ghosh</p>
            <p className="text-sm">Dr. Aritra Ghosh Dental Clinic</p>
            <div className="flex flex-col items-center justify-center gap-1 text-sm">
                <a href="tel:+919002694838" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+91 90026 94838</span>
                </a>
                <a href="mailto:Aritroghosh2013@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>Aritroghosh2013@gmail.com</span>
                </a>
                 <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Mondal Apartment, M. Sarkar Para, Rampurhat</span>
                </p>
            </div>
        </div>

        {/* --- Common Copyright --- */}
        <p className="text-xs !mt-8 text-secondary-foreground/60 text-center">&copy; {year} Dr. Aritra Ghosh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
