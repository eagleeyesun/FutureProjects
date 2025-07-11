"use client"
import Image from "next/image"

import { signIn } from "next-auth/react"


function LoginPage() {
     const handleSignIn = () => {
      signIn("google", { callbackUrl: "/" })
     }
  
    return (
        <section className="h-screen w-screen flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center">
                <Image src='/Logo.svg' height={92} width={92} alt="logo" />
                <h2 className="font-bold text-2xl mt-5">Log in</h2>
            </div>
            <div className="bg-[#F7F7F8] rounded-2xl ">
                <button onClick={handleSignIn} className="flex gap-2 py-3 px-6 cursor-pointer ">
                <Image src='/google.svg' width={18} height={18} alt="Google logo" /> Google
            </button>
            </div>
            <form className="py-10 flex flex-col gap-3 w-1/3">
                <p className="text-xl">Email</p>
                <input className="bg-[#F7F7F8] rounded-xl px-3 py-2" type="email" />

                <p className="text-xl">Password</p>
                <input className="bg-[#F7F7F8] rounded-xl py-2 px-3" type="password" />
                <div className="bg-[#605BFF] rounded-xl mt-5">
                    <button type="submit" className="py-2 w-full text-white">Login</button>
                </div>
            </form>
            <p>Dont have account yet?</p>
        </section>
    )
}


export default LoginPage