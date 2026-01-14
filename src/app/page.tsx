import Header from '@/components/Header';
import ScrollSequence from '@/components/ScrollSequence';
import About from '@/components/About';
import Services from '@/components/Services';
import Credentials from '@/components/Credentials';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrollSequence />
        <About />
        <Services />
        <Credentials />
        <Booking />
        <Footer />
      </main>
    </>
  );
}
