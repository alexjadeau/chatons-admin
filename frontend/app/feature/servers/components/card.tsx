import { ServersStatus, type Server } from "@/app/feature/servers"
import { Card, Flex, Heading, Text } from "@radix-ui/themes"
import Image from "next/image"

interface ServersCardProps {
  server: Server
}

export default async function ServersCard(props: ServersCardProps) {
  const { server } = props

  return (
    <Card>
      <Flex direction="column" gap="3">
        <Flex gap="3">
          <Image src="/minecraft.png" alt={server.name} width={40} height={40} />
          <Flex direction="column" overflow="hidden">
            <Heading as="h3" size="3">
              {server.name}
            </Heading>
            <Text as="p" size="3" truncate>
              {server.description || server.name}
            </Text>
          </Flex>
        </Flex>
        <ServersStatus server={server} />
      </Flex>
    </Card>
  )
}
