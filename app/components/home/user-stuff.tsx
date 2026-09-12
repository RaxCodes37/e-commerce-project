"use client";

import { useRouter } from "next/navigation";
import { HiUserCircle } from "react-icons/hi";
import { IoCart } from "react-icons/io5";

export default function UserStuff() {
  const router = useRouter();

  return (
    <div className="absolute left-4 top-12 flex flex-col animate-fade-right animate-ease-in-out animate-duration-800 sm:animate-fade-left sm:left-[85%]  sm:flex-row sm:text-2xl sm:top-3 xl:left-[90%] rounded-md bg-[#e7e7e7]">
      <button
        className="duration-400 hover:bg-[#bcb7b7] rounded-t-md sm:rounded-l-md sm:rounded-t-none p-1.5 text-xl flex justify-center"
        onClick={() => router.push("/cart")}
      >
        <IoCart />
      </button>
      <button
        className="duration-400 hover:bg-[#bcb7b7] rounded-b-md sm:rounded-r-md sm:rounded-b-none p-1.5 px-1.5 text-xl flex justify-center"
        onClick={() => router.push("/user-settings")}
      >
        <HiUserCircle />
      </button>
    </div>
  );
}
