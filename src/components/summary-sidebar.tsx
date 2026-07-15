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
  const toc = React.useMemo(
    () =>
      headings.filter((heading) => heading.depth >= 2 && heading.depth <= 4),
    [headings]
  )
  const [activeSlug, setActiveSlug] = React.useState<string | null>(null)

  React.useEffect(() => {
    const elements = toc
      .map((heading) => document.getElementById(heading.slug))
      .filter((element): element is HTMLElement => element !== null)

    if (!elements.length) return

    const HEADER_OFFSET = 96

    function onScroll() {
      let current = elements[0].id
      for (const element of elements) {
        if (element.getBoundingClientRect().top - HEADER_OFFSET <= 0) {
          current = element.id
        }
      }
      setActiveSlug(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [toc])

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
          <p className="line-clamp-2 text-xs text-muted-foreground">
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
                      isActive={heading.slug === activeSlug}
                      render={<a href={`#${heading.slug}`} />}
                      className={HEADING_INDENT[heading.depth]}
                    >
                      {heading.text}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            ) : (
              <p className="px-2 text-xs text-muted-foreground">
                No sections on this page.
              </p>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator className="mx-0" />
      <SidebarFooter>
        <div className="flex items-center justify-between px-2 text-xs text-muted-foreground">
          <span>{wordCount} words</span>
          <span>{readingTime} min read</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
