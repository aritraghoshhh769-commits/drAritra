'use client';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const About = ({ onCredentialsClick }: { onCredentialsClick: () => void }) => {
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
    { text: "BDS Qualified" },
    { text: "CME Certified (UK)" },
    { text: "NSS Volunteer" },
    { text: "Guinness World Records Participant" },
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
      aria-labelledby="about-dr-aritra"
      className="w-full py-16 md:py-24"
      style={{
        backgroundColor: 'hsl(195, 70%, 95%)',
        backgroundImage: `
          radial-gradient(circle at 15% 85%, hsla(0, 0%, 100%, 0.4), transparent 25%),
          radial-gradient(circle at 85% 20%, hsla(0, 0%, 100%, 0.5), transparent 30%),
          linear-gradient(135deg, hsl(190, 80%, 95%), hsl(200, 80%, 98%))
        `,
      }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div 
          className="bg-white/70 backdrop-blur-lg rounded-2xl md:rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col md:flex-row overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants} 
            className="relative w-full h-72 md:w-5/12 md:h-auto"
          >
            {doctorImage && (
              <Image
                src={doctorImage.imageUrl}
                alt={doctorImage.description}
                fill
                className="object-cover object-top"
                data-ai-hint={doctorImage.imageHint}
              />
            )}
            <div 
              className="absolute inset-0" 
              style={{ background: 'linear-gradient(to right, transparent 40%, rgba(255, 255, 255, 0.9) 80%)' }} 
            />
          </motion.div>

          <div className="w-full md:w-7/12 flex flex-col justify-center items-start text-left space-y-4 p-6 md:space-y-5 md:p-8 lg:p-12">
            <motion.h2 
              id="about-dr-aritra"
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold tracking-tight text-primary whitespace-nowrap"
            >
              About Dr. Aritra Ghosh
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base max-w-[520px] text-foreground/80"
              style={{ lineHeight: 1.6 }}
            >
              A dedicated Dental Surgeon (BDS) committed to providing exceptional care through clinical precision and continuous medical education. With a strong foundation in community service and a passion for ethical practice, Dr. Ghosh ensures every patient receives personalized and effective treatment.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-lg"
              variants={badgeContainerVariants}
            >
              {badges.map((badge) => (
                <motion.div
                  key={badge.text}
                  variants={badgeItemVariants}
                  className="flex items-center justify-center p-2 rounded-full border border-primary/40 bg-primary/10"
                >
                  <span className="font-medium text-xs md:text-sm leading-normal text-primary">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="pt-2 md:pt-3 w-full max-w-lg">
               <Button 
                 onClick={onCredentialsClick}
                 className="w-full h-10 md:h-12 text-sm md:text-base font-semibold text-primary-foreground rounded-full shadow-[0_8px_20px_rgba(47,154,160,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl px-6 md:px-8"
                 style={{
                   background: 'linear-gradient(100deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)'
                 }}
               >
                 <Award className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                 View Credentials
               </Button>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
