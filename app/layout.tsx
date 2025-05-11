import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Skilled e-learning landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased text-preset-5`}>
        {children}
      </body>
    </html>
  );
}
