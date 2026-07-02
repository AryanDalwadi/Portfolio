import type { Metadata } from "next";
import "./globals.css";
import { SplashScreen } from "./splash-screen";

export const metadata: Metadata = {
  title: "Aryan Dalwadi | Full Stack Developer",
  description:
    "Aryan Dalwadi's full stack developer portfolio showcasing React.js, Node.js, Express.js, MSSQL, projects, experience, skills, resume, and contact details.",
  icons: {
    icon: [{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SplashScreen>{children}</SplashScreen>
      </body>
    </html>
  );
}
