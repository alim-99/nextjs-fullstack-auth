"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    // const onSignup = async () => {
    //     try {
    //         setLoading(true);
    //         console.log("Sending signup request with data:", user);
    //         const response = await axios.post("/api/users/signup", user);
    //         console.log("Signup success", response.data);
    //         router.push("/login");
    //     } catch (error:any) {
    //         console.error("Signup failed", error.response?.data || error.message);
    //         toast.error(error.response?.data?.message || "Signup failed");
    //     }finally {
    //         setLoading(false);
    //     }
    // }

    const onSignup = async (): Promise<void> => {
        try {
            setLoading(true);
            console.log("Sending signup request with data:", user);
    
            const response = await fetch("/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
    
            if (!response.ok) {
                // If the response status is not 2xx, throw an error
                const errorData = await response.json();
                throw new Error(errorData.message || "Signup failed");
            }
    
            const data = await response.json();
            console.log("Signup success", data);
            router.push("/login");
        } catch (error: any) {
            console.error("Signup failed", error.message);
            toast.error(error.message || "Signup failed");
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg 
        shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {loading ? "Processing" : "Signup"}</h1>
        <input 
        className="flex flex-col w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
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
            onClick={onSignup}
            className="bg-gradient-to-r from-indigo-500 to-blue-500
            text-white font-bold py-2 px-4 rounded-md mt-4
            hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">
                {buttonDisabled ? "No signup" : "Signup"}</button>
            <Link className="block mt-3 text-[#333] hover:text-black" href="/login">Visit login page</Link>
            </div>
        </div>
    )

}