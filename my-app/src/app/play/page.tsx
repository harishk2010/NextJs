"use client"
export default function play(){
    let  clicked=async()=>{
        await fetch('/api/play',{
            method:'POST',
            headers:{ "Content-Type": "application/json"},
            body:JSON.stringify({page:'home'})
        })
    }
    return(
        <>
        <button onClick={clicked}>Click me</button>
        </>
    )
}