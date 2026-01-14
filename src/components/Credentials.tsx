import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const credentials = [
  {
    id: 'cert-nss',
  },
  {
    id: 'cert-rcp',
  },
  {
    id: 'cert-guinness',
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
              <div key={cred.id} className="group overflow-hidden rounded-lg border border-border/50 bg-white/5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {image && (
                  <div className="relative aspect-[4/3] bg-white">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      layout="fill"
                      className="object-contain p-4"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
