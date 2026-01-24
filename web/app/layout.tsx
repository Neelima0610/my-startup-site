"use client"; // SessionProvider is a client component

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body style={{ height: "100%", margin: 0 , overflowY: "auto"}}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 👇 THIS IS THE KEY */}
        <main className="min-h-screen">
          <SessionProvider>{children}</SessionProvider>
        </main>
      </body>
    </html>
  );
}
