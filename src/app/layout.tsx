import type { Metadata } from "next";

import Footer from "@/sections/Footer/Footer";
import Header from "@/sections/Header/Header";

import {
  Roboto,
  Roboto_Condensed,
  Roboto_Mono,
  Open_Sans,
  Ribeye_Marrow,
} from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto-condensed",
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-roboto_mono",
});
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-open_sans",
});
const ribeye_marrow = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-ribeye_marrow",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore the portfolio of Iryna Buhaichuk, a skilled Frontend Developer. Discover her web development projects, creative approach, and impressive user interfaces.",
  icons: [
    {
      url: '/icons/favicon.svg',
      media: '(prefers-color-scheme: dark)',
      rel: 'icon',
      type: 'image/svg',
    },
    {
      url: '/icons/favicon.svg',
      media: '(prefers-color-scheme: light)',
      rel: 'icon',
      type: 'image/svg',
    },
  ],
  openGraph: {
    type: 'website',
    url: 'https://portfolio-beige-sigma-66.vercel.app/',
    title: 'Portfolio',
    description: "Explore the portfolio of Iryna Buhaichuk, a skilled Frontend Developer. Discover her web development projects, creative approach, and impressive user interfaces.",
    siteName: 'Portfolio',
    images: [{ url: '/ogp/main.jpg' }, { url: '/ogp/main.png' }],
  },
  metadataBase: new URL('https://portfolio-beige-sigma-66.vercel.app/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  ${roboto_condensed.className} ${roboto_mono.variable} ${open_sans.variable} ${ribeye_marrow.variable}`}>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
