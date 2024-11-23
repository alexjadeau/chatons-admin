import type { Server } from "@/app/feature/servers"
import { ServersCard } from "@/app/feature/servers"
import { Grid } from "@radix-ui/themes"

interface GridProps {
  servers: Server[]
}

export default function ServersGrid(props: GridProps) {
  const { servers } = props

  return (
    <Grid columns={{ initial: "1", sm: "2" }} gap="3">
      {servers.map((server) => (
        <ServersCard key={server.id} server={server} />
      ))}
    </Grid>
  )
}
