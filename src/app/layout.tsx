import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import MobileStickyBar from "@/components/layout/MobileStickyBar";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const playfair = Playfair_Display({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Fathima Electronics | Premium TV Repair",
  description: "Expert TV Repair Services for LED, OLED, Smart TVs and Android TVs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="bg-navy-950 text-slate-100 min-h-screen pb-16 md:pb-0 antialiased">
        <Header />
        {children}
        <MobileStickyBar />
      </body>
    </html>
  );
}
