import * as React from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { SummarySidebar, type Heading } from "@/components/summary-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { useThemeShortcut } from "@/hooks/use-theme-shortcut"
import type { ContentTreeNode } from "@/lib/content-tree"

export function AppShell({
  tree,
  activeSlug,
  summary,
  children,
}: {
  tree: ContentTreeNode[]
  activeSlug?: string
  summary?: {
    title: string
    description?: string
    headings: Heading[]
    wordCount: number
    readingTime: number
  }
  children?: React.ReactNode
}) {
  useThemeShortcut()

  return (
    <SidebarProvider>
      <AppSidebar tree={tree} activeSlug={activeSlug} />
      <SidebarInset>
        <div className="flex min-h-svh flex-col gap-6 p-6">{children}</div>
      </SidebarInset>
      {summary && <SummarySidebar {...summary} />}
    </SidebarProvider>
  )
}
