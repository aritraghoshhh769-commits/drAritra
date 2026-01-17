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
import Credentials from '@/components/Credentials';
import Gallery from '@/components/Gallery';
import CredentialsModal from '@/components/CredentialsModal';

export default function Home() {
  const [isCredentialsModalOpen, setCredentialsModalOpen] = useState(false);

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
        <Credentials />
        <ClientOnly>
          <DentalIssues />
        </ClientOnly>
        <ClientOnly>
          <Booking />
        </ClientOnly>
      </main>
      <Footer />
      <ClientOnly>
        <BottomNavBar onCredentialsClick={() => setCredentialsModalOpen(true)} />
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
