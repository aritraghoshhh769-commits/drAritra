import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const credentials = [
  {
    id: 'cert-nss',
    width: 1080,
    height: 764,
  },
  {
    id: 'cert-guinness',
    width: 829,
    height: 1170,
  },
  {
    id: 'cert-rcp',
    width: 1080,
    height: 764,
  },
];

const Credentials = () => {
  return (
    <section id="credentials" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Recognitions & Professional Credentials</h2>
          <p className="text-lg text-foreground/80 mt-2">A commitment to continuous learning and excellence.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {credentials.map((cred) => {
            const image = PlaceHolderImages.find(img => img.id === cred.id);
            return (
              <div key={cred.id} className="relative transition-all duration-300 hover:z-10 hover:scale-105">
                {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={cred.width / 4}
                      height={cred.height / 4}
                      className="rounded-lg shadow-lg"
                      data-ai-hint={image.imageHint}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
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
