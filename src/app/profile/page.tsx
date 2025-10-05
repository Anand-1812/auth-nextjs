"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {

  const router = useRouter();
  const [data, setData] = useState("");

  const logout = async () => {
    try {
      axios.get("/api/users/logout");
      toast.success("Logout successful");

      router.push("/login");

    } catch (error : any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  const getUserDetail = async () => {
    const res = await axios.get('api/users/user');
    console.log(res.data);
    setData(res.data.data._id);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <br/>
      <h2>{ data === "" ? "no data found" : <Link href={`/profile/${data}`}>{data}</Link> }</h2>

      <button
        onClick={logout}
        className="text-2xl bg-green-400 text-black p-2 m-4 rounded-lg"
      >
        logout
      </button>
      <button
        onClick={getUserDetail}
        className="text-2xl bg-green-400 text-black p-2 m-4 rounded-lg"
      >
        Get User Detail
      </button>
    </div>
  );
}
