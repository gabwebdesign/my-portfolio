import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Gabriel Aguilar Software FrontEnd Developer RAG IA",
  description: "Highly skilled Front-End Developer with over 10 years of experience building web applications and interactive experiences. Proven ability to collaborate effectively with designers and back-end developers to deliver high-quality, user-friendly solutions. Adept in modern front-end technologies including HTML, CSS, JavaScript, and frameworks like React, Angular, and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics  />
      </body>
    </html>
  );
}
