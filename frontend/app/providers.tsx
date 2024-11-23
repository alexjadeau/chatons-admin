"use client"

import type { LocaleProps } from "@/app/lib/i18n"
import { I18nProviderClient } from "@/app/lib/i18n/client"
import { Theme, type ThemeProps } from "@radix-ui/themes"
import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
  localeProps: LocaleProps
  themeProps: ThemeProps
}

export default function Providers(props: ProvidersProps) {
  const { children, localeProps, themeProps } = props

  return (
    <I18nProviderClient {...localeProps}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Theme {...themeProps}>{children}</Theme>
      </ThemeProvider>
    </I18nProviderClient>
  )
}
