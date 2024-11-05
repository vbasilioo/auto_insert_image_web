"use client";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ThemeProvider } from "next-themes";
import { ThemeChanger } from "@/components/theme-changer";
import { Toaster } from "@/components/ui/sonner";
import { Poppins } from '@next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${poppins.className}`}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class">
            {children}
            <ThemeChanger />
          </ThemeProvider>
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
