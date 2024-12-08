import { Metadata } from 'next';

export const METADATA: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_ENDPOINT || 'http://localhost:3000'),
  title: 'Board Wow - The Ultimate Platform for Talent and Event Connections in Thailand',
  description:
    "Board Wow - The Ultimate Platform for Talent and Event Connections in Thailand",
  icons: {
    icon: `/notebook.png`
  },
  openGraph: {
    type: 'website',
    url: "",
    title: 'Board Wow - The Ultimate Platform for Talent and Event Connections in Thailand',
    description:
      "Board Wow - The Ultimate Platform for Talent and Event Connections in Thailand",
    siteName: 'Board Wow',
    images: [
      {
        url: `/notebook.png`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Board Wow - The Ultimate Platform for Talent and Event Connections in Thailand',
    description:
      "Board Wow - The Ultimate Platform for Talent and Event Connections in Thailand",
    images: [
      {
        url: `/notebook.png`,
        alt: 'Board Wow'
      }
    ]
  }
};
