'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import ClientOnly from './ClientOnly';

const appointmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  date: z.string().min(1, 'Please select a date.'),
  time: z.string().min(1, 'Please select a time.'),
  concern: z.string().optional(),
});

const Booking = () => {
  const form = useForm<z.infer<typeof appointmentSchema>>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: '',
      phone: '',
      date: '',
      time: '',
      concern: '',
    },
  });

  function onSubmit(values: z.infer<typeof appointmentSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <section id="contact-us" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Contact Us</h2>
            <p className="text-lg text-foreground/80 mt-2">Book an appointment or get in touch.</p>
        </div>
        <ClientOnly>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-primary/20 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-0">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Patient Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone / WhatsApp</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 9800912661" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time</FormLabel>
                            <FormControl>
                              <Input type="time" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="concern"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Concern (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Briefly describe your dental issue..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full">Book Appointment</Button>
                    <p className="text-xs text-center text-foreground/60">Your information is safe and confidential.</p>
                  </form>
                </Form>
              </CardContent>
            </Card>
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Clinic Details</h3>
              <p className="text-lg text-foreground/80">Dr. Aritra Ghosh Dental Clinic</p>
              <p className="text-foreground/70 mt-2">Mondal Apartment,<br />M. Sarkar Para, Near Nabin Club,<br />Doctor Para, Rampurhat</p>
              <p className="text-lg text-foreground/80 mt-4 font-semibold">
                <a href="tel:+919800912661" className="flex items-center justify-center gap-2 hover:text-primary">
                  <Phone className="h-5 w-5" /> +91 9800912661
                </a>
              </p>
            </div>
          </div>
        </ClientOnly>
      </div>
    </section>
  );
};

export default Booking;
