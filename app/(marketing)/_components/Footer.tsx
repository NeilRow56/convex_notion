import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'

export const Footer = () => {
  return (
    <div className="flex w-full items-center bg-background p-6">
      <Logo />
      <div className="gap-=x-2 flex w-full items-center justify-between text-muted-foreground md:ml-auto md:justify-end">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  )
}
