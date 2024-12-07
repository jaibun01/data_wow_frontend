import { METADATA } from '@/constants/METADATA';
import LayoutLogin from '@/layout/layout-login';
import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = METADATA;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutLogin fullWidth>{children}</LayoutLogin>
  );
}
