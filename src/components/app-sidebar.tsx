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
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@/components/ui/sidebar"
import { FileIcon, ChevronRightIcon, FolderIcon } from "lucide-react"
import { humanizeSegment, type ContentTreeNode } from "@/lib/content-tree-utils"

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
        <SidebarHeader className="border-b border-sidebar-border">
          <CommandMenu tree={tree} />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Content</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {tree.map((node) => (
                  <Tree
                    key={node.type === "folder" ? node.path : node.slug}
                    node={node}
                    activeSlug={activeSlug}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </div>
  )
}

function Tree({
  node,
  activeSlug,
}: {
  node: ContentTreeNode
  activeSlug?: string
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

  const containsActive = activeSlug?.startsWith(`${node.path}/`)

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
        <CollapsibleContent>
          <SidebarMenuSub>
            {node.children.map((child) => (
              <Tree
                key={child.type === "folder" ? child.path : child.slug}
                node={child}
                activeSlug={activeSlug}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
