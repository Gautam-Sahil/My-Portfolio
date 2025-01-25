import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Sound from "@/components/Sound";

const FireFliesBackground = dynamic(
  () => import("@/components/FireFliesBackground"),
  { ssr: false }
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Gautam's Portfolio | %s | ",
    default: "Gautam's Portfolio",
  },
  description:
    "Hello I'm a web developer and this is my portfolio. I build custom websites that are responsive, fast, and easy to use. So if you're interested Let's work together to bring your digital projects to life with top-tier design and functionality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      </head>

      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
