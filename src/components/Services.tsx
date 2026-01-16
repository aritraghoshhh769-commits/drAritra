'use client';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const cardData = [
  {
    type: 'emergency',
    icon: <Heart className="h-8 w-8 text-[#5FAFCB]" />,
    phone: '1-800-600-380',
    title: 'EMERGENCY SERVICE',
    description: 'In case of a dental emergency, contact us immediately. We are available to help you with any urgent dental needs.',
    ctaText: 'See More',
    ctaLink: '#',
  },
  {
    type: 'appointment',
    icon: <Calendar className="h-8 w-8 text-[#5FAFCB]" />,
    title: 'DO YOU WANT TO MAKE AN APPOINTMENT',
    description: 'Schedule your visit with us. Our team is ready to provide you with the best and most comfortable dental care.',
    ctaText: 'Book Now',
    ctaLink: '/appointment',
  },
  {
    type: 'opening-hours',
    icon: <Clock className="h-8 w-8 text-[#5FAFCB]" />,
    title: 'OPENING HOURS',
    description: [
        'Monday – Friday: 9am - 8pm',
        'Saturday – Sunday: 10am - 6pm'
    ],
    ctaText: 'Contact Us',
    ctaLink: '#contact-us',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex h-full flex-col bg-[#DFF6F8] rounded-2xl p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            >
              {card.type === 'emergency' ? (
                <>
                  <div className="mb-4">{card.icon}</div>
                  <p className="text-2xl font-semibold text-[#1F2A37] mb-2">{card.phone}</p>
                  <h3 className="text-lg font-semibold text-[#1F2A37] uppercase mb-4 tracking-wider">{card.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-6">{card.description}</p>
                </>
              ) : (
                <>
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-lg font-semibold text-[#1F2A37] uppercase mb-4 tracking-wider">{card.title}</h3>
                  {Array.isArray(card.description) ? (
                    <div className="text-sm text-[#6B7280] leading-relaxed mb-6 space-y-1">
                      {card.description.map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                  ) : (
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-6">{card.description}</p>
                  )}
                </>
              )}
              
              <div className="mt-auto">
                <Button asChild className="bg-white text-[#1F2A37] rounded-full px-6 h-auto py-2.5 text-sm font-medium shadow-sm hover:bg-gray-100">
                    <a 
                        href={card.ctaLink} 
                        onClick={(e) => handleLinkClick(e, card.ctaLink)}
                        target={card.ctaLink.startsWith('/') ? '_blank' : undefined}
                        rel={card.ctaLink.startsWith('/') ? 'noopener noreferrer' : undefined}
                    >
                        {card.ctaText}
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
