import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const noto = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "edX",
  description: "Open Source Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>

      <body
        className={
          noto.variable + " " + "font-sans select-none"
          // +
          // " " +
          // "md:max-w-4xl md:mx-auto mx-3 py-4 px-4 border-x-[1px] border-white min-h-screen"
        }
      >
        <Navbar />
        <main className="grid grid-cols-12">
          <Sidebar />
          <div className="col-span-9">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
