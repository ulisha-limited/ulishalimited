import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ulisha Limited | Tech-Driven Commerce Solutions in Nigeria",
  description:
    "Ulisha Limited empowers Nigerian businesses and households with cost-effective products, SME enablement, and custom tech solutions. Explore Ulisha Store, Ushops, and innovative software tools.",
  keywords: [
    "Ulisha Limited",
    "Nigerian commerce",
    "SME solutions",
    "direct-to-consumer",
    "tech solutions",
    "Ulisha Store",
    "Ushops",
    "business software",
    "e-commerce Nigeria",
    "digital solutions",
  ],
  authors: [{ name: "Ulisha Limited" }],
  creator: "Ulisha Limited",
  openGraph: {
    title: "Ulisha Limited | Tech-Driven Commerce Solutions in Nigeria",
    description:
      "Ulisha Limited empowers Nigerian businesses and households with cost-effective products, SME enablement, and custom tech solutions.",
    url: "https://ulishalimited.com",
    siteName: "Ulisha Limited",
    images: [
      {
        url: "https://ulisha.com/og-image.png", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Ulisha Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulisha Limited | Tech-Driven Commerce Solutions in Nigeria",
    description:
      "Ulisha Limited empowers Nigerian businesses and households with cost-effective products, SME enablement, and custom tech solutions.",
    images: ["https://ulishalimited.com/og-image.png"], 
    creator: "@ulisha_official",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
