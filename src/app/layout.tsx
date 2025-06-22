import { Navbar } from '@/components/navbar';
import { Providers } from '@/components/providers';
import { serverEnvs } from '@/env/server';
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

import '@/styles/globals.css';

const inter = Inter({
    variable: '--font-sans',
    subsets: ['latin'],
});

const jb = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
});

export const viewport: Viewport = {
    themeColor: '#4d7cda',
    initialScale: 1.0,
    maximumScale: 1.0,
    minimumScale: 1.0,
    userScalable: false,
    width: 'device-width',
};

export const metadata: Metadata = {
    title: {
        default: 'Matt Drapkin',
        template: '%s | Matt Drapkin',
    },
    keywords: ['tech', 'investing', 'basketball', 'software engineering'],
    description: 'Personal website of Matt Drapkin - Tech, Investing, and Basketball',
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/logo_small.png',
        shortcut: '/logo_small.png',
        apple: '/logo_small.png',
    },
};

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en' dir='ltr' suppressHydrationWarning>
            <body
                className={`${inter.variable} ${jb.variable} ${
                    serverEnvs.NODE_ENV === 'development' ? 'debug-screens' : ''
                }`}>
                <Providers>
                    <Navbar />
                    <main>{children}</main>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
