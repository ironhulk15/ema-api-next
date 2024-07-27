import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


//display Make
export async function GET(request, { params }) {
    const id = parseInt(params.id)

    try {
        //find by id
        const make = await prisma.make.findFirst({
            where: { make_id: id }
        });
        if (!make)
            return new NextResponse(`Marca con ID ${id} no encontrada.`, { status: 404 });
        return NextResponse.json(make);
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}

/*
//delete make
export async function DELETE(request, { params }) {
    const id = parseInt(params.id)

    try {

        const result = await prisma.make.delete({
            where: { make_id: id },
        });
        if (!make)
            return new NextResponse(`Marca con ID ${id} no encontrada.`, { status: 404 });
        return NextResponse.json({ message: result }, { status: 200 });

    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    const id = parseInt(params.id);
    const data = await request.json();

    try {

        const result = await prisma.make.update({
            where: { make_id: id },
            data: data
        });
        return NextResponse.json({ message: result }, { status: 200 });

    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}
    */