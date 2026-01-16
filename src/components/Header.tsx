'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#dental-issues', label: 'Dental Issues' },
  { href: '#contact-us', label: 'Contact us' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const headerHeight = 80; // Corresponds to md:h-20
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;

        if (aboutSectionTop <= headerHeight) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load to set the correct state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background shadow-md' : 'bg-black/20'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className={cn(
            "text-lg md:text-xl font-bold transition-colors",
            isScrolled ? 'text-primary' : 'text-white'
          )}>
            Dr. Aritra Ghosh
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors cursor-pointer",
                  isScrolled ? 'text-foreground/80 hover:text-foreground' : 'text-white/90 hover:text-white'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
             <Button asChild variant="outline" className={cn(
               'hidden md:inline-flex',
               isScrolled ? 'text-primary border-primary hover:bg-primary hover:text-primary-foreground' : 'text-white border-white hover:bg-white hover:text-primary'
             )}>
                <Link href="/appointment" target="_blank">Book Appointment</Link>
            </Button>
             <Button asChild variant="outline" size="sm" className={cn(
               'md:hidden',
               isScrolled ? 'text-primary border-primary hover:bg-primary hover:text-primary-foreground' : 'text-white border-white hover:bg-white hover:text-primary'
             )}>
                <Link href="/appointment" target="_blank">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
