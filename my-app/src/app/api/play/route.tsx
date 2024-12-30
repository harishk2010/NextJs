import { NextResponse } from "next/server"

let obj={
    name:"harish",
    age:23,
    dept:"Student"
}
export async function POST(req:Request){
    let { page }=await req.json()
    console.log(page)
}

export async function GET(){
    return NextResponse.json(obj)

}