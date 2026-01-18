'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact-us" className="py-8 bg-secondary text-secondary-foreground/80">
      <div className="container mx-auto px-4 text-center space-y-2">
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
        <p className="text-xs !mt-8 text-secondary-foreground/60">&copy; {year} Dr. Aritra Ghosh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
