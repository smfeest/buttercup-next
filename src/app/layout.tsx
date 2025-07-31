import { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Lora, Roboto } from "next/font/google";
import TopBar from "./components/top-bar";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#2c6877",
};

const lora = Lora({
  display: "optional",
  fallback: ["serif"],
  preload: false,
  variable: "--font-lora",
});
const roboto = Roboto({
  display: "optional",
  fallback: ["sans-serif"],
  preload: false,
  variable: "--font-roboto",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("layout");
  const title = t("title");

  return {
    title: {
      template: `%s - ${title}`,
      default: title,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`${lora.variable} ${roboto.variable}`}>
        <NextIntlClientProvider>
          <TopBar />
          <div className="pageContent">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
