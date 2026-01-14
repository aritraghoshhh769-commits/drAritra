import ScrollSequence from '@/components/ScrollSequence';
import About from '@/components/About';
import Services from '@/components/Services';
import Credentials from '@/components/Credentials';
import WhyTrustUs from '@/components/WhyTrustUs';
import Booking from '@/components/Booking';
import Location from '@/components/Location';
import ContactStrip from '@/components/ContactStrip';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <ScrollSequence />
      <About />
      <Services />
      <Credentials />
      <WhyTrustUs />
      <Booking />
      <Location />
      <ContactStrip />
      <Footer />
    </main>
  );
}
