import { Rubik } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luis Felipe G Modesto | Desenvolvedor Front-End",
  description: "Portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <GoogleTagManager gtmId="GTM-PZ9J4588" />
      <body className={`${rubik.variable}`}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-BCRJ8XMC20" />
      </body>
    </html>
  );
}
