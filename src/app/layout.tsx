import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

// НАСТРОЙКИ ДЛЯ GOOGLE И ПОИСКОВИКОВ
export const metadata: Metadata = {
  title: "AhVan Tour | Лучшие экскурсии в Хургаде и Египте",
  description: "Забронируйте незабываемые экскурсии в Хургаде: Сафари, Луксор, Морские прогулки и Оранжевый остров. Прямые цены от организаторов AhVan Tour.",
  keywords: ["экскурсии хургада", "сафари египет", "луксор из хургады", "AhVan Tour", "туры египет", "оранжевый остров"],
  
  // ПОДТВЕРЖДЕНИЕ ПРАВ GOOGLE
  verification: {
    google: "9w3HX9ey_aM2pcTfarS5YDekH32AfguhSDF66YJhIhY",
  },

  openGraph: {
    title: "AhVan Tour — Экскурсии, которые вы полюбите",
    description: "Лучшие цены на экскурсии в Египте. Профессиональные гиды и комфортный трансфер.",
    url: "https://tour-web-origin.vercel.app",
    siteName: "AhVan Tour",
    locale: "ru_RU",
    type: "website",
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