// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Footer from "./components/Footer/Footer";

import { Poppins } from "next/font/google";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";
import Nav from "./components/Nav/Nav";
import CookieConsent from "./components/CookieConsent/CookieConsent";

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
      ><ScrollProgressBar />
        <Nav />
        {children}
        <CookieConsent/>
        <WhatsAppButton />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
