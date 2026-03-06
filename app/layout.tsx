import type React from "react"
import type { Metadata } from "next"
import { Inter, Mulish } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Garagefolio | The Digital Logbook for Enthusiasts",
  description: "Track, preserve, and share your vehicle's story — from first bolt to final sale.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Garagefolio | The Digital Logbook for Enthusiasts",
    description: "Track, preserve, and share your vehicle's story — from first bolt to final sale.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://t.contentsquare.net/uxa/7f9d30d04c0dd.js" async></script>
      </head>
      <body className={`${inter.variable} ${mulish.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
