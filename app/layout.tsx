import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BEdigital",
  description: "DTI SE - Code Challenge 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={montserrat.className}>
        <Navbar/>
          
          
        {children}
        <Footer/>
      </body>
    </html>
  );
}
