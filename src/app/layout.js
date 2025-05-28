import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Colledge IT",
  description: "Colledge IT is a community of IT enthusiasts and professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className="grid grid-cols-3[1fr,3fr,1fr] gap-4 p-4">
          <div></div>
          {children}
          <div></div>
        </div>
      </body>
    </html>
  );
}
