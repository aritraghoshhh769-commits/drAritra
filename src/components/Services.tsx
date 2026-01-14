import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, ShieldCheck, HeartPulse, MessageCircle, GitBranch } from 'lucide-react';

const ToothIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.5 2a.5.5 0 0 1 .5.5v2.793a.5.5 0 0 1-.146.354l-5.02 5.02a3 3 0 0 0-4.242 4.242l5.02 5.02a.5.5 0 0 1 .354.146H12.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.793a.5.5 0 0 1 .146-.354l5.02-5.02a3 3 0 0 0 4.242-4.242l-5.02-5.02a.5.5 0 0 1-.354-.146H8.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7z" />
    </svg>
  );

const services = [
  {
    title: 'General Dental Care',
    description: 'Comprehensive check-ups and routine dental treatments.',
    icon: <ToothIcon />,
  },
  {
    title: 'Preventive Dentistry',
    description: 'Proactive care to maintain optimal oral health.',
    icon: <ShieldCheck />,
  },
  {
    title: 'Oral Pain Management',
    description: 'Effective solutions for acute and chronic dental pain.',
    icon: <HeartPulse />,
  },
  {
    title: 'Dental Consultations',
    description: 'Expert advice and personalized treatment planning.',
    icon: <MessageCircle />,
  },
  {
    title: 'Oral Hygiene Guidance',
    description: 'Professional guidance for your daily care routine.',
    icon: <Stethoscope />,
  },
  {
    title: 'Conservative Dental Procedures',
    description: 'Minimally invasive treatments to preserve your natural teeth.',
    icon: <GitBranch />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Clinical Services</h2>
          <p className="text-lg text-foreground/80 mt-2">Trust built on years of dedication and expertise.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 text-primary rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
