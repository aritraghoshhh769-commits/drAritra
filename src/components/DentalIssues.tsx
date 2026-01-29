'use client';

import InfiniteMenu from './InfiniteMenu';
import ClientOnly from './ClientOnly';
import { motion } from 'framer-motion';

const dentalIssues = [
  {
    id: 'cavities',
    title: 'Cavity Treatment',
    description: 'Treating tooth decay and cavities permanently in Rampurhat to save your teeth.',
  },
  {
    id: 'gum-disease',
    title: 'Gum Disease Care',
    description: 'Expert treatment for gum inflammation (Pyorrhea) and bleeding gums.',
  },
  {
    id: 'tooth-sensitivity',
    title: 'Sensitivity Relief',
    description: 'Effective relief for sharp pain from hot or cold foods and drinks.',
  },
  {
    id: 'cracked-tooth',
    title: 'Cracked Tooth Repair',
    description: 'Bonding and repair for cracked or chipped teeth to restore your smile.',
  },
  {
    id: 'bad-breath',
    title: 'Bad Breath Cure',
    description: 'Treatment for chronic bad breath (Halitosis) and oral hygiene solutions.',
  },
  {
    id: 'wisdom-teeth',
    title: 'Wisdom Tooth Removal',
    description: 'Safe and painless extraction of impacted wisdom teeth (Third Molars).',
  },
  {
    id: 'tooth-erosion',
    title: 'Enamel Repair',
    description: 'Restoring tooth structure lost to acid erosion and protecting enamel.',
  },
  {
    id: 'bruxism',
    title: 'Teeth Grinding',
    description: 'Custom guards and treatment for nighttime teeth grinding (Bruxism).',
  },
  {
    id: 'dry-mouth',
    title: 'Dry Mouth Care',
    description: 'Solutions for Xerostomia to restore healthy saliva flow and comfort.',
  },
  {
    id: 'oral-thrush',
    title: 'Fungal Infection',
    description: 'Medical treatment for oral fungal infections and white lesions.',
  }
];

const items = dentalIssues.map(issue => {
  return {
    image: '', // No image
    link: '#',
    title: issue.title,
    description: issue.description
  }
});

const DentalIssues = () => {
  return (
    <motion.section
      id="dental-issues"
      className="py-16 md:py-24 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary whitespace-nowrap">Common Dental Issues</h2>
          <p className="text-base md:text-lg text-foreground/80 mt-2">
            Spin the globe to explore common dental problems we treat.
          </p>
        </div>
        <ClientOnly>
          <div className="h-[500px] md:h-[600px] relative overflow-hidden">
            <InfiniteMenu items={items} />
          </div>
        </ClientOnly>

        {/* Semantic Fallback for SEO (Hidden visually but available to crawlers) */}
        <div className="sr-only">
          <h3>Common Dental Problems Treated in Rampurhat</h3>
          <ul>
            {dentalIssues.map((issue) => (
              <li key={issue.id}>
                <h4>{issue.title}</h4>
                <p>{issue.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default DentalIssues;
