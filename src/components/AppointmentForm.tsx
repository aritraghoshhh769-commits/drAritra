'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const appointmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  date: z.string().min(1, 'Please select a date.'),
  time: z.string().min(1, 'Please select a time.'),
  concern: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const AppointmentForm = () => {
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: '',
      phone: '',
      date: '',
      time: '',
      concern: '',
    },
  });

  function onSubmit(values: AppointmentFormValues) {
    const whatsAppNumber = '919002694838'; // Make sure it includes the country code without '+'
    const message = `
hi! doctor
*New Appointment Request*
*Name:* ${values.name}
*Phone:* ${values.phone}
*Preferred Date:* ${values.date}
*Preferred Time:* ${values.time}
*Concern:* ${values.concern || 'Not specified'}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  }

  return (
    <Card className="w-full max-w-lg border-primary/20 bg-card/30 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl text-primary">Book an Appointment</CardTitle>
        <CardDescription>Fill out the form below to request an appointment.</CardDescription>
      </CardHeader>
      <CardContent>
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
                    <Input placeholder="+91 90026 94838" {...field} />
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
            <Button type="submit" size="lg" className="w-full">
              Send on WhatsApp
            </Button>
            <p className="text-xs text-center text-foreground/60">
              You will be redirected to WhatsApp to send your request.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AppointmentForm;
