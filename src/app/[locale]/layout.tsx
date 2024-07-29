import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

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

async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const message = await getMessages();
  console.log("params ->", locale, "message ->", message);

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} ${playfair_Display.variable}`}>
        <NextIntlClientProvider messages={message}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
export default RootLayout;
