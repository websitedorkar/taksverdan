import type { Metadata } from "next";
import { Poppins, Roboto, Inter, Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ["300", "400", "500", "600", "700",],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ["300", "400", "500", "600", "700",],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: '--font-roboto',
  weight: ["300", "400", "500", "700",],
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: '--font-open-sans',
  weight: ["300", "400", "500", "600", "700",],
});

export const metadata: Metadata = {
  title: 'Taksverden',
  description: 
    '',
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${roboto.variable} ${open_sans.variable}`}>
      <body>
        <div className="overflow-hidden z-[2] relative">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
