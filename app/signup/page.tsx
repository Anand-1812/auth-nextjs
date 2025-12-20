"use client";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = () => { };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-2xl bg-card border border-border p-6 shadow-sm">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            Signup
          </h1>
        </div>

        {/* Fields */}
        <div className="space-y-4">

          {/* Username */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-sm font-medium text-muted-foreground"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={user.username}
              onChange={(e) =>
                setUser({ ...user, username: e.target.value })
              }
              className="bg-input text-foreground border border-border rounded-lg
              px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-muted-foreground"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
              className="bg-input text-foreground border border-border rounded-lg
              px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-muted-foreground"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              className="bg-input text-foreground border border-border rounded-lg
              px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Button */}
          <div className="flex flex-col gap-3 justify-center">
            <button
              onClick={onSignup}
              className="cursor-pointer px-4 bg-primary text-primary-foreground rounded-lg
            py-2.5 text-sm font-medium transition hover:opacity-90 active:scale-[0.98]"
            >
              Sign up
            </button>
            <Link href="/login" className="text-center text-blue-500 hover:text-blue-600">Visit login page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

