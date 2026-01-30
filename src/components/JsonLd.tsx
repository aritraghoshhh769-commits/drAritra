'use client';

import { siteConfig } from '@/lib/config';

/**
 * JSON-LD Structured Data for Local Business (Dentist)
 * This improves SEO by providing Google with structured information about the business.
 */
export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: siteConfig.name,
    description: siteConfig.description,
    url: 'https://www.draritraghosh.in',
    telephone: `+${siteConfig.contact.phone}`,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mondal Apartment, M. Sarkar Para, Near Nabin Club, Doctor Para',
      addressLocality: 'Rampurhat',
      addressRegion: 'West Bengal',
      postalCode: '731224',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.1731,
      longitude: 87.7839,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
    priceRange: '$$',
    image: 'https://www.draritraghosh.in/icon.png',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
