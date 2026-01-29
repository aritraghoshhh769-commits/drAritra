// Centralized configuration with environment variable support
// Single source of truth for contact info and navigation

export const siteConfig = {
    name: "Dr. Aritra Ghosh",
    title: "Oral & Dental Surgeon",
    description: "Professional dental care by Dr. Aritra Ghosh. Modern, clean, and high-trust dental services.",

    contact: {
        phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "919002694838",
        phoneFormatted: "+91 90026 94838",
        whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919002694838",
        email: process.env.NEXT_PUBLIC_EMAIL || "Aritroghosh2013@gmail.com",
        address: process.env.NEXT_PUBLIC_ADDRESS || "Mondal Apartment, M. Sarkar Para, Near Nabin Club, Doctor Para, Rampurhat",
        mapUrl: process.env.NEXT_PUBLIC_MAP_URL || "https://maps.app.goo.gl/R4xbi3aBMYPceNQe6",
        gmailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=Aritroghosh2013@gmail.com",
    },

    social: {
        facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/share/1aU68sBM26/",
        twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/dr_aritraghosh",
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/aritra-ghosh-31a00a3a7/",
        instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/dr.aritraghosh/",
    },

    // Consolidated navigation - single source of truth
    navLinks: [
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#dental-issues', label: 'Dental Issues' },
        { href: '#contact-us', label: 'Contact' },
    ],

    // Mobile navigation with icon names (icons imported in component)
    mobileNavItems: [
        { href: '#home', label: 'Home', iconName: 'Home' as const },
        { href: '#about-modal', label: 'About', iconName: 'User' as const },
        { href: '#services', label: 'Services', iconName: 'BriefcaseMedical' as const },
        { href: '#gallery', label: 'Gallery', iconName: 'GalleryHorizontal' as const },
        { href: '#contact-us', label: 'Contact', iconName: 'Phone' as const },
    ],

    officeHours: {
        weekdays: "Monday - Friday",
        weekdayHours: "12:00 PM - 07:00 PM",
        weekend: "Saturday & Sunday - Closed",
    },
} as const;

// Type exports for components
export type NavLink = typeof siteConfig.navLinks[number];
export type MobileNavItem = typeof siteConfig.mobileNavItems[number];
