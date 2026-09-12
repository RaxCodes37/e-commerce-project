"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute left-4 md:left-[5.8%] rounded-md bg-[#e7e7e7] hover:bg-[#bcb7b7] duration-400 p-2 animate-fade-right animate-ease-in-out animate-duration-800"
    >
      <FaArrowLeft />
    </button>
  );
}
