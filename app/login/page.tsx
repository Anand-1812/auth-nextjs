"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      // Make sure this path matches your folder structure exactly!
      await axios.post("/api/users/login", user);

      toast.success("Login Successful");
      router.push("/profile");

    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error?.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-2xl bg-card border border-border p-6 shadow-sm">

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">Login</h1>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
            <input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="bg-input text-foreground border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-muted-foreground">Password</label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="bg-input text-foreground border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-col gap-3 justify-center pt-2">
            <button
              onClick={onLogin}
              disabled={loading || !user.email || !user.password}
              className="cursor-pointer px-4 bg-primary text-primary-foreground rounded-lg py-2.5 text-sm font-medium transition hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Login"}
            </button>
            <Link href="/signup" className="text-center text-sm text-muted-foreground">
              Don't have account? <span className="text-blue-400 hover:text-blue-600 transition">Signup</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
