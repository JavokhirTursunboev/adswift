import type { Metadata } from "next";
import React, { Suspense } from 'react';

import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavbarMain from "@/components/Navbar/Navbar";
import { Providers } from "./_Nextui/provider";
import Footer from "@/components/Footer/Footer";
import AuthProvider from './../providers/AuthProvider';
import Loading from "./loading";
// done
const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdSwift",
  description: "Develop you future with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>

        <Providers>
          <div className="  mx-auto  lg:px-0 ">
            <NavbarMain />
            <Suspense fallback={<Loading />}>
            {children}
            </Suspense>
            <Footer />
          </div>
        </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
