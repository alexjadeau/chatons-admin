import { Header } from "@/app/components"
import "@/app/globals.css"
import { getI18n, LocaleProps } from "@/app/lib/i18n"
import Providers from "@/app/providers"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
  params: Promise<LocaleProps>
  servers: ReactNode
}

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n()

  return {
    title: t("template.title", { title: t("home.title") }),
    description: t("app.description"),
  }
}

export default async function RootLayout(props: LayoutProps) {
  const { children, params, servers } = props

  const { locale } = await params

  return (
    <html lang={locale} suppressHydrationWarning className={jetBrainsMono.variable}>
      <body>
        <Providers localeProps={{ locale }} themeProps={{ accentColor: "grass", radius: "large" }}>
          <Header />
          <main>
            {children}
            {servers}
          </main>
        </Providers>
      </body>
    </html>
  )
}
