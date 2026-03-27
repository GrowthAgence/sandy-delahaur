import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SDL Agency — L'Excellence au Féminin",
  description:
    "SDL Agency accompagne les femmes entrepreneures qui ont le talent, l'énergie et l'ambition — mais pas encore la méthode pour en vivre vraiment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${manrope.variable} dark`}
    >
      <body className="min-h-dvh font-body antialiased">{children}</body>
    </html>
  );
}
