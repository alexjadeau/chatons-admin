import { Emoji } from "@/app/components"
import { getScopedI18n } from "@/app/lib/i18n"
import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes"

export default async function HomePage() {
  const t = await getScopedI18n("home")

  return (
    <Container size={{ initial: "1", md: "2" }} px="3">
      <Section size="1" pt="3" pb="0">
        <Heading as="h1" style={{ display: "none" }}>
          {t("title")}
        </Heading>
        <Flex direction="column" gap="3">
          <Text size="3">
            {t("hello")} <Emoji label="wave">👋</Emoji>
          </Text>
          <Text size="3">{t("intro")}</Text>
        </Flex>
      </Section>
    </Container>
  )
}
