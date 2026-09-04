import { signUpAction } from "../api/auth";
import AuthNavbar from "../components/auth/nav-bar";
import SignInButton from "../components/auth/sign-in-button";

export default function SignUpPage() {
  return (
    <div>
      <AuthNavbar/>

      <div className="flex justify-center">
        <form action={signUpAction} id="auth-form" className="flex flex-col text-center mt-25">
          <h1 className="text-2xl font-bold">Sign Up</h1>

          <input type="text" name="name" required className="border-2 border-[#ddd] mt-2 rounded-md px-1" placeholder="Name"/>
          <input type="text" name="email" required className="border-2 border-[#ddd] mt-2 rounded-md px-1" placeholder="Email"/>
          <input type="password" name="password" required className="border-2 border-[#ddd] mt-2 rounded-md px-1" placeholder="Password"/>

          <button type="submit" className="mt-3 border-2 border-[#ddd] bg-[#e7e7e7] duration-400 hover:bg-white rounded-md w-full">
            Sign Up
          </button>

          <hr className="my-3 text-[#ddd]"/>
          
          <SignInButton/>
        </form>
      </div>
    </div>
  );
}
