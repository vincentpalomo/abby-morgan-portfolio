import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto_Mono({ subsets: ['latin'] });
const lemurmure = localFont({ src: './le-murmure.ttf', display: 'swap', variable: '--font-lemurmure' });

export const metadata: Metadata = {
  title: 'Abby Morgan Portfolio',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className} ${lemurmure.variable}`}>{children}</body>
    </html>
  );
}
