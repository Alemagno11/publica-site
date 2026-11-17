import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://publica.ag"),
  title: "PUBLIca. — Agência de Marketing de Influência",
  description:
    "PUBLIca. conecta marcas às vozes que o público já escuta. Estratégia, casting de criadores, campanhas e mensuração em um só lugar.",
  openGraph: {
    title: "PUBLIca. — Agência de Marketing de Influência",
    description:
      "Estratégia, casting de criadores, campanhas e mensuração em um só lugar.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${instrument.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
