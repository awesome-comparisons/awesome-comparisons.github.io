"use client"

import * as React from "react"

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
    <Sidebar {...props}>
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
          {node.title}
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
          {humanizeSegment(node.name)}
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
