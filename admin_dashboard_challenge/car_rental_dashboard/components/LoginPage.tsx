"use client"

import Image from "next/image"
import { signIn } from "@/utils/auth"


function LoginPage() {
    return (
        <section className="h-screen w-screen flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center">
                <Image src='/Logo.svg' height={92} width={92} alt="logo" />
                <h2 className="font-bold text-2xl mt-5">Log in</h2>
            </div>
            <form action={async () => {
                "use server"
                await signIn("google")
            }} className="py-10 flex flex-col gap-3 w-1/3">
                <p className="text-xl">Email</p>
                <input className="bg-[#F7F7F8] rounded-xl px-3 py-2" type="email" />

                <p className="text-xl">Password</p>
                <input className="bg-[#F7F7F8] rounded-xl py-2 px-3" type="password" />
                <div className="bg-[#605BFF] rounded-xl mt-5">
                    <button type="submit"  className="py-2 w-full text-white">Login</button>
                </div>
            </form>
            <p>Dont have account yet? <em className="text-blue-500 ">Sign Up</em></p>
        </section>
    )
}

export default LoginPage