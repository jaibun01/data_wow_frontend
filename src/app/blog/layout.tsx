import { METADATA } from '@/constants/METADATA';
import LayoutGlobal from '@/layout';
import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = METADATA;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

// eslint-disable-next-line no-unused-vars
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutGlobal bgContent="bg-white">{children}</LayoutGlobal>
  );
}
