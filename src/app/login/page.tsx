"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    // TODO: add axios call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 transform transition-all hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Login
        </h1>

        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              className="w-full p-3 text-base border text-black rounded-lg border-gray-300
               focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              className="w-full p-3 text-base border text-black rounded-lg border-gray-300
               focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="••••••••"
            />
          </div>

          <button
            onClick={onLogin}
            className="w-full py-3 text-white text-lg font-semibold rounded-lg bg-green-600 hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
          >
            login
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          create an account?{" "}
          <Link
            href="/signup"
            className="text-green-600 font-semibold hover:underline hover:text-green-700"
          >
            signup
          </Link>
        </p>
      </div>
    </div>
  );
}

