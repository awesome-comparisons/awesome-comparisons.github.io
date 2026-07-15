import * as React from "react"

import { cn } from "@/lib/utils"
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

function headingDepthOf(element: Element): number | null {
  const match = /^H([1-6])$/.exec(element.tagName)
  return match ? Number(match[1]) : null
}

export function SummarySidebar({
  headings,
  wordCount,
  readingTime,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
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
  const [checked, setChecked] = React.useState<Record<string, boolean>>(() =>
    Object.fromEntries(toc.map((heading) => [heading.slug, true]))
  )
  const selectAllRef = React.useRef<HTMLInputElement>(null)

  const checkedCount = toc.filter((heading) => checked[heading.slug]).length
  const allChecked = toc.length > 0 && checkedCount === toc.length
  const someChecked = checkedCount > 0 && checkedCount < toc.length

  React.useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = someChecked
    }
  }, [someChecked])

  function toggleAll(value: boolean) {
    setChecked(Object.fromEntries(toc.map((heading) => [heading.slug, value])))
  }

  function toggleOne(slug: string, value: boolean) {
    setChecked((prev) => ({ ...prev, [slug]: value }))
  }

  React.useEffect(() => {
    for (const heading of toc) {
      const headingElement = document.getElementById(heading.slug)
      if (!headingElement) continue

      const visible = checked[heading.slug] ?? true
      headingElement.style.display = visible ? "" : "none"

      let sibling = headingElement.nextElementSibling
      while (sibling) {
        const siblingDepth = headingDepthOf(sibling)
        if (siblingDepth !== null && siblingDepth <= heading.depth) break
        ;(sibling as HTMLElement).style.display = visible ? "" : "none"
        sibling = sibling.nextElementSibling
      }
    }
  }, [checked, toc])

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
      <SidebarHeader className="justify-center border-b border-sidebar-border px-4 py-4">
        <p className="truncate text-sm font-medium">Summary</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="justify-between">
            <span>On this page</span>
            {toc.length > 0 && (
              <label className="flex cursor-pointer items-center gap-1.5 font-normal normal-case">
                <input
                  ref={selectAllRef}
                  type="checkbox"
                  checked={allChecked}
                  onChange={(event) => toggleAll(event.target.checked)}
                  className="size-3.5 accent-primary"
                />
                All
              </label>
            )}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {toc.length ? (
              <SidebarMenu>
                {toc.map((heading) => (
                  <SidebarMenuItem
                    key={heading.slug}
                    className={cn(
                      "flex items-center gap-1.5",
                      HEADING_INDENT[heading.depth]
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={checked[heading.slug] ?? true}
                      onChange={(event) =>
                        toggleOne(heading.slug, event.target.checked)
                      }
                      className="size-3.5 shrink-0 accent-primary"
                    />
                    <SidebarMenuButton
                      isActive={heading.slug === activeSlug}
                      render={<a href={`#${heading.slug}`} />}
                      className="min-w-0"
                    >
                      <span className="truncate">{heading.text}</span>
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
