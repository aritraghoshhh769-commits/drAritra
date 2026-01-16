'use client';

import React from 'react';
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
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-black/20'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className={cn(
            "text-lg md:text-xl font-bold transition-colors",
            "text-white"
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
                  "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
             <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-primary hidden md:inline-flex">
                <Link href="/appointment" target="_blank">Book Appointment</Link>
            </Button>
             <Button asChild variant="outline" size="sm" className="text-white border-white/80 hover:bg-white hover:text-primary md:hidden">
                <Link href="/appointment" target="_blank">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
