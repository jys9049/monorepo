import type { Metadata } from "next";
import "./globals.css";
import { GTM_ID, META } from "@/config/config";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  openGraph: {
    type: "website",
    title: META.title,
    url: META.url,
    images: META.images,
  },
  twitter: {
    title: META.title,
    description: META.description,
    images: META.images,
  },
  authors: { name: "드리븐 팀" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: META.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" suppressHydrationWarning>
      <body>{children}</body>
      <GoogleTagManager gtmId={GTM_ID} />
    </html>
  );
}
