import Header from '@/components/Header';
import ScrollSequence from '@/components/ScrollSequence';
import About from '@/components/About';
import Services from '@/components/Services';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import DentalIssues from '@/components/DentalIssues';
import ClientOnly from '@/components/ClientOnly';
import BottomNavBar from '@/components/BottomNavBar';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ClientOnly>
          <ScrollSequence />
        </ClientOnly>
        <About />
        <Services />
        <ClientOnly>
          <DentalIssues />
        </ClientOnly>
        <ClientOnly>
          <Booking />
        </ClientOnly>
      </main>
      <Footer />
      <ClientOnly>
        <BottomNavBar />
      </ClientOnly>
    </>
  );
}
