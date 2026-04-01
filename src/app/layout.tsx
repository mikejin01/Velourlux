import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VELOURLUX | Luxury Curtains, Shades & Blinds",
  description:
    "Velourlux is a luxury boutique specializing in custom and ready-made window treatments. Curtains, shades, blinds and home decor crafted with premium fabrics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
