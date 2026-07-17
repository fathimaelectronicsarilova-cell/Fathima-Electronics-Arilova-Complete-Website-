import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import MobileStickyBar from "@/components/layout/MobileStickyBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ 
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-outfit" 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fathimaelectronics.com'),
  title: {
    default: "Fathima Electronics | Best TV Repair in Arilova, Vizag",
    template: "%s | Fathima Electronics",
  },
  description: "Expert TV Repair Services in Arilova, Vizag. We repair LED, OLED, QLED, Smart TVs and Android TVs with same-day doorstep service. 10+ years experience.",
  keywords: ["TV Repair Vizag", "LED TV Repair Arilova", "Smart TV Repair Near Me", "TV Mechanic Vizag", "Fathima Electronics", "Sony TV Service", "Samsung TV Repair Vizag", "LG TV Repair", "Doorstep TV Repair"],
  authors: [{ name: "Fathima Electronics" }],
  creator: "Fathima Electronics",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.fathimaelectronics.com",
    title: "Fathima Electronics | Best TV Repair in Arilova, Vizag",
    description: "Expert Doorstep TV Repair in Arilova, Vizag. Call us for LED, OLED, and Smart TV repairs.",
    siteName: "Fathima Electronics",
    images: [{
      url: "/hero-bg.png",
      width: 1200,
      height: 630,
      alt: "Fathima Electronics TV Repair",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fathima Electronics | Premium TV Repair in Vizag",
    description: "Expert Doorstep TV Repair in Arilova, Vizag.",
    images: ["/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-navy-950 text-slate-100 min-h-screen pb-16 md:pb-0 antialiased">
        <Header />
        {children}
        <MobileStickyBar />
      </body>
    </html>
  );
}
