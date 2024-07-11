import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import ComponentsLayout from "@/app/ComponentsLayout";

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
          <ComponentsLayout>{children}</ComponentsLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
