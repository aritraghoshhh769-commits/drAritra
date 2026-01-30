'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import ScrollSequence from '@/components/ScrollSequence';
import Services from '@/components/Services';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import DentalIssues from '@/components/DentalIssues';
import ClientOnly from '@/components/ClientOnly';
import BottomNavBar from '@/components/BottomNavBar';
import Gallery from '@/components/Gallery';
import CredentialsModal from '@/components/CredentialsModal';
import { ThemeToggle } from '@/components/ThemeToggle';
import AboutModal from '@/components/AboutModal';

export default function Home() {
  const [isCredentialsModalOpen, setCredentialsModalOpen] = useState(false);
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  const handleCredentialsClick = () => {
    setAboutModalOpen(false); // Close about modal if open
    setCredentialsModalOpen(true);
  }

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
        <ScrollSequence onCredentialsClick={handleCredentialsClick} />
        <Services />
        <Gallery />
        <DentalIssues />
        <Booking />
      </main>

      <Footer />

      <BottomNavBar onAboutClick={() => setAboutModalOpen(true)} />

      {/* Modals */}
      <ClientOnly>
        <CredentialsModal
          isOpen={isCredentialsModalOpen}
          onClose={() => setCredentialsModalOpen(false)}
        />
        <AboutModal 
          isOpen={isAboutModalOpen}
          onClose={() => setAboutModalOpen(false)}
          onCredentialsClick={handleCredentialsClick}
        />
      </ClientOnly>
    </>
  );
}
