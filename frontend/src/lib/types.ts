import type { ReactNode } from "react"

export interface Bookmark {
  id: number
  title: string
  url: string
  description: string
  tags: string[]
  favicon: string
  collection: string
  icon: ReactNode
}

export interface Collection {
  id: number
  name: string
  count: number
  icon: ReactNode
}
