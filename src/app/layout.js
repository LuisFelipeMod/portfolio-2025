import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luis Felipe C Modesto | Desenvolvedor Front-End",
  description: "Portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${rubik.variable}`}>
        {children}
      </body>
    </html>
  );
}
