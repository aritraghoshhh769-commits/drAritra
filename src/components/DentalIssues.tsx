'use client';

import InfiniteMenu from './InfiniteMenu';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ClientOnly from './ClientOnly';

const dentalIssues = [
  {
    id: 'cavities',
    title: 'Cavities',
    description: 'Also known as tooth decay, these are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes.'
  },
  {
    id: 'gum-disease',
    title: 'Gum Disease',
    description: 'An inflammation of the gums that can progress to affect the bone that surrounds and supports your teeth. It is caused by plaque.'
  },
  {
    id: 'tooth-sensitivity',
    title: 'Tooth Sensitivity',
    description: 'Experience pain or discomfort in your teeth as a response to certain stimuli, such as hot or cold temperatures.'
  },
  {
    id: 'cracked-tooth',
    title: 'Cracked Tooth',
    description: 'A crack can run from the chewing surface of a tooth down towards the root. Early diagnosis is important to save the tooth.'
  },
  {
    id: 'bad-breath',
    title: 'Bad Breath',
    description: 'Also called halitosis, can be embarrassing and is caused by a variety of factors, including food, health conditions and habits.'
  },
  {
    id: 'wisdom-teeth',
    title: 'Wisdom Teeth',
    description: 'Third molars at the back of the mouth that don\'t have enough room to emerge or develop normally.'
  }
];

const items = dentalIssues.map(issue => {
  const placeholder = PlaceHolderImages.find(p => p.id === issue.id);
  return {
    image: placeholder?.imageUrl || `https://picsum.photos/seed/${issue.id}/300/300?grayscale`,
    link: '#',
    title: issue.title,
    description: issue.description
  }
});

const DentalIssues = () => {
  return (
    <section id="dental-issues" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Common Dental Issues</h2>
            <p className="text-lg text-foreground/80 mt-2">Spin the globe to explore common dental problems we treat.</p>
        </div>
        <ClientOnly>
          <div style={{ height: '600px', position: 'relative' }}>
            <InfiniteMenu items={items}/>
          </div>
        </ClientOnly>
      </div>
    </section>
  );
};

export default DentalIssues;
