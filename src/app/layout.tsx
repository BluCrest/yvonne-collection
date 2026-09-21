import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yvonnecollection.org"),
  title: "Yvonne Collection | Elegance Rooted in Faith",
  description:
    "Curated fashion for the woman who knows her worth. Elegant evening wear, everyday chic, and statement tees. God is Able.",
  keywords: ["fashion", "boutique", "Nigeria", "elegant", "women", "statement tees"],
  openGraph: {
    title: "Yvonne Collection",
    description: "Elegance rooted in faith. Style without compromise.",
    type: "website",
    url: "https://yvonnecollection.org",
  },
  alternates: { canonical: "https://yvonnecollection.org" },
  // Google Search Console — set GOOGLE_SITE_VERIFICATION in Vercel env, redeploy
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-charcoal">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
