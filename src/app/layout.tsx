import { Viewport } from "next";
import { Lora, Roboto } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${roboto.variable}`}>
        <div className="pageContent">{children}</div>
      </body>
    </html>
  );
}
