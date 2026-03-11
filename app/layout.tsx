import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swati Hegde | AI Engineer Portfolio",
  description: "Portfolio website for Swati Hegde, AI Engineer and Full Stack Developer"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
