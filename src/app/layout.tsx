// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Footer from "./components/Footer/Footer";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CapValue Assets Advisory",
  description: "Developed by Shivam Chauhan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${poppins.className}`}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
