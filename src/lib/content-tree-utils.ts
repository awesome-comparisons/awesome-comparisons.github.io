export type ContentTreeNode =
  | { type: "folder"; name: string; path: string; children: ContentTreeNode[] }
  | { type: "file"; name: string; slug: string; title: string }

export type FlatDoc = { slug: string; title: string; group: string }

const ACRONYMS = new Set(["api", "cli", "faq", "css", "ui", "sql", "url"])

export function humanizeSegment(segment: string): string {
  return segment
    .split(/[-_]/)
    .map((word) =>
      ACRONYMS.has(word.toLowerCase())
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ")
}

export function flattenContentTree(
  nodes: ContentTreeNode[],
  parents: string[] = []
): FlatDoc[] {
  return nodes.flatMap((node) => {
    if (node.type === "file") {
      return [
        {
          slug: node.slug,
          title: node.title,
          group: parents.join(" / ") || "Content",
        },
      ]
    }

    return flattenContentTree(node.children, [
      ...parents,
      humanizeSegment(node.name),
    ])
  })
}
