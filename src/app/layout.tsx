import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/sections";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Lovely Next App",
  description: "NextLovelyApp official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex flex-col h-screen w-full max-w-[1000px] mx-auto bg-slate-200">
          <Header />
          
          <div className="w-full h-screen my-10">
          {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
