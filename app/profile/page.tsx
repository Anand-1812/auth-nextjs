"use client"

import axios from "axios"
import { toast } from "sonner"
import { LogOutIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const Profile = () => {
  const router = useRouter();

  const logout = async () => {
    try {

      await axios.get("/api/users/logout")
      toast.success("logout successful");
      router.push("/login");

    } catch (error: any) {
      toast.error(
        error?.response?.data?.error || "logout failed"
      );
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center gap-4 p-3 rounded-xl">
      <h1 className="text-3xl text-indigo-600">Profile Page :)</h1>

      <button
        onClick={logout}
        className="bg-red-500 p-4 rounded-xl cursor-pointer">
        <LogOutIcon className="w-5 h-5" />
      </button>
    </div>
  )
}

export default Profile
