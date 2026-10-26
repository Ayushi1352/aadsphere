import type { Metadata } from "next";
import { Inter, Krona_One, Montserrat, Poppins, Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/data";
import "./globals.css";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-red-hat",
  display: "swap",
});
const redHatText = Red_Hat_Text({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-red-hat-text", display: "swap" });
const krona = Krona_One({ subsets: ["latin"], weight: "400", variable: "--font-krona", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins-face",
  display: "swap",
});
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-montserrat-face", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter-face", display: "swap" });

export const metadata: Metadata = site.siteMeta.meta.Layout;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.siteMeta.lang}
      className={`scroll-smooth ${redHat.variable} ${redHatText.variable} ${krona.variable} ${poppins.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <body>
        <ScrollReveal />
        {/*
          Sizing: the design was drawn 1686px wide and every size in the site is
          written as a number of design pixels, calc(N*var(--unit)).
          --unit is 1px on phones and tablets and on screens 1686px and wider. On
          laptops (1024px-1686px) it shrinks with the screen, so the desktop layout
          scales down in proportion instead of breaking. The variable is set only
          on this wrapper, so nothing outside the site's own markup is affected.
        */}
        <div className="min-h-screen bg-[#f5f5f5] font-(family-name:--font-red-hat) text-[#141414] antialiased [--unit:1px] lg:[--unit:min(1px,calc(100vw/1686))]">
          {/* Navbar and Footer live here once, so every page gets them automatically. */}
          <div className="mx-auto flex min-h-screen w-full max-w-[calc(1686*var(--unit))] flex-col overflow-x-clip bg-white">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
