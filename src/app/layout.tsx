import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Personal Finances",
  description: "A intuitive app to track personal finances",
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
