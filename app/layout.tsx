import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <p>Loading services...</p>,
  ssr: false,
});

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
        <style>
          {`
                    .hero-title {
                        font-weight: bold;
                        margin-bottom: 8px;
                        font-size: 6rem;
                    }
                    .hero-description {
                        margin-bottom: 8px;
                        line-height: 1.5;
                    }
                    .hero-button {
                        margin-bottom: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 2px solid #fff;
                        border-radius: 9999px;
                        background-color: #fff;
                        color: #f50057;
                        padding: 8px 32px;
                        text-decoration: none;
                    }
                    .hero-button:hover {
                        text-decoration: underline;
                    }
                    `}
        </style>
      </head>
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
