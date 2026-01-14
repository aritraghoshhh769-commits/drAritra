'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import ClientOnly from './ClientOnly';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact-us', label: 'Contact us' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const triggerPoint = aboutSection.offsetTop;
        setIsScrolled(window.scrollY >= triggerPoint);
      } else if (window.scrollY > 100) {
        setIsScrolled(true);
      }
    };
    
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    setMobileMenuOpen(false);
  };
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-black/20'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className={cn(
            "text-xl font-bold transition-colors",
            isScrolled ? "text-primary" : "text-white"
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
                  isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
             <Button asChild variant={isScrolled ? "default" : "outline"} className={cn(!isScrolled && "text-white border-white hover:bg-white hover:text-primary")}>
                <Link href="/appointment" target="_blank">Book Appointment</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <ClientOnly>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn(!isScrolled && "text-white hover:bg-white/10 hover:text-white")}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                  <div className="p-6 h-full flex flex-col">
                      <div className="flex justify-between items-center mb-8">
                          <h2 className="text-lg font-semibold text-primary">Menu</h2>
                      </div>
                      <nav className="flex flex-col space-y-6">
                          {navLinks.map((link) => (
                          <a
                              key={link.href}
                              href={link.href}
                              onClick={(e) => handleLinkClick(e, link.href)}
                              className="text-lg font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                          >
                              {link.label}
                          </a>
                          ))}
                      </nav>
                      <div className="mt-auto">
                          <Button asChild className="w-full" size="lg">
                              <Link href="/appointment" target="_blank" onClick={() => setMobileMenuOpen(false)}>Book Appointment</Link>
                          </Button>
                      </div>
                  </div>
                </SheetContent>
              </Sheet>
            </ClientOnly>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
