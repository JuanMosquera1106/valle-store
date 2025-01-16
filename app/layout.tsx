import type { Metadata } from "next";
import {Urbanist} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/app/globals.css";

const font = Urbanist({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Tienda",
  description: "Tienda Valle de Gigantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
