import Header from '@/components/Header';
import ScrollSequence from '@/components/ScrollSequence';
import About from '@/components/About';
import Services from '@/components/Services';
import Credentials from '@/components/Credentials';
import WhyTrustUs from '@/components/WhyTrustUs';
import Booking from '@/components/Booking';
import Location from '@/components/Location';
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
        <WhyTrustUs />
        <Booking />
        <Location />
        <Footer />
      </main>
    </>
  );
}
