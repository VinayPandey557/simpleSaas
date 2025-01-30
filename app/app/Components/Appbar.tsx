"use client"
import { signIn, signOut, useSession } from "next-auth/react";



export function Appbar() {
    const session = useSession();
    return <div className="flex justify-between">
      <div>
         Muzer
      </div>
      <div>
       <button className="m-2 p-2 bg-blue-400 rounded-xl"> Signin with email</button>
      </div>
      <div>
        {session.data?.user && <button className="m-2 p-2 bg-blue-400 rounded-xl" onClick={() => signOut()}>Logout</button>}
        {!session.data?.user && <button className="m-2 p-2 bg-blue-400 rounded-xl" onClick={() => signIn()}>Signin with google</button>}
      </div>

    </div>
}