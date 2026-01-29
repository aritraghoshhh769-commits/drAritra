'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ScrollSequence from '@/components/ScrollSequence';
import About from '@/components/About';
import Services from '@/components/Services';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import DentalIssues from '@/components/DentalIssues';
import ClientOnly from '@/components/ClientOnly';
import BottomNavBar from '@/components/BottomNavBar';
import Gallery from '@/components/Gallery';
import AboutModal from '@/components/AboutModal';
import CredentialsModal from '@/components/CredentialsModal';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);
  const [isCredentialsModalOpen, setCredentialsModalOpen] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      {/* Mobile theme toggle */}
      <div className="absolute top-4 right-4 z-30 md:hidden">
        <ThemeToggle className="text-white/80 hover:text-white" />
      </div>

      {/* Header (client-only to avoid hydration issues) */}
      <ClientOnly>
        <Header />
      </ClientOnly>

      {/* Main content (for skip-link accessibility) */}
      <main id="main-content">
        <ScrollSequence onCredentialsClick={() => setCredentialsModalOpen(true)} />
        <div className="md:hidden">
          <About onCredentialsClick={() => setCredentialsModalOpen(true)} />
        </div>
        <Services />
        <Gallery />
        <DentalIssues />
        <Booking />
      </main>

      <Footer />

      <BottomNavBar
        onAboutClick={() => setAboutModalOpen(true)}
      />

      {/* About modal */}
      <ClientOnly>
        <AboutModal
          isOpen={isAboutModalOpen}
          onClose={() => setAboutModalOpen(false)}
          onCredentialsClick={() => {
            setAboutModalOpen(false);
            setCredentialsModalOpen(true);
          }}
        />
      </ClientOnly>

      {/* Credentials modal */}
      <ClientOnly>
        <CredentialsModal
          isOpen={isCredentialsModalOpen}
          onClose={() => setCredentialsModalOpen(false)}
        />
      </ClientOnly>
    </>
  );
}
