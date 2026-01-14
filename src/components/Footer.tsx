import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-8 bg-[hsl(202,22%,15%)] text-white/70">
      <div className="container mx-auto px-4 text-center">
        <Separator className="mb-8 bg-white/20" />
        <p className="font-bold text-lg text-[hsl(45,41%,57%)]">Dr. Aritra Ghosh</p>
        <p className="text-sm">Dr. Aritra Ghosh Dental Clinic</p>
        <p className="text-sm mt-2">+91 9800912661</p>
        <p className="text-sm">Mondal Apartment, M. Sarkar Para, Rampurhat</p>
        <p className="text-xs mt-8 text-white/50">&copy; {new Date().getFullYear()} Dr. Aritra Ghosh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
