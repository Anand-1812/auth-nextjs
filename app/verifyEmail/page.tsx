"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

const VerifyEmailPage = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post('/api/users/verifyemail', { token })
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken ? decodeURIComponent(urlToken) : "");
  }, [])
  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background">
      <div className="p-8 rounded-xl shadow-md border border-border bg-card max-w-md w-full text-center">

        <h1 className="text-4xl mb-4 font-bold">Verify Email</h1>

        {!token && (
          <h2 className="p-2 bg-yellow-500/10 text-yellow-500 rounded">
            No token found
          </h2>
        )}

        {verified && (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-green-500 font-semibold">Email Verified!</h2>
            <Link href="/login" className="text-blue-500 hover:underline">
              Go to Login
            </Link>
          </div>
        )}

        {/* State: Error Occurred */}
        {error && (
          <div>
            <h2 className="text-2xl bg-red-500 text-white p-2 rounded mb-4">Error</h2>
            <p className="text-muted-foreground">The token may be invalid or expired.</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default VerifyEmailPage
