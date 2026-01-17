'use client';

import React, { useState, useEffect } from 'react';
import { Home, User, BriefcaseMedical, Phone, GalleryHorizontal, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about-modal', label: 'About', icon: User },
  { href: '#services', label: 'Services', icon: BriefcaseMedical },
  { href: '#gallery', label: 'Gallery', icon: GalleryHorizontal },
  { href: '#credentials-modal', label: 'Credentials', icon: Award },
  { href: '#contact-us', label: 'Contact', icon: Phone },
];

const BottomNavBar = ({ onCredentialsClick, onAboutClick }: { onCredentialsClick: () => void; onAboutClick: () => void; }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = navItems.map(item => item.href.substring(1)).filter(id => id && !id.endsWith('-modal'));
    const sections = sectionIds.map(id => document.getElementById(id));
    const homeSection = document.getElementById('home');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // A bit of a hack to prioritize home when near the top
            if (window.scrollY < window.innerHeight / 2) {
              setActiveSection('home');
            } else {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: [0, 0.5, 1] }
    );

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    const homeObserver = new IntersectionObserver(
        (entries) => {
            if(entries[0].isIntersecting) {
                setActiveSection('home');
            }
        }, { threshold: 0.1}
    );

    if (homeSection) {
        homeObserver.observe(homeSection)
    }


    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
      if (homeSection) {
          homeObserver.unobserve(homeSection);
      }
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#credentials-modal') {
      onCredentialsClick();
      setActiveSection('credentials-modal');
      return;
    }
    if (href === '#about-modal') {
      onAboutClick();
      setActiveSection('about-modal');
      return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-t border-border md:hidden">
      <div className="p-1 border-b border-border">
        <Button asChild className="w-full font-semibold" size="sm">
            <Link href="/appointment" target="_blank">
              Book an Appointment
            </Link>
        </Button>
      </div>
      <nav>
        <div className="flex justify-around items-center h-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={cn(
                'flex flex-col items-center justify-center text-xs w-full h-full transition-colors',
                activeSection === item.href.substring(1) ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
              )}
            >
              <item.icon className="h-5 w-5 mb-0.5" />
              <span className="truncate">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BottomNavBar;
