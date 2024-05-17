import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const Logo = () => {
  return (
    <div className="hidden items-center gap-2 md:flex">
      <Image src="logo2.svg" alt="logo" height="40" width="40" />
      <p className={cn('text-2xl font-semibold', font.className)}>Jotion</p>
    </div>
  )
}
