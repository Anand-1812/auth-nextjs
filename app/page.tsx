import { ModeToggle } from "@/components/mode-toggle"

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background">

      {/* Header */}
      <header className="w-full max-w-5xl px-6 py-4 mt-4 rounded-xl border shadow-sm flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-indigo-500">
          Auth App
        </h1>
        <ModeToggle />
      </header>

      {/* Main content */}
      <main className="flex flex-1 w-full items-center justify-center px-4">
        <div className="w-full max-w-md space-y-3 text-center">
          <h2 className="text-2xl font-medium">Login</h2>

          <p className="text-sm text-muted-foreground">
            Sign in to continue to your account.
          </p>
        </div>
      </main>

    </div>
  )
}

export default Page

