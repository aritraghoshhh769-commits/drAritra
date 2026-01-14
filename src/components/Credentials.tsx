import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const credentials = [
  {
    id: 'cert-nss',
    institution: 'Rajiv Gandhi University of Health Sciences',
    title: 'NSS Camp Volunteer',
    year: '2011',
    accreditation: 'Healthy Youth for Healthy India',
  },
  {
    id: 'cert-rcp',
    institution: 'Royal College of Physicians (UK)',
    title: 'Pain to Relief in Minutes',
    year: 'CME/CPD',
    accreditation: 'New Age of Oral Mucosal Therapy',
  },
  {
    id: 'cert-guinness',
    institution: 'Guinness World Records',
    title: 'Official Attempt Participant',
    year: '2022',
    accreditation: 'Largest online video album of support messages',
  },
];

const Credentials = () => {
  return (
    <section id="credentials" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Recognitions & Professional Credentials</h2>
          <p className="text-lg text-foreground/80 mt-2">A commitment to continuous learning and excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((cred) => {
            const image = PlaceHolderImages.find(img => img.id === cred.id);
            return (
              <div key={cred.id} className="group overflow-hidden rounded-lg border border-border/50 bg-background/30 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={cred.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="p-4 bg-background">
                    <h3 className="text-lg font-semibold text-foreground">{cred.title}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{cred.institution}</p>
                  <div className="mt-4 flex justify-between items-center text-xs text-foreground/70">
                    <span className="max-w-[70%]">{cred.accreditation}</span>
                    <span className="font-bold text-primary">{cred.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
