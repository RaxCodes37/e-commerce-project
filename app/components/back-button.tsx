"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute left-4 md:left-[5.8%] mt-2.5 rounded-md bg-[#e7e7e7] p-2"
    >
      <FaArrowLeft />
    </button>
  );
}
