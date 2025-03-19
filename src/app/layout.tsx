import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evolution Technologies - Redes e Soluções Inovadoras",
  description:
    "Evolution Technologies Lda. oferece serviços de Redes e Soluções com uma equipe altamente qualificada, garantindo excelência e inovação para seu projeto.",
  openGraph: {
    title: "Evolution Technologies - Redes e Soluções Inovadoras",
    description:
      "Soluções de redes e tecnologia da Evolution Technologies para seu projeto, com uma equipe experiente e qualificada em Angola.",
    type: "website",
    siteName: "Evolution Technologies",
    url: "https://www.evolutiontech.co.ao",
    images: [
      {
        url: "https://evolution-rho.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.a63b1321.png&w=1920&q=75",
        secureUrl:
          "https://evolution-rho.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.a63b1321.png&w=1920&q=75",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Homepage da Evolution Technologies - Redes e Soluções",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolution Technologies - Redes e Soluções Inovadoras",
    description:
      "Evolution Technologies oferece soluções inovadoras em redes e TI para seu projeto.",
    images: [
      "https://evolution-rho.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.a63b1321.png&w=1920&q=75",
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "../Assets/favicon_io/favicon.ico",
    apple: "../Assets/favicon_io/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
