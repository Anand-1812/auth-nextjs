"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignup = async () => {
    // TODO: add axios call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 transform transition-all hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create an Account
        </h1>
        <p className="text-center text-gray-500">Join us and get started 🚀</p>

        <div className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              className="w-full p-3 text-base text-black border rounded-lg border-gray-300
               focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              type="text"
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Enter your username"
            />
          </div>

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
            onClick={onSignup}
            className="w-full py-3 text-white text-lg font-semibold rounded-lg bg-green-600 hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-600 font-semibold hover:underline hover:text-green-700"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
