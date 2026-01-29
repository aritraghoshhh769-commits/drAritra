import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Dr. Aritra Ghosh - Dental Surgeon',
        short_name: 'Dr. Aritra',
        description: 'Professional dental care by Dr. Aritra Ghosh. Modern, clean, and high-trust dental services in Rampurhat.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2f9aa0',
        icons: [
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
