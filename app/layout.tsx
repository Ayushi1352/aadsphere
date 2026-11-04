import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Inter, Krona_One, Montserrat, Poppins, Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], fallback: ["Arial", "sans-serif"], variable: "--font-red-hat-display" });
const redHatText = Red_Hat_Text({ subsets: ["latin"], weight: ["400", "500"], fallback: ["Arial", "sans-serif"], variable: "--font-red-hat-text" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], fallback: ["Arial", "sans-serif"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], fallback: ["Arial", "sans-serif"], variable: "--font-montserrat" });
const kronaOne = Krona_One({ subsets: ["latin"], weight: ["400"], fallback: ["Arial", "sans-serif"], variable: "--font-krona-one" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], fallback: ["Arial", "sans-serif"], variable: "--font-poppins" });

const templateData: AdvertisingTemplateData = rawData;
const sectionData = templateData.categories.Advertising.sections;
const commonData = templateData.common;

// Which font each part of the site uses comes from templates.json (common.theme.fonts).
const fonts = commonData.theme.fonts;
const fontVariables = {
  "--font-primary": fonts.primary,
  "--font-text": fonts.text,
  "--font-ui": fonts.ui,
  "--font-article": fonts.article,
  "--font-hero": fonts.hero,
  "--font-alt": fonts.alt,
} as CSSProperties;

export const metadata: Metadata = {
  title: commonData.metadata.title,
  description: commonData.metadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={commonData.metadata.lang}
      style={fontVariables}
      data-scroll-behavior="smooth"
      // --unit is one design pixel: 1px below 1024px, then the 1686px design scaled to the screen width, capped at 1920px.
      // Width only, so browser zoom and short screens keep the same desktop layout instead of reflowing it.
      // Everything clickable gets the pointer; with reduced motion turned on the page does not scroll smoothly.
      className={`${redHatDisplay.variable} ${redHatText.variable} ${inter.variable} ${montserrat.variable} ${kronaOne.variable} ${poppins.variable} scroll-smooth antialiased [-webkit-tap-highlight-color:transparent] motion-reduce:scroll-auto [--unit:1px] lg:[--unit:calc(100vw/1686)] min-[1920px]:[--unit:calc(1920px/1686)] [&_:where(a[href],button:not(:disabled),select,summary,label[for],[role=button])]:cursor-pointer`}
    >
      <body className="min-h-screen">
        <ScrollReveal />
        {/*
          The whole site sits in one frame, at most 1920px wide and centred. Up to 1920px it fills the
          screen, so nothing changes; on wider screens or when the browser is zoomed out the page stays
          in the middle with equal space on both sides instead of stretching.
          Header and Footer live here once, so every page gets them automatically.
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[120rem] flex-col overflow-x-clip bg-[var(--color-white)]">
          <Header data={sectionData.Header?.variants?.AdvertisingHeader1} company={commonData.company} />
          <ScrollToTop>{children}</ScrollToTop>
          <Footer data={commonData.Footer} company={commonData.company} />
        </div>
      </body>
    </html>
  );
}
