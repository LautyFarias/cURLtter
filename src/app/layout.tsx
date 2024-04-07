import { Inter } from "next/font/google"

import type { Metadata } from "next"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "cURLtter",
  description: "Yet another URL s̶h̶o̶r̶t̶e̶n̶e̶r̶ cutter.",
  icons: ["/favicon.svg"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  )
}
