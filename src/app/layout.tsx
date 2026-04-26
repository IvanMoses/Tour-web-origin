import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "AhVan Tour | Лучшие экскурсии в Хургаде и Египте",
  description: "Забронируйте незабываемые экскурсии в Хургаде: Сафари, Луксор, Морские прогулки и Трансфер по всему Египту.",
  verification: {
    google: "9w3HX9ey_aM2pcTfarS5YDekH32AfguhSDF66YJhIhY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}