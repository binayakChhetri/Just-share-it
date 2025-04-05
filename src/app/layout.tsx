import type { Metadata } from "next";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import "./globals.css";
import { roboto } from "./_utlis/fonts";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${roboto.className} antialiased `}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
