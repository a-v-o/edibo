import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./sections/NavBar";
import SubscriptionSection from "./sections/SubscriptionSection";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edibo",
  description:
    "Edibo is a modern, secure online voting platform designed to help organizations, schools, and communities conduct elections and polls with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NavBar />
        {children}
        <SubscriptionSection />
      </body>
    </html>
  );
}
