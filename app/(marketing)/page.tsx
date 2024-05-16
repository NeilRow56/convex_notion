import { Footer } from './_components/Footer'
import { Heading } from './_components/Heading'
import { Heros } from './_components/Heros'

export default function MarketingPage() {
  return (
    <main className="flex min-h-full flex-col bg-background">
      <div className="flex flex-1 flex-col items-center justify-center gap-y-8 px-6   text-center md:justify-start">
        <Heading />
        <Heros />
      </div>
      <Footer />
    </main>
  )
}
