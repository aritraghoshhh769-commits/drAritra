import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Location = () => {
  const mapImage = PlaceHolderImages.find(img => img.id === 'map-placeholder');

  return (
    <section id="location" className="py-20 sm:py-32 bg-background/70">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden relative shadow-lg border-border/50 aspect-[16/9]">
          {mapImage && (
            <Image
              src={mapImage.imageUrl}
              alt="Clinic Location"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
              data-ai-hint={mapImage.imageHint}
            />
          )}
        </Card>
      </div>
    </section>
  );
};

export default Location;
