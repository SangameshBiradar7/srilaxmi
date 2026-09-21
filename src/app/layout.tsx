import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/layout/UtilityBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Sri Lakshmi Vidyaniketan Educational Society",
    template: "%s | Sri Lakshmi Vidyaniketan",
  },
  description:
    "Building a culture of knowledge, character and opportunity through meaningful education. A legacy of excellence spanning generations.",
  keywords: [
    "Sri Lakshmi Vidyaniketan",
    "Educational Society",
    "Schools",
    "Colleges",
    "Education",
    "Academics",
    "India",
  ],
  authors: [{ name: "Sri Lakshmi Vidyaniketan Educational Society" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://srilakshmividyaniketan.edu",
    siteName: "Sri Lakshmi Vidyaniketan Educational Society",
    title: "Sri Lakshmi Vidyaniketan Educational Society",
    description:
      "Building a culture of knowledge, character and opportunity through meaningful education.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Lakshmi Vidyaniketan Educational Society",
    description:
      "Building a culture of knowledge, character and opportunity through meaningful education.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <UtilityBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
