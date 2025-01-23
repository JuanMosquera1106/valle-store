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
        {/* Navbar fijo */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <Navbar />
        </div>

        {/* Contenido principal */}
        <main className="flex-1 pt-[70px] pb-[70px]">
          {children}
        </main>

        {/* Footer fijo */}
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
          <Footer />
        </div>
      </body>
    </html>
  );
}
