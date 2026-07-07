import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import MobileStickyBar from "@/components/layout/MobileStickyBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins" 
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-midnight-950 text-slate-100 min-h-screen pb-16 md:pb-0 antialiased">
        <Header />
        {children}
        <MobileStickyBar />
      </body>
    </html>
  );
}
