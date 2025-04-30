import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { roboto } from "./_utlis/fonts";
import { Toaster } from "react-hot-toast";

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
        <body className={`${roboto.className} antialiased `}>
          <Toaster
            position="top-center"
            toastOptions={{
              error: {
                style: {
                  border: "1px solid #EF4444",
                  padding: "16px",
                  color: "#EF4444",
                  backgroundColor: "#FEE2E2",
                },
                iconTheme: {
                  primary: "#EF4444",
                  secondary: "#FEE2E2",
                },
              },
            }}
          />{" "}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
