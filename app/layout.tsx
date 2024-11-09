import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Aguilar Frontend Developer",
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
      </body>
    </html>
  );
}
