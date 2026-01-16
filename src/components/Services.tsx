'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ServiceDetailModal from './ServiceDetailModal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const services = [
  {
    title: 'General Dental Care',
    description: 'Comprehensive check-ups and routine dental treatments.',
    longDescription: `Our General Dental Care forms the foundation of your oral health journey. We provide thorough dental examinations, professional cleanings to remove plaque and tartar, and precise fillings to treat cavities. Regular check-ups allow us to detect potential issues like gum disease or decay early, ensuring we can address them with minimally invasive techniques before they become more serious problems. We are committed to helping you maintain a healthy, vibrant smile for life.`,
    ctaText: 'Learn More',
  },
  {
    title: 'Preventive Dentistry',
    description: 'Proactive care to maintain optimal oral health.',
    longDescription: `Preventive Dentistry is all about being proactive rather than reactive. We focus on educating our patients about the best oral hygiene practices, including proper brushing and flossing techniques. Services like dental sealants create a protective barrier over your molars to prevent cavities, while fluoride treatments strengthen your enamel. Our goal is to empower you with the knowledge and tools to prevent dental issues from ever starting.`,
    ctaText: 'Learn More',
  },
  {
    title: 'Oral Pain Management',
    description: 'Effective solutions for acute and chronic dental pain.',
    longDescription: `Dental pain can be debilitating. Our Oral Pain Management services are designed to provide fast and effective relief. We diagnose the root cause of your pain, whether it's from a toothache, an abscess, or post-procedural discomfort. We then create a personalized treatment plan that may include medication, root canal therapy, or other interventions to eliminate the source of the pain and restore your comfort and quality of life.`,
    ctaText: 'Learn More',
  },
  {
    title: 'Dental Consultations',
    description: 'Expert advice and personalized treatment planning.',
    longDescription: `A Dental Consultation is your first step towards a healthier smile. During this comprehensive session, Dr. Ghosh will listen to your concerns, conduct a thorough examination of your oral health, and discuss your goals. We use this time to create a fully personalized treatment plan tailored to your unique needs, budget, and schedule. We believe in collaborative care, ensuring you are fully informed and comfortable with every step of your treatment journey.`,
    ctaText: 'Learn More',
  },
  {
    title: 'Oral Hygiene Guidance',
    description: 'Professional guidance for your daily care routine.',
    longDescription: `Great oral health starts at home. Our Oral Hygiene Guidance provides you with the professional advice you need to perfect your daily routine. We offer personalized tips on brushing and flossing, recommend the best products for your specific needs (like soft-bristled brushes or water flossers), and answer any questions you have. Our aim is to make you an expert in your own oral care, preventing common issues and maintaining the results of your in-office treatments.`,
    ctaText: 'Learn More',
  },
  {
    title: 'Conservative Dental Procedures',
    description: 'Minimally invasive treatments to preserve your natural teeth.',
    longDescription: `Our philosophy is to preserve as much of your natural tooth structure as possible. Conservative Dental Procedures focus on minimally invasive techniques like dental bonding to repair chips, inlays and onlays as an alternative to full crowns, and early decay treatment. By intervening early and using modern materials and methods, we can restore function and aesthetics while keeping your natural teeth healthy and strong for years to come.`,
    ctaText: 'Learn More',
  },
];

type Service = (typeof services)[0];

const ServiceCard = ({ service, onCtaClick }: { service: Service; onCtaClick: () => void }) => (
  <div
    className="group flex h-full flex-col bg-[#DFF6F8] rounded-2xl p-3 md:p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
  >
    <h3 className="text-xs font-semibold text-[#1F2A37] uppercase mb-2 tracking-wider md:text-base md:mb-3">{service.title}</h3>
    <p className="text-[11px] text-[#6B7280] leading-relaxed mb-3 flex-grow md:text-sm md:mb-5">{service.description}</p>

    <div className="mt-auto">
      <Button
        className="bg-white text-[#1F2A37] rounded-full px-3 h-auto py-1.5 text-[11px] font-medium shadow-sm hover:bg-gray-100 md:px-6 md:py-2.5 md:text-sm"
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
      <motion.section
        id="services"
        className="py-16 md:py-24 bg-background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Clinical Services</h2>
            <p className="text-base md:text-lg text-foreground/80 mt-2">Dedicated to your oral health and beautiful smile.</p>
          </div>
          
          {/* Mobile Carousel */}
          <div className="md:hidden -mx-4">
             <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="items-stretch">
                {services.map((service, index) => (
                  <CarouselItem key={index} className="basis-2/5">
                    <div className="p-2 h-full">
                      <ServiceCard service={service} onCtaClick={() => setSelectedService(service)} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <ServiceCard service={service} onCtaClick={() => setSelectedService(service)} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />
    </>
  );
};

export default Services;
