export interface Server {
  id: string
  name: string
  description: string | null
  port: number
}

export async function getServers(): Promise<Server[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/servers`)
  const data: { servers: Server[] } = await response.json()

  return data.servers
}

export async function getServerStatus(server: Server): Promise<boolean> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/servers/${server.id}`)
  const data: { status: boolean } = await response.json()

  return data.status
}
