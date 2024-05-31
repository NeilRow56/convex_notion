'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../components/ui/button'

const Error = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-x-4">
      <Image src="/error.jpg" alt="Error" height={300} width={300} />
      <h2 className="text-xl font-medium text-red-500">
        Something went wrong!
      </h2>
      <Button asChild>
        <Link href="/documents">Go Back</Link>
      </Button>
    </div>
  )
}

export default Error
