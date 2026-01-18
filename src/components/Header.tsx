'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#dental-issues', label: 'Dental Issues' },
  { href: '#contact-us-desktop', label: 'Contact us' },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide header when in hero section (when 'about' section is not intersecting and is below viewport)
        if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      },
      { threshold: 0 }
    );

    observer.observe(aboutSection);

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);


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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out md:block hidden',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none',
        'bg-black/50 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="text-lg md:text-xl font-bold transition-colors text-white">
            Dr. Aritra Ghosh
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium transition-colors cursor-pointer text-gray-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
             <Button asChild variant="outline" className="hidden md:inline-flex border-white text-white hover:bg-white hover:text-black">
                <Link href="/appointment" target="_blank">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
