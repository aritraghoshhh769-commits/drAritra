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

export default function Home() {
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  return (
    <>
      <ClientOnly>
        <Header />
      </ClientOnly>
      <main>
        <ClientOnly>
          <ScrollSequence />
        </ClientOnly>
        <About />
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
        />
      </ClientOnly>
    </>
  );
}
