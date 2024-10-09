import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const primsa = new PrismaClient();
export async function POST(req: NextRequest){
    try {
        const body = await req.json();
    await primsa.user.create({
        data:{
            username:body.name,
            password: body.password
        }
    })
    return NextResponse.json({
        message: "user signed up successfull"
    })
    } catch (error) {
        console.log("error found: ", error);
    }
}

