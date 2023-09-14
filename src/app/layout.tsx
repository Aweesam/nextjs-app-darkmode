import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { getTheme } from '../lib/getTheme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
