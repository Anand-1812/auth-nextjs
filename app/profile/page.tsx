"use client"

import axios from "axios"
import { toast } from "sonner"
import Link from "next/link"
import { LogOutIcon, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("No Data");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout")
      toast.success("logout successful");
      router.push("/login");
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "logout failed");
    }
  }

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/getUserData")

      console.log(res.data);
      setData(res.data.data._id)

    } catch (error: any) {
      console.error("Failed to fetch user data", error);
      toast.error("Failed to load user data");
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 p-3 rounded-xl">
      <h1 className="text-3xl text-indigo-600">Profile Page :)</h1>

      <h2>
        {data === "No Data" ? "No user" : (
          <Link href={`/profile/${data}`} className="text-blue-500 underline">
            {data}
          </Link>
        )}
      </h2>

      <button
        onClick={getUserDetails}
        className="bg-blue-500 p-4 rounded-xl cursor-pointer text-white hover:bg-blue-600 transition">
        <User className="w-5 h-5" />
      </button>

      <button
        onClick={logout}
        className="bg-red-500 p-4 rounded-xl cursor-pointer text-white hover:bg-red-600 transition">
        <LogOutIcon className="w-5 h-5" />
      </button>
    </div>
  )
}

export default Profile
