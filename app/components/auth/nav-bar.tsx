import Link from "next/link";

export default function AuthNavbar() {
  return (
    <div className="flex justify-center">
      <nav className="border-2 border-[#ddd] rounded-b-md flex gap-20 px-10 pt-5 pb-6 auth-navbar">
        <Link href="/sign-in" className="hover:underline font-semibold">Sign-in</Link>
        <Link href="/sign-up" className="hover:underline font-semibold">Sign-up</Link>
      </nav>
    </div>
  )
}
