import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'K.H. Infinity - Global Trade Solutions',
    short_name: 'K.H. Infinity',
    description: 'Your trusted partner in global trade. Specialize in import-export of premium quality products.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ea5a0c',
    icons: [
      {
        src: '/images/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

