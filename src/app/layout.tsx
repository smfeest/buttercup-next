import { Viewport } from "next";
import "./globals.css";

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
      <body>
        <div className="pageContent">{children}</div>
      </body>
    </html>
  );
}
