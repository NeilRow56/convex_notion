'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const Heading = () => {
  return (
    <div className="mt-2 max-w-3xl space-y-4 md:px-3">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your Ideas, Documents & Plans, unified. Welcome to{' '}
        <span className="undeline">Jotion</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:pb-10  md:text-2xl">
        Jotion is the connected workspace where <br />
        better, faster work happens
      </h3>
      <Button className="bg-primary">
        Enter Jotion <ArrowRight className="ml-2 h-4 w-4 text-white" />
      </Button>
    </div>
  )
}
