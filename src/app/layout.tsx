import type { Metadata } from "next";
import "./globals.css";
import { SplashScreen } from "./splash-screen";
import { profile } from "./portfolio-data";

const siteUrl = "https://aryan-dalwadi-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aryan Dalwadi | Full Stack Developer",
  description: profile.summary,
  icons: {
    icon: [{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Aryan Dalwadi | Full Stack Developer",
    description: profile.summary,
    url: siteUrl,
    siteName: "Aryan Dalwadi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Dalwadi | Full Stack Developer",
    description: profile.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SplashScreen>{children}</SplashScreen>
      </body>
    </html>
  );
}
