import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/ThemeProvider';
import { siteConfig } from '@/lib/config';
import JsonLd from '@/components/JsonLd';

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
  description:
    'Professional dental care by Dr. Aritra Ghosh in Rampurhat. Modern, clean, and high-trust dental services.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  alternates: {
    canonical: '/',
  },
  keywords: [
    'dentist rampurhat',
    'dental clinic rampurhat',
    'dr aritra ghosh',
    'oral surgeon west bengal',
    'dental care rampurhat',
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: 'A dedicated Dental Surgeon (BDS) committed to providing exceptional care through clinical precision and continuous medical education. Dr. Ghosh ensures every patient receives personalized and effective treatment.',
    url: baseUrl,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://yqhlxtvpnziabkrrprbs.supabase.co/storage/v1/object/public/assets/WhatsApp%20Image%202026-01-13%20at%2016.26.55.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dr. Aritra Ghosh - Dental Surgeon in Rampurhat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: 'A dedicated Dental Surgeon (BDS) committed to providing exceptional care through clinical precision and continuous medical education.',
    images: ['https://yqhlxtvpnziabkrrprbs.supabase.co/storage/v1/object/public/assets/WhatsApp%20Image%202026-01-13%20at%2016.26.55.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />

        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`
            if (window.history.scrollRestoration) {
              window.history.scrollRestoration = 'manual';
            }
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EW443DZW0F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EW443DZW0F');
          `}
        </Script>
      </head>

      <body className="font-body antialiased bg-background text-foreground pb-28 md:pb-0 overflow-x-hidden">
        {/* Accessibility skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>

        <ThemeProvider>
          <JsonLd />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
