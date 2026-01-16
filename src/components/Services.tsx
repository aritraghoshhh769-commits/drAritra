'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'General Dental Care',
    description: 'Comprehensive check-ups and routine dental treatments.',
    ctaText: 'Learn More',
    ctaLink: '#',
  },
  {
    title: 'Preventive Dentistry',
    description: 'Proactive care to maintain optimal oral health.',
    ctaText: 'Learn More',
    ctaLink: '#',
  },
  {
    title: 'Oral Pain Management',
    description: 'Effective solutions for acute and chronic dental pain.',
    ctaText: 'Learn More',
    ctaLink: '#',
  },
  {
    title: 'Dental Consultations',
    description: 'Expert advice and personalized treatment planning.',
    ctaText: 'Learn More',
    ctaLink: '#',
  },
  {
    title: 'Oral Hygiene Guidance',
    description: 'Professional guidance for your daily care routine.',
    ctaText: 'Learn More',
    ctaLink: '#',
  },
  {
    title: 'Conservative Dental Procedures',
    description: 'Minimally invasive treatments to preserve your natural teeth.',
    ctaText: 'Learn More',
    ctaLink: '#',
  },
];


const Services = () => {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

  return (
    <motion.section
        id="services"
        className="py-20 sm:py-32 bg-background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Clinical Services</h2>
          <p className="text-lg text-foreground/80 mt-2">Dedicated to your oral health and beautiful smile.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex h-full flex-col bg-[#DFF6F8] rounded-2xl p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[#1F2A37] uppercase mb-4 tracking-wider">{service.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-6 flex-grow">{service.description}</p>
              
              <div className="mt-auto">
                <Button asChild className="bg-white text-[#1F2A37] rounded-full px-6 h-auto py-2.5 text-sm font-medium shadow-sm hover:bg-gray-100">
                    <a 
                        href={service.ctaLink} 
                        onClick={(e) => handleLinkClick(e, service.ctaLink)}
                    >
                        {service.ctaText}
                    </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
