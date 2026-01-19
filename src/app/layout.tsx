import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Freeport Family Dentistry",
    template: "%s | Freeport Family Dentistry",
  },
  description:
    "Your trusted family dental care provider in Freeport. Quality dental services including general dentistry, cosmetic dentistry, and emergency care.",
  keywords: [
    "dentist",
    "dental care",
    "family dentistry",
    "Freeport",
    "cosmetic dentistry",
    "emergency dentist",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
