"use client"
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";



export function Appbar() {
    const session = useSession();
    return <div className="flex justify-between px-20">
      <div className="text-lg font-bold flex flex-col justify-center text-purple-600 ">
         Muzer
      </div>
      <div>
       <button className=" m-2 p-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700"> Signin with email</button>
      </div>
      <div>
        {session.data?.user && <Button className="m-2 p-2 bg-purple-00 rounded-xl " onClick={() => signOut()}>Logout</Button>}
        {!session.data?.user && <button className="m-2 p-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700" onClick={() => signIn()}>Signin with google</button>}
      </div>

    </div>
}