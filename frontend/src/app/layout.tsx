import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furnom Dam | CS Senior & Software Engineer",
  description: "Portfolio of Furnom Dam, Computer Science Senior at UMBC. Interested in Software Engineering, AI/ML, and building innovative solutions.",
  keywords: "Furnom Dam, Software Engineer, Computer Science, UMBC, AI/ML, Portfolio",
  authors: [{ name: "Furnom Dam" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://furnomdam.com",
    title: "Furnom Dam | CS Senior & Software Engineer",
    description: "Portfolio of Furnom Dam, Computer Science Senior at UMBC",
    siteName: "Furnom Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furnom Dam | CS Senior & Software Engineer",
    description: "Portfolio of Furnom Dam, Computer Science Senior at UMBC",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        role="application"
      >
        {children}
      </body>
    </html>
  );
}
