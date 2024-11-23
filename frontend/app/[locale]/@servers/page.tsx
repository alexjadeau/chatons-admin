import { getServers, ServersGrid } from "@/app/feature/servers"
import { getScopedI18n } from "@/app/lib/i18n"
import { Container, Flex, Heading, Section } from "@radix-ui/themes"

export default async function ServersPage() {
  const servers = await getServers()

  const t = await getScopedI18n("servers")

  return (
    <Container size={{ initial: "1", md: "2" }} px="3">
      <Section size="1" pt="3" pb="0">
        <Flex direction="column" gap="3">
          <Heading as="h2" size="6">
            {t("title")}
          </Heading>
          <ServersGrid servers={servers} />
        </Flex>
      </Section>
    </Container>
  )
}
