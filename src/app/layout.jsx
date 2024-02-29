import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { cx } from "@/src/utils"
import Header from "@/src/components/header/Header"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
})
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
})

export const metadata = {
  title: "Tim's Blog",
  description: "Blog about programming",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-primary bg-light"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
