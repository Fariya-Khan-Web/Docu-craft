import localFont from "next/font/local";
import "./globals.css";
import { getDocuments } from "@/lib/doc";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DocuCraft - A documentation website",
  description: "A documentation website by Protocol",
};

export default function RootLayout({ children }) {

  const allDocuments = getDocuments()
  console.log(allDocuments)

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-full lg:ml-72 xl:ml-80">

          <Header/>

          {children}

        </div>
      </body>
    </html>
  );
}
