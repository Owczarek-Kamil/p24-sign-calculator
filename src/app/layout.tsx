/** @format */

import type { Metadata } from "next";
import "../styles/globals.css";
import { Jost } from "next/font/google";

export const metadata: Metadata = {
  title: "P24 | Sign Calculator",
  description: `Sign calculator for the P24 REST API and SOAP 3.2 documentations`,
  generator: "Next.js",
  applicationName: "P24 | Sign Calculator",
  keywords: ["Next.js", "React", "JavaScript", "Tailwind CSS", "TypeScript"],
  authors: [{ name: "Kamil Owczarek" }],
};

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  fallback: ["system-ui"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} flex min-h-screen min-w-[23.4375rem] bg-color-pearl font-jost`}>
        {children}
      </body>
    </html>
  );
}
