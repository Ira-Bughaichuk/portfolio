import type { Metadata } from "next";

import { Roboto, Roboto_Condensed, Roboto_Mono } from "next/font/google";

import "./globals.css";

 const roboto = Roboto({ 
  subsets: ['latin'],
  weight:  ['400', '700'],
  display: 'swap',
  variable: '--font-roboto',
 });
 const roboto_condensed = Roboto_Condensed({ 
  subsets: ['latin'],
  weight:  ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto-condensed',
 });
 const roboto_mono = Roboto_Mono({ 
  subsets: ['latin'],
  weight:  '500',
  display: 'swap',
  variable: '--font-roboto_mono',
 });
 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_condensed.className}>{children}</body>
      {/* <body>{children}</body> */}
    </html>
  );
}
