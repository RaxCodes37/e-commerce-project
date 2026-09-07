"use client";

import { useRouter } from "next/navigation";
import { HiUserCircle } from "react-icons/hi";
import { IoCart } from "react-icons/io5";

export default function UserStuff() {
  const router = useRouter();

  return (
    <div className="absolute left-[80%] sm:left-[85%] xl:left-[90%] mt-2.5 rounded-md bg-[#e7e7e7]">
      <button className="duration-400 hover:bg-[#8d8d8d] rounded-l-md p-2 text-2xl">
        <IoCart />
      </button>
      <button className="duration-400 hover:bg-[#8d8d8d] rounded-r-md p-2 text-2xl" onClick={() => router.push("/user-settings")}>
        <HiUserCircle />
      </button>
    </div>
  );
}
