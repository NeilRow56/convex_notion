'use client'

import * as React from 'react'
import {
  Calculator,
  Calendar,
  CreditCard,
  File,
  Settings,
  Smile,
  User,
} from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { useRouter } from 'next/navigation'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

export function Search2() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const documents = useQuery(api.documents.getSearch)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const onSelect = (id: string) => {
    router.push(`/documents/${id}`)
    setOpen(false)
  }

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Search{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documents">
            {documents?.map((document) => (
              <CommandItem
                key={document._id}
                value={`${document._id}-${document.title}`}
                title={document.title}
                onSelect={onSelect}
              >
                {document.icon ? (
                  <p className="mr-2 text-[18px]">{document.icon}</p>
                ) : (
                  <File className="mr-2 h-4 w-4" />
                )}
                <span>{document.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
