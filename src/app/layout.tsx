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
  title: "FLORENTEK Engineering",
  description:
    "Com uma equipe vibrante e qualificada, representamos um futuro mais brilhante, promovendo avanços que atendem às crescentes demandas de nossos clientes.",
  openGraph: {
    title: "FLORENTEK Engineering",
    description:
      "Fornecemos serviços industriais integrados, incluindo engenharia e design de instrumentação, sistemas elétricos, de controle e segurança.",
    type: "website",
    siteName: "FLORENTEK Engineering",
    url: "https://www.florentek.co.ao",
    images: [
      {
        url: "https://evolution-rho.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.a63b1321.png&w=1920&q=75",
        secureUrl:
          "https://evolution-rho.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.a63b1321.png&w=1920&q=75",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "FLORENTEK Engineering Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLORENTEK Engineering",
    description:
      "Fornecemos serviços industriais integrados, incluindo engenharia e design de instrumentação, sistemas elétricos, de controle e segurança.",
    images: [
      "https://evolution-rho.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.a63b1321.png&w=1920&q=75",
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/icon_Primary1.png",
    apple: "/icon_Primary1.png",
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
