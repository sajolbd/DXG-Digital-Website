// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import { Josefin_Sans } from "next/font/google";
import ClientLayout from "./client-layout";
import RootLayoutComponent from "components/layout/RootLayout";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  metadataBase: new URL("https://baystate-website.vercel.app"),
  title: "DXG Digital",
  description: "DXG Digital Website",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "DXG Digital",
    description: "DXG Digital Website",
    url: "https://baystate-website.vercel.app/",
    siteName: "DXG Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "DXG Digital Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DXG Digital",
    description: "DXG Digital Website",
    images: ["/images/logo.png"],
  },
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body>
        {/* NoScript Fallback */}
        <noscript>
          <style>
            {`
              * {
                opacity: 1 !important;
                transform: none !important;
              }
            `}
          </style>
        </noscript>

        <RootLayoutComponent>
          <Header />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </RootLayoutComponent>
      </body>
    </html>
  );
}
