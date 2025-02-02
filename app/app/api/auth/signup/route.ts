import { Provider, Role } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import { prismaClient } from "@/app/lib/db";





export async function POST(req: NextRequest){
    try {
        const { username , email, password } = await req.json();
        console.log({ username, email, password});

        if(!username || !email || !password) {
            return NextResponse.json({
                error: "All fields are required"
            }, {
                status: 400
            })
        }
        const existingUser = await prismaClient.user.findUnique({
            where: {
                email
            }
        });

        if(existingUser){
            return NextResponse.json({
                error: "Email already in use"
            }, {
                status: 400
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prismaClient.user.create({
            data:{
               username ,
               email,
               hashedPassword,
               provider: "Credentials" as Provider,
               role: "EndUser" as Role,
            }
        });


        return NextResponse.json({
            message: "User created successfully", user
        }, {
            status: 201
        })  
    } catch(error){
        return NextResponse.json({
            error: "Internal server error"
        }, {
            status: 500
        })
    }
}