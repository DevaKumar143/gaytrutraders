import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gayatri Traders | Building Materials",
  description:
    "Building materials, tiles, paints, hardware and home improvement supplies from Gayatri Traders in Rampur Gaunaria, Uttar Pradesh.",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
