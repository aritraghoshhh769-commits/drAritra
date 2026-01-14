import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const credentials = [
  {
    id: 'cert-nss',
    span: 'col-span-2',
  },
  {
    id: 'cert-guinness',
    span: 'col-span-3',
  },
  {
    id: 'cert-rcp',
    span: 'col-span-3',
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 items-center">
          {credentials.map((cred) => {
            const image = PlaceHolderImages.find(img => img.id === cred.id);
            return (
              <div key={cred.id} className={cn("group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:z-10 hover:scale-105", cred.span)}>
                {image && (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-contain"
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
