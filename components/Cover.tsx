'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'
import { ImageIcon, X } from 'lucide-react'
import { useCoverImage } from '@/hooks/use-cove-image'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useParams } from 'next/navigation'
import { Id } from '@/convex/_generated/dataModel'

interface CoverProps {
  url?: string
  preview?: boolean
}

export const Cover = ({ url, preview }: CoverProps) => {
  const params = useParams()
  const coverImage = useCoverImage()
  const removeCoverImage = useMutation(api.documents.removeCoverImage)

  const onRemove = () => {
    removeCoverImage({
      id: params.documentId as Id<'documents'>,
    })
  }

  return (
    <div
      className={cn(
        ' group relative h-[35vh] w-full',
        !url && 'h-[12vh]',
        url && 'bg-muted'
      )}
    >
      {!!url && (
        <Image src={url} fill alt="Cover image" className="object-cover" />
      )}
      {url && !preview && (
        <div className="absolute bottom-5 right-5 items-center space-x-4 opacity-0 group-hover:opacity-100">
          <Button
            className="text-xs text-muted-foreground"
            variant="outline"
            size="sm"
            onClick={coverImage.onOpen}
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Change cover image
          </Button>
          <Button
            className="text-xs text-muted-foreground"
            variant="outline"
            size="sm"
            onClick={onRemove}
          >
            <X className="mr-2 h-4 w-4" />
            Remove cover image
          </Button>
        </div>
      )}
    </div>
  )
}
