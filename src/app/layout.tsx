import type { Metadata, Viewport } from 'next';
import { Azeret_Mono, Spectral, Xanh_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { StatusBar } from '@/components/status-bar';
import { profile, site } from '@/lib/data';

const display = Xanh_Mono({ weight: '400', style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Spectral({ weight: ['400', '600'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-body', display: 'swap' });
const mono = Azeret_Mono({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-mono', display: 'swap' });

const title = `${profile.name} | Principal Engineer, eCommerce at CBA`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${profile.name}` },
  description: profile.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: site.url,
    siteName: profile.name,
    title,
    description: profile.description,
    images: [{ url: '/avatar.jpg', width: 700, height: 700, alt: `Portrait of ${profile.name}` }],
  },
  twitter: { card: 'summary', title, description: profile.description, images: ['/avatar.jpg'] },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f5f8' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1b26' },
  ],
};

// Runs before first paint so the saved theme applies without a flash. Light is the default.
const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <StatusBar />
      </body>
    </html>
  );
}
