'use client'

import Image from 'next/image'
import { useUser } from '@clerk/clerk-react'
import { PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const DocumentPage = () => {
  const router = useRouter()
  const { user } = useUser()
  const create = useMutation(api.documents.create)

  const onCreate = () => {
    const promise = create({ title: 'Untitled' }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    )

    toast.promise(promise, {
      loading: 'Creating a new note...',
      success: 'New note created!',
      error: 'Failed to create a new note',
    })
  }

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src="/docs1.svg"
        height="300"
        width="300"
        priority
        alt="Document"
        style={{ height: 'auto' }}
      />
      <h2 className="text-lg font-medium text-primary">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>

      <Button onClick={onCreate}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create a note
      </Button>
    </div>
  )
}

export default DocumentPage
