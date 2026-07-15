"use client"

import * as React from "react"

import { CommandMenu } from "@/components/command-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  ChevronRightIcon,
  ExternalLinkIcon,
  FileIcon,
  FolderIcon,
  Layers,
  Moon,
  Sun,
} from "lucide-react"
import { humanizeSegment, type ContentTreeNode } from "@/lib/content-tree-utils"

const GITHUB_URL =
  "https://github.com/awesome-comparisons/awesome-comparisons.github.io"

function countFiles(node: ContentTreeNode): number {
  if (node.type === "file") return 1
  return node.children.reduce((sum, child) => sum + countFiles(child), 0)
}

export function AppSidebar({
  tree,
  activeSlug,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  tree: ContentTreeNode[]
  activeSlug?: string
}) {
  return (
    <div style={{ "--sidebar-width": "20rem" } as React.CSSProperties}>
      <Sidebar {...props}>
        <SidebarHeader className="gap-3 border-b border-sidebar-border">
          <a href="/" className="flex items-center gap-2 px-1 py-1">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
              <Layers className="size-4" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-sm font-semibold text-sidebar-foreground">
                Awesome Comparisons
              </span>
              <span className="truncate text-xs text-sidebar-foreground/60">
                Tool &amp; framework guides
              </span>
            </span>
          </a>
          <CommandMenu tree={tree} />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Browse</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {tree.map((node) => (
                  <Tree
                    key={node.type === "folder" ? node.path : node.slug}
                    node={node}
                    activeSlug={activeSlug}
                    depth={0}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="gap-1 border-t border-sidebar-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <ThemeToggle />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                render={
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer" />
                }
              >
                <ExternalLinkIcon />
                <span>View on GitHub</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </div>
  )
}

function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  )

  return (
    <SidebarMenuButton
      onClick={() => {
        const next = !document.documentElement.classList.contains("dark")
        document.documentElement.classList.toggle("dark", next)
        setIsDark(next)
      }}
    >
      {isDark ? <Sun /> : <Moon />}
      <span>{isDark ? "Light mode" : "Dark mode"}</span>
    </SidebarMenuButton>
  )
}

function Tree({
  node,
  activeSlug,
  depth,
}: {
  node: ContentTreeNode
  activeSlug?: string
  depth: number
}) {
  if (node.type === "file") {
    const isActive = node.slug === activeSlug
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={isActive}
          render={<a href={`/content/${node.slug}`} />}
        >
          <FileIcon />
          <span className="min-w-0 truncate">{node.title}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  const isTopLevel = depth === 0
  const containsActive = Boolean(activeSlug?.startsWith(`${node.path}/`))

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={containsActive}
      >
        <SidebarMenuButton render={<CollapsibleTrigger />}>
          <ChevronRightIcon className="transition-transform" />
          <FolderIcon />
          <span className="min-w-0 truncate">{humanizeSegment(node.name)}</span>
        </SidebarMenuButton>
        {isTopLevel && (
          <SidebarMenuBadge className="text-sidebar-foreground/50">
            {countFiles(node)}
          </SidebarMenuBadge>
        )}
        <CollapsibleContent>
          <SidebarMenuSub>
            {node.children.map((child) => (
              <Tree
                key={child.type === "folder" ? child.path : child.slug}
                node={child}
                activeSlug={activeSlug}
                depth={depth + 1}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
