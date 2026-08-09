import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "چک الکترونیکی بانک ملت | امن، سریع، بدون کاغذ",
  description: "معرفی و راهنمای استفاده از چک الکترونیکی بانک ملت؛ صدور، انتقال و وصول آنلاین با امضای الکترونیکی.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
