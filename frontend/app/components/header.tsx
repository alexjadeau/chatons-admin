import { ThemeSwitch } from "@/app/components"
import { getScopedI18n } from "@/app/lib/i18n"
import { Container, Flex, Heading } from "@radix-ui/themes"
import Image from "next/image"

export default async function Header() {
  const t = await getScopedI18n("header")

  return (
    <header>
      <Container size={{ initial: "1", md: "2" }} p="3">
        <Flex justify="between" align="center">
          <Flex align="center" gap="3">
            <Image src="/minecraft.png" alt={t("title")} width={36} height={36} />
            <Heading as="h6" size="3">
              {t("title")}
            </Heading>
          </Flex>
          <Flex gap="3">
            <ThemeSwitch />
          </Flex>
        </Flex>
      </Container>
    </header>
  )
}
