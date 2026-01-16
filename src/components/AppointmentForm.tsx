'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const appointmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  date: z.date({
    required_error: 'A date is required.',
  }),
  time: z.string({
    required_error: "A time is required.",
  }),
  concern: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const AppointmentForm = () => {
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: '',
      phone: '',
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
*Preferred Date:* ${format(values.date, "PPP")}
*Preferred Time:* ${values.time}
*Concern:* ${values.concern || 'Not specified'}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  }

  const timeSlots: string[] = [];
  // 12 PM to 7 PM (19:00). Last slot is 6:30 PM (18:30).
  for (let totalMinutes = 12 * 60; totalMinutes < 19 * 60; totalMinutes += 30) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    timeSlots.push(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);


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
                  <FormItem className="flex flex-col">
                    <FormLabel>Preferred Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < today || date.getDay() === 0 || date.getDay() === 6
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
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
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select from available slots" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map(slot => <SelectItem key={slot} value={slot}>{slot}</SelectItem>)}
                        </SelectContent>
                      </Select>
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
