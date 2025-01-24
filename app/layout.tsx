import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/app/globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valle de Gigantes",
  description: "Tienda Valle de Gigantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${font.className} scroll-smooth flex flex-col min-h-screen`}>
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <Navbar />
        </header>

        {/* Contenido principal */}
        <main className="flex-grow pt-[80px] pb-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
