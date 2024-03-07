import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket Form",
  description: "Next JS App - SinghAstra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
