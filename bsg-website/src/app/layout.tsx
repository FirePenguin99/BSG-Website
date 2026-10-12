import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme_provider";
import "./globals.css";
import { NavigationHeader } from "@/components/navigation_header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bsg-website",
  description: "A Next.js starter with TypeScript and shadcn/ui.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationHeader tagAndUrls={[
            { tag: "Games", url: "/games" },
            { tag: "The Dream", url: "/the-dream" },
            { tag: "About Us", url: "/about-us" },
            { tag: "Hot Takes", url: "/hot-takes" }
          ]}></NavigationHeader>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
