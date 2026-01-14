'use client';

import InfiniteMenu from './InfiniteMenu';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ClientOnly from './ClientOnly';

const dentalIssues = [
  {
    id: 'cavities',
    title: 'Cavities',
    description: 'Also known as tooth decay, these are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes.',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tooth"><path d="M15.5 2a.5.5 0 0 1 .5.5v2.793a.5.5 0 0 1-.146.354l-5.02 5.02a3 3 0 0 0-4.242 4.242l5.02 5.02a.5.5 0 0 1 .354.146H12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.793a.5.5 0 0 1 .146-.354l5.02-5.02a3 3 0 0 0 4.242-4.242l-5.02-5.02a.5.5 0 0 1-.354-.146H8.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7z"/><circle cx="12" cy="12" r="2" fill="black" stroke="black"/><path d="M11 13l2-2" stroke="black"/></svg>`
  },
  {
    id: 'gum-disease',
    title: 'Gum Disease',
    description: 'An inflammation of the gums that can progress to affect the bone that surrounds and supports your teeth. It is caused by plaque.',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2a.5.5 0 0 1 .5.5v2.793a.5.5 0 0 1-.146.354l-5.02 5.02a3 3 0 0 0-4.242 4.242l5.02 5.02a.5.5 0 0 1 .354.146H12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.793a.5.5 0 0 1 .146-.354l5.02-5.02a3 3 0 0 0 4.242-4.242l-5.02-5.02a.5.5 0 0 1-.354-.146H8.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7z"/><path d="M5 18c3-1 5-3 5-5" stroke="red" stroke-width="1"/><path d="M19 12c-3 1-5 3-5 5" stroke="red" stroke-width="1"/></svg>`
  },
  {
    id: 'tooth-sensitivity',
    title: 'Tooth Sensitivity',
    description: 'Experience pain or discomfort in your teeth as a response to certain stimuli, such as hot or cold temperatures.',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.5"><path d="M15.5 2a.5.5 0 0 1 .5.5v2.793a.5.5 0 0 1-.146.354l-5.02 5.02a3 3 0 0 0-4.242 4.242l5.02 5.02a.5.5 0 0 1 .354.146H12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.793a.5.5 0 0 1 .146-.354l5.02-5.02a3 3 0 0 0 4.242-4.242l-5.02-5.02a.5.5 0 0 1-.354-.146H8.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7z"/><path d="M6 6l-3-3m3 3L3 9" stroke-width="1"/><path d="M18 18l3 3m-3-3l3-3" stroke-width="1"/></svg>`
  },
  {
    id: 'cracked-tooth',
    title: 'Cracked Tooth',
    description: 'A crack can run from the chewing surface of a tooth down towards the root. Early diagnosis is important to save the tooth.',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.5"><path d="M15.5 2a.5.5 0 0 1 .5.5v2.793a.5.5 0 0 1-.146.354l-2.92 2.92m-2.1 2.1l-5.02 5.02a.5.5 0 0 1 .354.146H12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.793a.5.5 0 0 1 .146-.354l5.02-5.02a3 3 0 0 0 4.242-4.242l-5.02-5.02a.5.5 0 0 1-.354-.146H8.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7z"/><path d="M8.5 7.5L15 14" stroke-width="1.5"/></svg>`
  },
  {
    id: 'bad-breath',
    title: 'Bad Breath',
    description: 'Also called halitosis, can be embarrassing and is caused by a variety of factors, including food, health conditions and habits.',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.5"><path d="M12 12a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0v-2a3 3 0 0 0-3-3Z"/><path d="M12 12a3 3 0 0 1-3-3V7a3 3 0 0 1 6 0v2a3 3 0 0 1-3 3Z"/><path d="M18.8 17.5c.3-.2.5-.5.6-.9"/><path d="M5.2 6.5c-.3.2-.5.5-.6.9"/><path d="M18.2 6.5c.3.2.5.5.6.9"/><path d="M5.8 17.5c-.3-.2-.5-.5-.6-.9"/></svg>`
  },
  {
    id: 'wisdom-teeth',
    title: 'Wisdom Teeth',
    description: 'Third molars at the back of the mouth that don\'t have enough room to emerge or develop normally.',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.5"><path d="M19.1 11.4c-1.4-1-2.4-2.5-2.6-4.2.2-1 .3-2.2.3-3.2 0-1.2-1-2-1-2H8.2s-1 .8-1 2c0 1 .1 2.2.3 3.2-2.6 3.4-2.6 8.6 0 12C9 20.8 12 22 12 22s3-1.2 4.9-2.6c1.3-1.7 2-3.8 2.1-5.7.1-1.2 0-2.3-.9-3.3z"/><path d="m6.5 15.5-3 2.5 3.5-4"/><path d="m17.5 15.5 3 2.5-3.5-4"/></svg>`
  }
];

const items = dentalIssues.map(issue => {
  const svgDataUri = `data:image/svg+xml;base64,${btoa(issue.svg)}`;
  return {
    image: svgDataUri,
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
