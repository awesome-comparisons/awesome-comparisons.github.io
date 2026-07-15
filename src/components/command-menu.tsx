import * as React from "react"
import { FileIcon, SearchIcon } from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
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
      <InputGroup className="cursor-pointer" onClick={() => setOpen(true)}>
        <InputGroupInput
          placeholder="Search documents..."
          readOnly
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault()
              setOpen(true)
            }
          }}
          className="cursor-pointer"
        />
        <InputGroupAddon>
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Jump to document"
        description="Search documents by title"
      >
        <Command>
          <CommandInput placeholder="Search documents..." />
          <CommandList>
            <CommandEmpty>No documents found.</CommandEmpty>
            {Array.from(groups.entries()).map(([group, items], index) => (
              <React.Fragment key={group}>
                {index > 0 && <CommandSeparator />}
                <CommandGroup heading={group}>
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
              </React.Fragment>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
