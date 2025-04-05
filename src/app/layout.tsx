import type { Metadata } from "next";
import { roboto } from "./_utlis/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Just Share It",
  description: "A quick file sharing app",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased `}>{children}</body>
    </html>
  );
}
