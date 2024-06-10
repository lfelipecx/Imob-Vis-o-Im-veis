import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imob. Visão Imóveis",
  description: "Imóbiliaria Visão Imóveis, realizando sonhos à mais de 20 anos",
  icons:{
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="flex flex-col h-full">
          <Header />

          <div className="flex-1">
            {children}
          </div>

          <Footer />

          <div className="relative">
            <Link href="/" className="fixed bottom-12 right-0 p-4 z-10 animate-bounce">
              <Image 
                src="/whatsapp.png" 
                alt="botão whatsapp"
                height={40}
                width={40} 
                className="rounded-sm shadow-lg ring ring-green-500 transition-all hover:shadow-md hover:ring-4"
              />              
            </Link>
          </div>

        </div>


      </body>
    </html>
  );
}
