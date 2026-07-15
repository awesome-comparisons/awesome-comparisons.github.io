import * as React from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { CommandMenu } from "@/components/command-menu"
import { SummarySidebar, type Heading } from "@/components/summary-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useThemeShortcut } from "@/hooks/use-theme-shortcut"
import { humanizeSegment, type ContentTreeNode } from "@/lib/content-tree-utils"

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

  const segments = activeSlug?.split("/") ?? []

  return (
    <SidebarProvider>
      <AppSidebar tree={tree} activeSlug={activeSlug} />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between gap-4 border-b bg-background/85 px-4 backdrop-blur-sm">
          <div className="flex min-w-0 items-center gap-2">
            <SidebarTrigger className="-ml-1 sm:hidden" />
            <Breadcrumb className="min-w-0">
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="shrink-0">
                    Content
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {segments.map((segment, index) => {
                  const isLast = index === segments.length - 1
                  const label =
                    isLast && summary ? summary.title : humanizeSegment(segment)
                  return (
                    <React.Fragment key={`${segment}-${index}`}>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem className="min-w-0">
                        {isLast ? (
                          <BreadcrumbPage className="truncate">
                            {label}
                          </BreadcrumbPage>
                        ) : (
                          <span className="truncate">{label}</span>
                        )}
                      </BreadcrumbItem>
                    </React.Fragment>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <CommandMenu tree={tree} />
        </header>
        <div className="flex justify-center px-6 py-10">
          <div className="w-full max-w-3xl">{children}</div>
        </div>
      </SidebarInset>
      {summary && <SummarySidebar {...summary} />}
    </SidebarProvider>
  )
}
