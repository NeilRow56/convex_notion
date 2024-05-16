import { Navbar } from './_components/Navbar'

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full  bg-background">
      <Navbar />
      <main className=" h-full bg-background pt-20">{children}</main>
    </div>
  )
}

export default MarketingLayout
