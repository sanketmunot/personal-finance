import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body>
          <UserButton afterSignOutUrl="/" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
