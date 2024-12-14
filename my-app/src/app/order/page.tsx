"use client"

import { useRouter } from "next/navigation";

export default function Order(){
    const router=useRouter()

    let handleSUbmit=()=>{
     
        // router.push('/')
        // router.replace('/')
        // router.back()
        router.forward()

    }
    return (
        <>
        <h1>Order Page !</h1>
        <button onClick={handleSUbmit}> Submit</button>
        </>
    )
}