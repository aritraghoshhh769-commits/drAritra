import Header from '@/components/Header';
import ScrollSequence from '@/components/ScrollSequence';
import About from '@/components/About';
import Services from '@/components/Services';
import Credentials from '@/components/Credentials';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import DentalIssues from '@/components/DentalIssues';
import ClientOnly from '@/components/ClientOnly';

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
        <Credentials />
        <ClientOnly>
          <Booking />
        </ClientOnly>
      </main>
      <Footer />
    </>
  );
}
