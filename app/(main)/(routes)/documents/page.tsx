'use client'

import Image from 'next/image'
import { useUser } from '@clerk/clerk-react'
import { PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const DocumentPage = () => {
  const { user } = useUser()

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image src="/docs1.svg" height="300" width="300" alt="Document" />
      <h2 className="text-lg font-medium text-primary">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create a note
      </Button>
    </div>
  )
}

export default DocumentPage
