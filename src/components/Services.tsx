'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ServiceDetailModal from './ServiceDetailModal';
import { Shield, HeartPulse, ClipboardCheck, MessageSquare, Gem } from 'lucide-react';


const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.34 2.25c-1.43.28-2.6 1.14-3.46 2.37-1.12 1.6-1.54 3.58-1.54 5.56 0 2.21.56 4.28 1.68 5.86 1.19 1.65 2.8 2.76 4.75 3.19" />
      <path d="M14.66 2.25c1.43.28 2.6 1.14 3.46 2.37 1.12 1.6 1.54 3.58-1.54 5.56 0 2.21-.56 4.28-1.68 5.86-1.19 1.65-2.8 2.76-4.75 3.19" />
      <path d="M9.34 2.25c1.17.8 2.45 1.25 3.83 1.25 1.38 0 2.66-.45 3.83-1.25" />
      <path d="M12 3.5v9" />
      <path d="M12 12.5c4 0 7.5-1.5 7.5-3.5" />
      <path d="M12 12.5c-4 0-7.5-1.5-7.5-3.5" />
      <path d="M12 12.5v9c-2.5 0-4.5-1-4.5-2.5v-4" />
      <path d="M12 21.5c2.5 0 4.5-1 4.5-2.5v-4" />
    </svg>
  );

const services = [
  {
    icon: ToothIcon,
    title: 'General Dental Care',
    description: 'Comprehensive check-ups and routine dental treatments.',
    longDescription: `Our General Dental Care forms the foundation of your oral health journey. We provide thorough dental examinations, professional cleanings to remove plaque and tartar, and precise fillings to treat cavities. Regular check-ups allow us to detect potential issues like gum disease or decay early, ensuring we can address them with minimally invasive techniques before they become more serious problems. We are committed to helping you maintain a healthy, vibrant smile for life.`,
    ctaText: 'Learn More',
  },
  {
    icon: Shield,
    title: 'Preventive Dentistry',
    description: 'Proactive care to maintain optimal oral health.',
    longDescription: `Preventive Dentistry is all about being proactive rather than reactive. We focus on educating our patients about the best oral hygiene practices, including proper brushing and flossing techniques. Services like dental sealants create a protective barrier over your molars to prevent cavities, while fluoride treatments strengthen your enamel. Our goal is to empower you with the knowledge and tools to prevent dental issues from ever starting.`,
    ctaText: 'Learn More',
  },
  {
    icon: HeartPulse,
    title: 'Oral Pain Management',
    description: 'Effective solutions for acute and chronic dental pain.',
    longDescription: `Dental pain can be debilitating. Our Oral Pain Management services are designed to provide fast and effective relief. We diagnose the root cause of your pain, whether it's from a toothache, an abscess, or post-procedural discomfort. We then create a personalized treatment plan that may include medication, root canal therapy, or other interventions to eliminate the source of the pain and restore your comfort and quality of life.`,
    ctaText: 'Learn More',
  },
  {
    icon: ClipboardCheck,
    title: 'Dental Consultations',
    description: 'Expert advice and personalized treatment planning.',
    longDescription: `A Dental Consultation is your first step towards a healthier smile. During this comprehensive session, Dr. Ghosh will listen to your concerns, conduct a thorough examination of your oral health, and discuss your goals. We use this time to create a fully personalized treatment plan tailored to your unique needs, budget, and schedule. We believe in collaborative care, ensuring you are fully informed and comfortable with every step of your treatment journey.`,
    ctaText: 'Learn More',
  },
  {
    icon: MessageSquare,
    title: 'Oral Hygiene Guidance',
    description: 'Professional guidance for your daily care routine.',
    longDescription: `Great oral health starts at home. Our Oral Hygiene Guidance provides you with the professional advice you need to perfect your daily routine. We offer personalized tips on brushing and flossing, recommend the best products for your specific needs (like soft-bristled brushes or water flossers), and answer any questions you have. Our aim is to make you an expert in your own oral care, preventing common issues and maintaining the results of your in-office treatments.`,
    ctaText: 'Learn More',
  },
  {
    icon: Gem,
    title: 'Conservative Dental Procedures',
    description: 'Minimally invasive treatments to preserve your natural teeth.',
    longDescription: `Our philosophy is to preserve as much of your natural tooth structure as possible. Conservative Dental Procedures focus on minimally invasive techniques like dental bonding to repair chips, inlays and onlays as an alternative to full crowns, and early decay treatment. By intervening early and using modern materials and methods, we can restore function and aesthetics while keeping your natural teeth healthy and strong for years to come.`,
    ctaText: 'Learn More',
  },
];

type Service = (typeof services)[0] & { icon: React.ElementType };

const ServiceCard = ({ service, onCtaClick }: { service: Service; onCtaClick: () => void }) => (
  <div
    className="group flex flex-col justify-between bg-gradient-to-br from-teal-50 to-cyan-100/50 rounded-2xl p-4 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 
               dark:bg-none dark:bg-card
               md:bg-[#DFF6F8] md:p-6 md:shadow-[0px_10px_30px_rgba(0,0,0,0.08)]"
  >
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="bg-white rounded-full p-2 mb-4 md:hidden dark:bg-background">
          <service.icon className="h-5 w-5 text-primary dark:text-accent" />
      </div>

      <h3 className="text-sm font-semibold text-foreground uppercase mb-2 tracking-wider dark:text-foreground md:text-xs md:text-[#1F2A37] md:tracking-wider md:text-base md:mb-3">{service.title}</h3>
      <p className="text-xs text-foreground/80 leading-snug dark:text-muted-foreground md:text-[#6B7280] md:leading-relaxed md:text-sm">{service.description}</p>
    </div>
    <div className="flex justify-center md:justify-start md:mt-4">
      <Button
        className="bg-white text-primary rounded-full px-5 py-2 text-xs font-medium shadow-sm hover:bg-gray-100 dark:bg-secondary dark:text-accent dark:hover:bg-muted md:bg-white md:text-[#1F2A37] md:hover:bg-gray-100 md:px-3 md:h-auto md:py-1.5 md:font-medium md:text-xs md:px-6 md:py-2.5 md:text-sm"
        onClick={onCtaClick}
      >
        {service.ctaText}
      </Button>
    </div>
  </div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section
        id="services"
        className="relative z-10 pt-16 pb-16 md:py-24 bg-background"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary whitespace-nowrap">Our Clinical Services</h2>
            <p className="text-base md:text-lg text-foreground/80 mt-2">Dedicated to your oral health and beautiful smile.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
            {services.map((service, index) => (
                <ServiceCard key={index} service={service} onCtaClick={() => setSelectedService(service)} />
            ))}
          </div>
        </div>
      </section>
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />
    </>
  );
};

export default Services;
