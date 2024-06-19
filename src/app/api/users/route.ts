import { NextResponse } from "next/server";

export async function GET(req:Request){
return new NextResponse(JSON.stringify([
    {name:"Mwero", age:90},
    {name:"Newton", age:16},
    {name:"Emmanuel", age: 25}
]))
}

export async function POST(req:Request){
const body = await req.json()

    return new NextResponse(JSON.stringify({newUser:body}
    ))
    }

    