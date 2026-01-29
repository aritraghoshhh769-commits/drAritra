import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
    title: 'Book Appointment',
    description: `Schedule your dental appointment with ${siteConfig.name}. Easy online booking for dental checkups, consultations, and treatments in Rampurhat, West Bengal.`,
    keywords: [
        'book dental appointment',
        'dental appointment rampurhat',
        'schedule dentist visit',
        'dr aritra ghosh appointment',
    ],
    openGraph: {
        title: `Book Appointment | ${siteConfig.name}`,
        description: 'Schedule your dental appointment online. Easy booking for all dental services.',
        type: 'website',
    },
};

export default function AppointmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
