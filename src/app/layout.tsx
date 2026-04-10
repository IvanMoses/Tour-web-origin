import type { Metadata } from "next";
import "./globals.css"; // ПРОВЕРЬ ЭТУ СТРОЧКУ! Она должна быть первой

export const metadata: Metadata = {
  title: "Hurghada For You — Экскурсии в Хургаде",
  description: "Лучшие цены на экскурсии в Египте",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
} 