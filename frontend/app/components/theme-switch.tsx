"use client"

import { DarkModeIcon, LightModeIcon } from "@/app/components/icons"
import { useScopedI18n } from "@/app/lib/i18n/client"
import { IconButton } from "@radix-ui/themes"
import { useTheme } from "next-themes"

export default function ThemeSwitch() {
  const t = useScopedI18n("header")

  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <IconButton variant="soft" color="gray" onClick={handleClick}>
      {theme === "dark" ? <LightModeIcon label={t("theme.light")} /> : <DarkModeIcon label={t("theme.dark")} />}
    </IconButton>
  )
}
