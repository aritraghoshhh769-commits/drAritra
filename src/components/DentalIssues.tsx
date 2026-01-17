'use client';

import InfiniteMenu from './InfiniteMenu';
import ClientOnly from './ClientOnly';
import { motion } from 'framer-motion';

const dentalIssues = [
  {
    id: 'cavities',
    title: 'Cavities',
    description: 'Also known as tooth decay, these are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes.',
  },
  {
    id: 'gum-disease',
    title: 'Gum Disease',
    description: 'An inflammation of the gums that can progress to affect the bone that surrounds and supports your teeth. It is caused by plaque.',
  },
  {
    id: 'tooth-sensitivity',
    title: 'Tooth Sensitivity',
    description: 'Experience pain or discomfort in your teeth as a response to certain stimuli, such as hot or cold temperatures.',
  },
  {
    id: 'cracked-tooth',
    title: 'Cracked Tooth',
    description: 'A crack can run from the chewing surface of a tooth down towards the root. Early diagnosis is important to save the tooth.',
  },
  {
    id: 'bad-breath',
    title: 'Bad Breath',
    description: 'Also called halitosis, can be embarrassing and is caused by a variety of factors, including food, health conditions and habits.',
  },
  {
    id: 'wisdom-teeth',
    title: 'Wisdom Teeth',
    description: "Third molars at the back of the mouth that don't have enough room to emerge or develop normally.",
  },
  {
    id: 'tooth-erosion',
    title: 'Tooth Erosion',
    description: 'Loss of tooth structure due to acid attacking the enamel, often from acidic foods and drinks.',
  },
  {
    id: 'bruxism',
    title: 'Bruxism',
    description: 'Involuntary grinding, gnashing, or clenching of teeth, often during sleep, which can lead to damage.',
  },
  {
    id: 'dry-mouth',
    title: 'Dry Mouth',
    description: 'Also known as Xerostomia, a condition where salivary glands don’t produce enough saliva to keep the mouth wet.',
  },
  {
    id: 'oral-thrush',
    title: 'Oral Thrush',
    description: 'A condition in which the fungus Candida albicans accumulates on the lining of your mouth, causing white lesions.',
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Common Dental Issues</h2>
            <p className="text-base md:text-lg text-foreground/80 mt-2">Spin the globe to explore common dental problems we treat.</p>
        </div>
        <ClientOnly>
          <div className="h-[500px] md:h-[600px] relative overflow-hidden">
            <InfiniteMenu items={items}/>
          </div>
        </ClientOnly>
      </div>
    </motion.section>
  );
};

export default DentalIssues;
