import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Create with Diwash - Digital Solutions for Churches',
    short_name: 'Create with Diwash',
    description: 'Comprehensive digital solutions for churches and faith-based organizations',
    start_url: '/',
    display: 'standalone',
    background_color: '#FEFCF9',
    theme_color: '#1E3A8A',
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

