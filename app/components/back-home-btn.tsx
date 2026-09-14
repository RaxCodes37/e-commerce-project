"use client"

import { redirect } from "next/navigation";

export default function BackHomeBtn() {
  return (
    <button className="hover:underline" onClick={() => redirect("/home")}>
      Go Back Home
    </button>
  );
}
