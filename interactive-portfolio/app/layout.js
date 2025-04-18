import { Geist, Geist_Mono, Doto, Montserrat, Birthstone_Bounce } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import LayoutWrapper from "@/components/LayoutWrapper";

export const bBounce = Birthstone_Bounce({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-wind-song",
});

export const doto = Doto({
  variable: "--font-doto",
  weight: ["400",],
  subsets: ["latin"],
  display: "swap",
});

export const monte = Montserrat({
  variable: "--font-monte",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: "interactive portfolio",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LayoutWrapper>

          <div className="absolute top-2 left-0 right-0 z-50">
            <Navbar />
          </div>

          {children}

        </LayoutWrapper>
      </body>

    </html>
  );
}
