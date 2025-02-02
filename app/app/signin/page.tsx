"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"



export default function Signin() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("")
    const [error, setError]  = useState("");
    const router = useRouter();




    const handleSubmit = async(e: React.FormEvent) => {
         e.preventDefault();
         setError("");


         const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {"Content-Type": "application.json"}, 
            body: JSON.stringify({
                username, email, password
            }),
         });

         const data = await res.json();


         if(!res.ok) {
            setError(data.error);
            return;
         }

         router.push("/auth/signin");
    };


    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl mb-4">Sign Up</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-2 p-2 border">
                </input>
                <input type="email"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-2 p-2 border">
                </input>
                <input type="password"
                placeholder="Password"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-2 p-2 border">
                </input>
            </form>
        </div>
    )
}