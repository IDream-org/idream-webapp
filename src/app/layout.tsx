import * as React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./redux/provider";
import { CookiesProvider } from "next-client-cookies/server";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import SimpleSnackbar from "@/components/SimpleSnackBar/SimpleSnackBar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IDream",
  description: "Create your own collections",
  manifest: "/manifest.json",
  icons: { apple: "/icon-192x192.png" },
  themeColor: "#1976d2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        {/* <link
          rel="preconnect"
          href="https://categories-app.s3.us-east-1.amazonaws.com"
        /> */}
      </head>
      <body className={inter.className}>
        <ThemeRegistry>
          <Providers>
            <SimpleSnackbar />
            <CookiesProvider>{children}</CookiesProvider>
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
