import { Viewport } from "next";
import "./globals.css";
import icon128 from "./icon-128.png";
import icon16 from "./icon-16.png";
import icon32 from "./icon-32.png";
import icon512 from "./icon-512.png";
import icon96 from "./icon-96.png";

export const viewport: Viewport = {
  themeColor: "#2c6877",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href={icon16.src} sizes="16x16" />
        <link rel="icon" type="image/png" href={icon32.src} sizes="32x32" />
        <link rel="icon" type="image/png" href={icon96.src} sizes="96x96" />
        <link rel="icon" type="image/png" href={icon128.src} sizes="128x128" />
        <link rel="icon" type="image/png" href={icon512.src} sizes="512x512" />
      </head>
      <body>
        <div className="pageContent">{children}</div>
      </body>
    </html>
  );
}
