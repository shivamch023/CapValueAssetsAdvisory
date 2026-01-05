import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

import "@fontsource/geist-mono"; // default 400
import "@fontsource/geist-sans"; // default 400
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "CapValue Assets Advisory",
  description: "Developed by Shivam Chauhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: '"Geist Sans", sans-serif' }}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
