"use client";

import { signOutAction } from "@/app/api/auth";

export default function SignOutButton() {
  const SignOut = async () => await signOutAction();

  return (
    <button
      onClick={SignOut}
      className="border-2 text-white font-semibold border-[#ff5f5f] bg-[#fd9191] duration-400 hover:bg-[#cf6a6a] rounded-md px-2 mt-5"
    >
      Sign-Out
    </button>
  );
}
