import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./custom.css";
import "./globals.css";
import "./ai-portal-style.css";
import BottomHistoryTabs from "@/components/bottom-history-tabs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlueConnects",
  description: "BlueConnects",
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
        {children}
        <BottomHistoryTabs />
      </body>
    </html>
  );
}
