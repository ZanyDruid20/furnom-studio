import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';
const sans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = { title: { default: 'Furnom Dam | Software Engineer', template: '%s | Furnom Dam' }, description: 'UMBC Computer Science graduate building backend systems, cloud infrastructure, and intelligent applications. Explore engineering projects by Furnom Dam.', authors: [{ name: 'Furnom Dam' }], openGraph: { type: 'website', locale: 'en_US', title: 'Furnom Dam | Software Engineer', description: 'Backend systems, cloud infrastructure, and intelligent applications.', siteName: 'Furnom Studio' }, twitter: { card: 'summary', title: 'Furnom Dam | Software Engineer', description: 'Backend systems, cloud infrastructure, and intelligent applications.' } };
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) { return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /><Analytics /></body></html>; }
