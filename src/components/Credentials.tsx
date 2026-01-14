import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
              <Card key={cred.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
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
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{cred.title}</CardTitle>
                  <p className="text-sm text-primary font-medium">{cred.institution}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-xs text-foreground/70">
                    <span>{cred.accreditation}</span>
                    <span className="font-bold text-primary">{cred.year}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
