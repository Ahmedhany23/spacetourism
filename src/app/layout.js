import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Bellefair, Barlow_Condensed } from "next/font/google";
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--bellefair-font",
});
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--barlow-font",
});

export const metadata = {
  title: "Frontmentor Challenge",
  description: "SpaceTourism",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bellefair.variable} ${barlow.variable}  bg-primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
