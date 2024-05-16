const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="h-full bg-slate-100 ">{children}</main>
    </>
  )
}

export default AuthLayout
