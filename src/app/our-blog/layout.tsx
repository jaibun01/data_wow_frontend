import AuthGuard from "@/components/guard/AuthGuard";
import { METADATA } from "@/constants/METADATA";
import LayoutGlobal from "@/layout";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = METADATA;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutGlobal>
      <AuthGuard>{children}</AuthGuard>
    </LayoutGlobal>
  );
}
