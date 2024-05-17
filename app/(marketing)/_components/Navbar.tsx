'use client'

import { Logo } from '@/components/Logo'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'
import { useConvexAuth } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/Spinner'
import Link from 'next/link'

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const scrolled = useScrollTop()
  return (
    <div
      className={cn(
        ' fixed top-0 z-50 flex  w-full items-center  bg-background p-6 dark:bg-[#1F1F1F]',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="flex w-full  items-center justify-between gap-8 md:ml-auto md:justify-end ">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Jotion Free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link className="text-primary" href="/documents">
                Enter Jotion
              </Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ThemeToggle />
      </div>
    </div>
  )
}
