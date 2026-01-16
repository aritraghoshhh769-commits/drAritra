'use client';

import { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 bg-secondary text-secondary-foreground/80">
      <div className="container mx-auto px-4 text-center">
        <p className="font-bold text-lg text-primary">Dr. Aritra Ghosh</p>
        <p className="text-sm">Dr. Aritra Ghosh Dental Clinic</p>
        <p className="text-sm mt-2">+91 90026 94838</p>
        <p className="text-sm">Mondal Apartment, M. Sarkar Para, Rampurhat</p>
        <p className="text-xs mt-8 text-secondary-foreground/60">&copy; {year} Dr. Aritra Ghosh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
