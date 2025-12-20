"use client";

import axios from "axios";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [loading, setLoading] = useState(false);

  const isDisabled =
    !user.email || !user.password || !user.username || loading;

  const onSignup = async () => {
    if (isDisabled) return;

    try {
      setLoading(true);
      await axios.post("/api/users/signup", user);
      toast.success("Signup successful");
      router.push("/login");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error || "Signup failed"
      );
      setTimeout(() => {
        setLoading(false)
      }, 100)
    } finally {
      setLoading(false);
    }
  };

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
              className="bg-input text-foreground border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
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
              className="bg-input text-foreground border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
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
              className="bg-input text-foreground border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={onSignup}
              disabled={isDisabled}
              className={`
                rounded-lg py-2.5 text-sm font-medium transition
                ${isDisabled
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98]"
                }
              `}
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>

            <Link
              href="/login"
              className="text-center text-sm text-muted-foreground hover:text-foreground transition"
            >
              Already have an account?{" "}
              <span className="text-primary font-medium">Login</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;

