import { getCollection } from "astro:content"

import type { ContentTreeNode } from "@/lib/content-tree-utils"

export type { ContentTreeNode, FlatDoc } from "@/lib/content-tree-utils"
export { flattenContentTree, humanizeSegment } from "@/lib/content-tree-utils"

export async function getContentTree(): Promise<ContentTreeNode[]> {
  const entries = await getCollection("docs")
  const root: ContentTreeNode[] = []

  for (const entry of entries) {
    const segments = entry.id.split("/")
    let level = root
    let pathSoFar = ""

    segments.forEach((segment, index) => {
      const isFile = index === segments.length - 1
      pathSoFar = pathSoFar ? `${pathSoFar}/${segment}` : segment

      if (isFile) {
        level.push({
          type: "file",
          name: segment,
          slug: entry.id,
          title: entry.data.title,
        })
        return
      }

      let folder = level.find(
        (node): node is Extract<ContentTreeNode, { type: "folder" }> =>
          node.type === "folder" && node.name === segment
      )
      if (!folder) {
        folder = {
          type: "folder",
          name: segment,
          path: pathSoFar,
          children: [],
        }
        level.push(folder)
      }
      level = folder.children
    })
  }

  return sortTree(root)
}

function sortTree(nodes: ContentTreeNode[]): ContentTreeNode[] {
  const folders = nodes.filter((node) => node.type === "folder")
  const files = nodes.filter((node) => node.type === "file")

  for (const folder of folders) {
    folder.children = sortTree(folder.children)
  }

  return [
    ...folders.sort((a, b) => a.name.localeCompare(b.name)),
    ...files.sort((a, b) => a.name.localeCompare(b.name)),
  ]
}
