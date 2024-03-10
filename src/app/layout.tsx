import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/isomorphic/navbar";
import Footer from "@/components/isomorphic/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "partnatech",
  description: "building bridge between talent and the industry",
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
