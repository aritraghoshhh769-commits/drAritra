'use client';
import { GraduationCap, CheckCircle, Shield, Trophy, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.48,
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const badges = [
    { icon: CheckCircle, text: "BDS Qualified" },
    { icon: GraduationCap, text: "CME Certified (UK)" },
    { icon: Shield, text: "NSS Volunteer" },
    { icon: Trophy, text: "Guinness World Records Participant" },
  ];
  
  const badgeContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
  };

  const badgeItemVariants = {
     hidden: { opacity: 0, y: 6 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  const doctorImage = PlaceHolderImages.find(img => img.id === 'doctor-portrait');

  return (
    <section 
      id="about" 
      aria-labelledby="about-dr-aritra"
      className="w-full py-16 md:py-24"
      style={{
        background: 'linear-gradient(135deg, #eaf7fb 0%, #f8fdff 100%)'
      }}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div 
          className="bg-white/90 backdrop-blur-md rounded-2xl lg:rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-white/60 flex overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-10 w-full">
            
            <motion.div 
              variants={itemVariants} 
              className="relative col-span-4"
              style={{
                maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)'
              }}
            >
              {doctorImage && (
                <Image
                  src={doctorImage.imageUrl}
                  alt={doctorImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={doctorImage.imageHint}
                />
              )}
            </motion.div>

            <div className="col-span-6 flex flex-col justify-center items-start text-left space-y-2 p-4 md:space-y-5 md:p-8 lg:p-12">
              <motion.h2 
                id="about-dr-aritra"
                variants={itemVariants}
                className="text-lg md:text-[36px] font-bold tracking-tight md:tracking-[-0.5px]" 
                style={{ color: '#2f9aa0' }}
              >
                About Dr. Aritra Ghosh
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-xs md:text-base max-w-[520px]"
                style={{ color: '#4a5d66', lineHeight: 1.7 }}
              >
                A dedicated Dental Surgeon (BDS) committed to providing exceptional care through clinical precision and continuous medical education. With a strong foundation in community service and a passion for ethical practice, Dr. Ghosh ensures every patient receives personalized and effective treatment.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 gap-2 md:gap-4 w-full max-w-lg"
                variants={badgeContainerVariants}
              >
                {badges.map((badge) => (
                  <motion.div
                    key={badge.text}
                    variants={badgeItemVariants}
                    className="flex items-center h-8 md:h-[44px] px-2 md:px-[18px] rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                    style={{ background: '#e6f6f8', borderColor: '#bfe6ea'}}
                    whileHover={{ y: -4, boxShadow: '0 8px 16px rgba(0,0,0,0.1)', transition: { duration: 0.2 } }}
                  >
                    <badge.icon className="h-3 w-3 md:h-5 md:w-5 mr-1.5 md:mr-3 shrink-0" style={{ color: '#2f9aa0' }} />
                    <span className="font-semibold text-[10px] md:text-sm" style={{ color: '#2f9aa0' }}>{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div variants={itemVariants} className="pt-1 md:pt-3">
                 <Button 
                   asChild 
                   className="w-full md:w-[280px] h-10 md:h-[56px] text-xs md:text-base font-semibold text-white rounded-lg md:rounded-[14px] shadow-[0_8px_20px_rgba(47,154,160,0.3)] md:shadow-[0_12px_30px_rgba(47,154,160,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                   style={{
                     background: 'linear-gradient(135deg, #2f9aa0 0%, #5fc2c7 100%)'
                   }}
                 >
                   <Link href="/appointment" aria-label="Book appointment with Dr Aritra Ghosh">
                     <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                     Book Appointment
                   </Link>
                 </Button>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
