'use client';

import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact-us" className="py-8 bg-secondary text-secondary-foreground/80">
      <div className="container mx-auto px-4 text-center">
        <p className="font-bold text-lg text-primary">Dr. Aritra Ghosh</p>
        <p className="text-sm">Dr. Aritra Ghosh Dental Clinic</p>
        <p className="text-sm mt-2">
          <a href="tel:+919002694838" className="hover:text-primary transition-colors">+91 90026 94838</a>
        </p>
        <p className="text-sm">
          <a href="mailto:Aritroghosh2013@gmail.com" className="hover:text-primary transition-colors">Aritroghosh2013@gmail.com</a>
        </p>
        <p className="text-sm">Mondal Apartment, M. Sarkar Para, Rampurhat</p>
        <p className="text-xs mt-8 text-secondary-foreground/60">&copy; {year} Dr. Aritra Ghosh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
