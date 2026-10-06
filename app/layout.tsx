import type { Metadata } from "next";
import { Inter, Krona_One, Montserrat, Poppins, Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      className={`${redHat.variable} ${redHatText.variable} ${krona.variable} ${poppins.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">
        {/* Navbar and Footer live here once, so every page gets them automatically. */}
        <div className="mx-auto flex min-h-screen w-full max-w-1686 flex-col overflow-x-clip bg-white">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
