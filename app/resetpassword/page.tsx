"use client"

const ForgotPassword = () => {

  const password: string = "";

  const resetPass = async () => {

  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-foreground">
            Reset password
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your new password.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div className="flex flex-col gap-2 text-left">
            <label
              htmlFor="email"
              className="text-sm font-medium text-muted-foreground"
            >
              password
            </label>
            <input
              id="email"
              type="email"
              value={password}
              onChange={(e) => { password: e.target.value }}
              placeholder="you@example.com"
              className="rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground
              focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <button
            onClick={resetPass}
            className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium
            text-primary-foreground transition hover:opacity-90
            focus:outline-none focus:ring-2 focus:ring-ring"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

