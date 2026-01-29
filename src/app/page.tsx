'use client';

import { useState } from 'react';
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

  return (
    <>
      <div className="absolute top-4 right-4 z-30 md:hidden">
        <ThemeToggle className="text-white/80 bg-black/20 hover:bg-black/40 hover:text-white" />
      </div>
      <ClientOnly>
        <Header />
      </ClientOnly>
      <main>
        <ClientOnly>
          <ScrollSequence onCredentialsClick={() => setCredentialsModalOpen(true)} />
        </ClientOnly>
        <About onCredentialsClick={() => setCredentialsModalOpen(true)} />
        <Services />
        <Gallery />
        <ClientOnly>
          <DentalIssues />
        </ClientOnly>
        <ClientOnly>
          <Booking />
        </ClientOnly>
      </main>
      <Footer />
      <ClientOnly>
        <BottomNavBar
          onAboutClick={() => setAboutModalOpen(true)}
        />
      </ClientOnly>
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
      <ClientOnly>
        <CredentialsModal
          isOpen={isCredentialsModalOpen}
          onClose={() => setCredentialsModalOpen(false)}
        />
      </ClientOnly>
    </>
  );
}
