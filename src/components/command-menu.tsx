import * as React from "react"
import { FileIcon, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  flattenContentTree,
  type ContentTreeNode,
  type FlatDoc,
} from "@/lib/content-tree-utils"

export function CommandMenu({ tree }: { tree: ContentTreeNode[] }) {
  const [open, setOpen] = React.useState(false)
  const docs = React.useMemo(() => flattenContentTree(tree), [tree])

  const groups = React.useMemo(() => {
    const map = new Map<string, FlatDoc[]>()
    for (const doc of docs) {
      const list = map.get(doc.group) ?? []
      list.push(doc)
      map.set(doc.group, list)
    }
    return map
  }, [docs])

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="w-9 justify-center gap-2 px-0 font-normal text-muted-foreground sm:w-56 sm:justify-between sm:px-3"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center gap-2">
          <SearchIcon className="size-4 sm:hidden" />
          <span className="hidden sm:inline">Search documents…</span>
        </span>
        <KbdGroup className="hidden sm:flex">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Jump to document"
        description="Search documents by title"
      >
        <CommandInput placeholder="Search documents..." />
        <CommandList>
          <CommandEmpty>No documents found.</CommandEmpty>
          {Array.from(groups.entries()).map(([group, items]) => (
            <CommandGroup key={group} heading={group}>
              {items.map((doc) => (
                <CommandItem
                  key={doc.slug}
                  value={`${doc.title} ${doc.group}`}
                  onSelect={() => {
                    setOpen(false)
                    window.location.href = `/content/${doc.slug}`
                  }}
                >
                  <FileIcon />
                  {doc.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
