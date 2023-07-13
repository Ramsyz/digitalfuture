import { Footer, Navbar } from "@/components";
import "./globals.css";
import { Poppins } from "next/font/google";
import React from "react";

const font = Poppins({
  weight: ["400", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "KodeCraft Solutions",
  description: "A software solution for business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
