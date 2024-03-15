import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Partnatech | Building bridge between talent and the industry",
  description: "Learn in-demand data skills and engineering expertise to land your dream industry role.",
  twitter: {
    title: 'Partnatech',
    description: 'Building bridge between talent and the industry',
    card: 'summary_large_image',
    images: ['https://yt3.googleusercontent.com/REh5Y-tz0JzQc6Te0wO7vrJB85aEmv_wEGU3sqtuEg1w7IphfZTrUI2F3aVVky7EDwHxiUhhD24=s160-c-k-c0x00ffffff-no-rj'], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
