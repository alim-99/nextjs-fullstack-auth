"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

  //   const onLogin = async () => {
  //     try {
  //         setLoading(true);
  //         const response = await fetch("/api/users/login/", {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify(user)
  //         });
  
  //         if (!response.ok) {
  //             const errorData = await response.json();
  //             throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  //         }
  
  //         const data = await response.json();
  //         console.log("Login success", data);
  //         toast.success("Login success");
  //         router.push("/profile");
  //     } catch (error: unknown) {
  //         console.log("Login failed", error instanceof Error ? error.message : String(error));
  //         toast.error(error instanceof Error ? error.message : String(error));
  //     } finally {
  //         setLoading(false);
  //     }
  // }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white 
        rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {loading ? "Processing" : "Login"}</h1>
        <input 
        className="flex flex-col w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <input 
        className="flex flex-col w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onLogin}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold 
            py-2 px-4 rounded-md mt-4 hover:bg-indigo-600
            hover:to-blue-600 transition ease-in-out duration-150">Login here</button>
            <Link className="block mt-3 text-[#333] hover:text-black" href="/signup">Visit Signup page</Link>
        </div>
        </div>
    )
}