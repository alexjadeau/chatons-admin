"use client"

import { type Server, getServerStatus } from "@/app/feature/servers"
import { useEffect, useState } from "react"

// TODO: implement Tanstack Query
export function useServerStatus(server: Server) {
  const [status, setStatus] = useState<boolean | null>(null)

  useEffect(() => {
    getServerStatus(server).then(setStatus)
  }, [server])

  return status
}
