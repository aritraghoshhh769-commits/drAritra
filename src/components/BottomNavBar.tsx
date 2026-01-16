'use client';

import React, { useState, useEffect } from 'react';
import { User, BriefcaseMedical, Orbit, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '#about', label: 'About', icon: User },
  { href: '#services', label: 'Services', icon: BriefcaseMedical },
  { href: '#dental-issues', label: 'Dental Issues', icon: Orbit },
  { href: '#contact-us', label: 'Contact', icon: Phone },
];

const BottomNavBar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = navItems.map(item => item.href.substring(1));
    const sections = sectionIds.map(id => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-t border-white/20 md:hidden">
      <div className="p-2 border-b border-white/20">
        <Button asChild className="w-full font-semibold" size="sm">
            <Link href="/appointment" target="_blank">
              Book an Appointment
            </Link>
        </Button>
      </div>
      <nav>
        <div className="flex justify-around items-center h-14">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={cn(
                'flex flex-col items-center justify-center text-xs w-full h-full transition-colors',
                activeSection === item.href.substring(1) ? 'text-primary' : 'text-white/70 hover:text-white'
              )}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="truncate">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BottomNavBar;
