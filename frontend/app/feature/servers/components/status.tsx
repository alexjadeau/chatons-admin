"use client"

import { useServerStatus, type Server } from "@/app/feature/servers"
import { useScopedI18n } from "@/app/lib/i18n/client"
import { Badge, Flex, Text } from "@radix-ui/themes"

interface ServersStatusProps {
  server: Server
}

type StatusColor = "grass" | "red" | "yellow"

type StatusLabel = "online" | "offline" | "unknown"

function getStatusColor(status: boolean | null): StatusColor {
  if (status === null) return "yellow"
  if (status) return "grass"
  return "red"
}

function getStatusLabel(status: boolean | null): StatusLabel {
  if (status === null) return "unknown"
  if (status) return "online"
  return "offline"
}

export default function ServersStatus(props: ServersStatusProps) {
  const { server } = props

  const status = useServerStatus(server)

  const t = useScopedI18n("servers")

  return (
    <Flex justify="between" align="center">
      <Text>{t("status")}</Text>
      <Badge color={getStatusColor(status)} variant="soft" radius="full">
        {t(getStatusLabel(status))}
      </Badge>
    </Flex>
  )
}
