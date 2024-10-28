"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = usePathname();
  const layoutRoutes = ["/admin"];
  const isLayoutRoute = layoutRoutes.includes(router);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {isLayoutRoute ? <></> : <Footer />}
      </body>
    </html>
  );
}
