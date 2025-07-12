import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QuoraHeader from "@/components/QuoraHeader";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bodhika - Q&A Platform for Developers",
  description: "Join our community of developers and get help with your coding challenges. Ask questions, share knowledge, and learn from others.",
  keywords: ["Q&A", "programming", "development", "coding", "questions", "answers"],
  authors: [{ name: "Bodhika Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuoraHeader />
        <main className="min-h-[80vh] flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
