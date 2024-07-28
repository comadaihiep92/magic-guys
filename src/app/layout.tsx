import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { appWithTranslation } from "next-i18next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const playfair_Display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
});

export const metadata: Metadata = {
  title: "Magic Guys",
  description: "Magic",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair_Display.variable}`}>
        {children}
      </body>
    </html>
  );
}
export default RootLayout;
