import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: "Duong Thang's Portfolio",
  description: "The portfolio of Duong Thang Nguyen, a Computer Science student based in Adelaide, Australia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceMono.className}>
      <head>
        <link rel="stylesheet" href="/css/all.min.css" />
      </head>
      <body className="bg-background text-secondary">{children}</body>
    </html>
  );
}
