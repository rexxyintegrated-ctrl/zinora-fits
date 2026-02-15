import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

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

import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Zinora Fits",
  description: "Affordable Luxury African Fashion",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} bg-black text-white font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
      <div className="text-xl tracking-widest font-serif">ZINORA FITS</div>

      <div className="hidden md:flex gap-8 text-sm tracking-wide">
        <a href="/shop" className="hover:text-[#B8963D] transition">
          SHOP
        </a>
        <a href="#" className="hover:text-[#B8963D] transition">
          LOOKBOOK
        </a>
        <a href="#" className="hover:text-[#B8963D] transition">
          ABOUT
        </a>
        <a href="#" className="hover:text-[#B8963D] transition">
          CONTACT
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 py-10 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Zinora Fits. All rights reserved.
    </footer>
  );
}
