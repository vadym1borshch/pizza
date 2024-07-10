import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fast Pizza",
  description: "Create by BORSHCH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div className="h-screen flex flex-col z-0">
            <Header />
            <div className="flex-grow overflow-auto">
              {children}
            </div>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
