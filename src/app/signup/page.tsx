"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function SignUpPage() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  })

  const onSignup = async () => {}

  return(
    <div className="min-h-screen flex flex-col justify-center items-center py-2">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input className="p-2 text-3xl border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-blue-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input className="p-2 text-3xl border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-blue-600"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input className="p-2 text-3xl border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-blue-600"
        type="text"
        id="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="password"
      />
      <button
        onClick={onSignup}
        className="p-2 text-2xl border border-green-300 rounded-lg cursor-pointer
      hover:scale-105 transition-all"
      >Signup</button>

      <Link href="/login"
        className="mt-3 underline text-lg hover:text-blue-300 transition-all ease-in"
      >or login</Link>
    </div>
  );
}
