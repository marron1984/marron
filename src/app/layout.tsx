import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "吉田 俊輔 (Marron) | Serial Entrepreneur & Social Problem Solver",
  description:
    "社会課題を、事業で解く。16歳から続く、自走型起業家の軌跡。介護、ホテル、IT、国際事業を手掛ける吉田俊輔のポートフォリオ。",
  keywords: [
    "吉田俊輔",
    "Shunsuke Yoshida",
    "Marron",
    "起業家",
    "Serial Entrepreneur",
    "DHP",
    "100doors",
    "社会課題",
  ],
  openGraph: {
    title: "吉田 俊輔 (Marron) | Serial Entrepreneur",
    description:
      "社会課題を、事業で解く。16歳から続く、自走型起業家の軌跡。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "吉田 俊輔 (Marron) | Serial Entrepreneur",
    description:
      "社会課題を、事業で解く。16歳から続く、自走型起業家の軌跡。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased bg-[#0A0A0F]">
        {children}
      </body>
    </html>
  );
}
