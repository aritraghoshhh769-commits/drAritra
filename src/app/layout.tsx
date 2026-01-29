import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from '@/lib/config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const baseUrl = 'https://www.draritraghosh.in';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Professional dental care by Dr. Aritra Ghosh in Rampurhat. Modern, clean, and high-trust dental services including general dentistry, preventive care, and pain management. Book your appointment today.',
  keywords: [
    'dentist rampurhat',
    'dental clinic rampurhat',
    'dr aritra ghosh',
    'dental surgeon',
    'tooth pain treatment',
    'dental checkup',
    'oral health',
    'dental care west bengal',
    'BDS doctor rampurhat',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    siteName: `${siteConfig.name} Dental Clinic`,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: 'Professional dental care by Dr. Aritra Ghosh in Rampurhat. Modern, clean, and high-trust dental services.',
    images: [
      {
        url: '/og-image.png', // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Dental Clinic`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: 'Professional dental care by Dr. Aritra Ghosh in Rampurhat.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-icon.png',
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Add after Google Search Console setup
  },
};

// JSON-LD Schema for Dentist/LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: `${siteConfig.name} Dental Clinic`,
  description: 'Professional dental care services including general dentistry, preventive care, and pain management.',
  url: baseUrl,
  telephone: `+${siteConfig.contact.phone}`,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mondal Apartment, M. Sarkar Para, Near Nabin Club',
    addressLocality: 'Doctor Para, Rampurhat',
    addressRegion: 'West Bengal',
    postalCode: '731224',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.1736, // Update with actual coordinates
    longitude: 87.7847, // Update with actual coordinates
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],
  priceRange: '₹₹',
  image: `${baseUrl}/og-image.png`,
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EW443DZW0F" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EW443DZW0F');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground pb-28 md:pb-0 overflow-x-hidden">
        {/* Accessibility: Skip to main content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
