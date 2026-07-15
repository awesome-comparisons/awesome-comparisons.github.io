import * as React from "react"

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/ModeToggle"
import type { ContentTreeNode } from "@/lib/content-tree"

export function AppShell({
  tree,
  activeSlug,
  children,
}: {
  tree: ContentTreeNode[]
  activeSlug?: string
  children?: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar tree={tree} activeSlug={activeSlug} />
      <SidebarInset>
        <div className="flex min-h-svh flex-col gap-6 p-6">
          <div className="flex items-center justify-between">
            <SidebarTrigger />
            <ModeToggle />
          </div>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
