import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

//create Make
export async function POST(request) {
    try {
        const data = await request.json();
        const make = await prisma.make.create(({
            data: data
        }));
        return new NextResponse(JSON.stringify(make), {
            headers: { "Content-type": "application/json" },
            status: 201
        })
    } catch (error) {
        return new NextResponse(error.message, {status:500})
    }
}

//display Makes
export async function GET(){
    try{
        const makes = await prisma.make.findMany();
        return NextResponse.json({ data: makes }, { status: 200 });
    }catch(error){
        return new NextResponse(error.message, { status: 500 });
    }
}