'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zM17.5 19.5h1.57l-6.72-8.98-1.57-2.12H5.78l6.83 9.13 1.49 2.01h5.6z" />
    </svg>
);


const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#dental-issues', label: 'Dental Issues' },
    { href: '#contact-us-desktop', label: 'Contact' },
  ];
  
  const socialLinks = [
    { href: 'https://www.facebook.com/share/1aU68sBM26/', label: 'Facebook', icon: Facebook },
    { href: 'https://x.com/dr_aritraghosh', label: 'X', icon: XIcon },
    { href: 'https://www.linkedin.com/in/aritra-ghosh-31a00a3a7/', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://www.instagram.com/dr.aritraghosh/', label: 'Instagram', icon: Instagram },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=Aritroghosh2013@gmail.com';
  const mapUrl = 'https://maps.app.goo.gl/R4xbi3aBMYPceNQe6';

  return (
    <footer id="contact-us" className="py-12 bg-secondary text-secondary-foreground/80 transition-colors duration-300">
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
                 <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary transition-colors">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Mondal Apartment, M. Sarkar Para, Near Nabin Club, Doctor Para, Rampurhat</span>
                </a>
            </div>
            <div className="flex items-center space-x-6 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
        </div>

        {/* --- Desktop Footer --- */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-8">
            {/* Col 1: Brand & Contact */}
            <div className="col-span-5">
                <h3 className="font-bold text-lg text-primary">Dr. Aritra Ghosh</h3>
                <p className="text-sm mt-1">Oral & Dental Surgeon</p>
                <div className="mt-4 space-y-3 text-sm">
                    <a href="tel:+919002694838" className="flex items-center gap-3 hover:text-primary transition-colors">
                        <Phone className="h-4 w-4 shrink-0" />
                        <span>+91 90026 94838</span>
                    </a>
                    <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                        <Mail className="h-4 w-4 shrink-0" />
                        <span>Aritroghosh2013@gmail.com</span>
                    </a>
                    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary transition-colors">
                        <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>Mondal Apartment, M. Sarkar Para, Near Nabin Club, Doctor Para, Rampurhat</span>
                    </a>
                </div>
                <div className="mt-6 flex items-center space-x-5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-secondary-foreground/60 hover:text-primary transition-colors"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
            </div>
            
            {/* Col 2: Quick Links */}
            <div className="col-span-3">
                <h3 className="font-semibold text-base text-foreground">Quick Links</h3>
                <ul className="mt-4 space-y-2 text-sm">
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="hover:text-primary transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Col 3: Appointment */}
            <div className="col-span-4">
                <h3 className="font-semibold text-base text-foreground">Office Hours</h3>
                <p className="mt-4 text-sm">Monday - Friday</p>
                <p className="text-sm text-foreground font-medium">12:00 PM - 07:00 PM</p>
                <p className="mt-2 text-sm">Saturday & Sunday - Closed</p>

                <Button asChild className="mt-4 w-full">
                    <Link href="/appointment">Book Appointment</Link>
                </Button>
            </div>
        </div>


        {/* --- Common Copyright --- */}
        <p className="text-xs !mt-12 text-secondary-foreground/60 text-center">&copy; {year} Dr. Aritra Ghosh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
