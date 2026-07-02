import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Dalwadi | Full Stack Developer",
  description:
    "Aryan Dalwadi's full stack developer portfolio showcasing React.js, Node.js, Express.js, MSSQL, projects, experience, skills, resume, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
