import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieLand",
  description: "Remaking MovieLand in Next.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
