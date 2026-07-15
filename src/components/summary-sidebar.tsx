import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

export type Heading = { depth: number; slug: string; text: string }

const HEADING_INDENT: Record<number, string> = {
  2: "",
  3: "pl-4",
  4: "pl-8",
}

export function SummarySidebar({
  title,
  description,
  headings,
  wordCount,
  readingTime,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  title: string
  description?: string
  headings: Heading[]
  wordCount: number
  readingTime: number
}) {
  const toc = headings.filter((heading) => heading.depth >= 2 && heading.depth <= 4)

  return (
    <Sidebar
      side="right"
      collapsible="none"
      className="sticky top-0 hidden h-svh border-l lg:flex"
      {...props}
    >
      <SidebarHeader className="justify-center gap-1 border-b border-sidebar-border px-4 py-4">
        <p className="truncate text-sm font-medium">{title}</p>
        {description && (
          <p className="text-muted-foreground line-clamp-2 text-xs">
            {description}
          </p>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>On this page</SidebarGroupLabel>
          <SidebarGroupContent>
            {toc.length ? (
              <SidebarMenu>
                {toc.map((heading) => (
                  <SidebarMenuItem key={heading.slug}>
                    <SidebarMenuButton
                      render={<a href={`#${heading.slug}`} />}
                      className={HEADING_INDENT[heading.depth]}
                    >
                      {heading.text}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            ) : (
              <p className="text-muted-foreground px-2 text-xs">
                No sections on this page.
              </p>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator className="mx-0" />
      <SidebarFooter>
        <div className="text-muted-foreground flex items-center justify-between px-2 text-xs">
          <span>{wordCount} words</span>
          <span>{readingTime} min read</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
