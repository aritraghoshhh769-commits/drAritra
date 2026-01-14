'use client';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, CheckCircle, Shield, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const doctorImage = PlaceHolderImages.find(img => img.id === 'doctor-portrait');

  return (
    <motion.section 
        id="about" 
        className="py-20 sm:py-32 bg-background relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{backgroundImage: 'radial-gradient(circle at top left, hsl(var(--primary)), transparent 60%)'}}></div>
      <div className="absolute bottom-0 right-0 w-full h-full opacity-30" style={{backgroundImage: 'radial-gradient(circle at bottom right, hsl(var(--accent)), transparent 70%)'}}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-2 aspect-[3/4]">
            {doctorImage && (
              <Image
                src={doctorImage.imageUrl}
                alt={doctorImage.description}
                fill
                className="rounded-lg object-cover object-top"
                data-ai-hint={doctorImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Dr. Aritra Ghosh</h2>
            <p className="text-lg text-foreground/80 mb-6">
              A dedicated Dental Surgeon (BDS) committed to providing exceptional care through clinical precision and continuous medical education. With a strong foundation in community service and a passion for ethical practice, Dr. Ghosh ensures every patient receives personalized and effective treatment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4 rounded-full flex items-center gap-2 bg-primary/10 text-primary-foreground border border-primary/20">
                <CheckCircle className="h-4 w-4 text-primary" /> BDS Qualified
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4 rounded-full flex items-center gap-2 bg-accent/10 text-accent-foreground border border-accent/20">
                <Award className="h-4 w-4 text-accent" /> CME Certified (UK)
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4 rounded-full flex items-center gap-2 bg-secondary text-secondary-foreground border border-border">
                <Shield className="h-4 w-4" /> NSS Volunteer
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4 rounded-full flex items-center gap-2 bg-secondary text-secondary-foreground border border-border">
                <Trophy className="h-4 w-4" /> Guinness World Records Participant
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
