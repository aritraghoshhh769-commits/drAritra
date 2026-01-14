import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

const ContactStrip = () => {
  return (
    <section id="contact" className="py-8 bg-primary/90 backdrop-blur-sm text-primary-foreground sticky bottom-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <p className="text-lg font-medium">Ready for a consultation?</p>
            <div className="flex gap-4">
                <Button variant="secondary" size="lg" asChild>
                    <a href="tel:+919002694838">
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                    </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white hover:text-primary border-white" asChild>
                    <a href="https://wa.me/919002694838" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Consultation
                    </a>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
