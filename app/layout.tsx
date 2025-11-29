import type React from "react"
import type { Metadata } from "next"
import { Cairo, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Waad Education | Shaping the Future of Education in KSA",
  description:
    "Waad Education Company - Building the Leaders of Tomorrow. Premier educational institution in Saudi Arabia with Waad Academy, Dar Al-Thikr Schools, and Bloom Schools.",
  keywords: ["Waad Education", "Saudi Arabia Schools", "KSA Education", "Vision 2030", "Private Schools Jeddah"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
