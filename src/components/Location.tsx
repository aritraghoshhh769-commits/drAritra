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
        <Card className="overflow-hidden relative shadow-lg border-border/50">
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
          <div className="relative p-8 md:p-16 text-center bg-black/10">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Dr. Aritra Ghosh Dental Clinic</h2>
            <p className="text-lg text-foreground/80 mt-4 max-w-md mx-auto">
              Mondal Apartment, M. Sarkar Para, Near Nabin Club, Doctor Para, Rampurhat
            </p>
            <Button size="lg" className="mt-8" asChild>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Get Directions</a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Location;
