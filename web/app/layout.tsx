"use client"; // SessionProvider is a client component

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import TopNav from "@/components/TopNav";
import "./globals.css"

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FQ4JCJ3Z0R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FQ4JCJ3Z0R');
          `}
        </Script>
      </head>
      <body style={{ height: "100%", margin: 0 , overflowY: "auto"}}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 👇 THIS IS THE KEY */}
        <SessionProvider>
        <TopNav />
        <main className="min-h-screen">            
        {children}                
        </main>
        </SessionProvider>
      </body>
    </html>
  );
}
