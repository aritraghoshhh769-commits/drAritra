import { ShieldCheck, Globe, CheckSquare, PlusCircle, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const trustPoints = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Evidence-Based Treatment',
    description: 'Utilizing proven methods for reliable and effective outcomes.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Internationally Accredited Learning',
    description: 'Incorporating global standards from continuous education.',
  },
  {
    icon: <CheckSquare className="h-8 w-8 text-primary" />,
    title: 'Ethical Clinical Practice',
    description: 'Prioritizing patient well-being and transparency.',
  },
  {
    icon: <PlusCircle className="h-8 w-8 text-primary" />,
    title: 'Clean & Hygienic Environment',
    description: 'Adhering to strict sterilization and cleanliness protocols.',
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: 'Clear Patient Communication',
    description: 'Ensuring you are informed and comfortable at every step.',
  },
];

const WhyTrustUs = () => {
  return (
    <section id="why-trust-us" className="py-20 sm:py-32 bg-background/70 relative">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("/medical-pattern.svg")', backgroundSize: '300px 300px'}}></div>
        <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Patients Trust Our Clinic</h2>
                <p className="text-lg text-foreground/80 mt-2">Our principles for providing the best care.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trustPoints.map((point) => (
                    <div key={point.title} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                            {point.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">{point.title}</h3>
                            <p className="text-foreground/70 mt-1">{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default WhyTrustUs;
