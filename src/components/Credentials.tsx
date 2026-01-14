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
        <div className="flex flex-nowrap justify-start md:justify-center items-center gap-8 md:gap-12 overflow-x-auto pb-4">
          {credentials.map((cred) => {
            const image = PlaceHolderImages.find(img => img.id === cred.id);
            return (
              <div key={cred.id} className="flex-shrink-0 group transition-all duration-300 hover:shadow-2xl hover:z-10 hover:scale-105 rounded-lg shadow-lg overflow-hidden">
                {image && (
                  <div className="relative" style={{width: `${cred.width / 4}px`, height: `${cred.height / 4}px`}}>
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
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
