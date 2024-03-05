import prisma from "@/utils/connect"
import { hash } from "bcrypt"
import { NextResponse } from "next/server"
import { z } from "zod"


// !  = DEFINE A SCHEMA FOR INPUTT VALIDATION====
const userSchema = z.object({
    username: z.string().min(3, 'Username is required').max(18),
    email: z.string().min(3,"Email is required").email('Invalid emaild'),
    password: z.string()
        .min(1, 'Password is required')
        .min(8, 'Password must have more than 8 characters')
        .refine(value => /^(?=.*[0-9])/.test(value), 'Password must contain at least one lowercase letter and number'),
})
export async function POST(req:Request) {
    try {
        const body = await req.json()
        const {email, username, password} = userSchema.parse(body)
    
    //!=================== check if email already exisis======================
    const exsitingUserByEmail = await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(exsitingUserByEmail){
        return NextResponse.json({user:null, error:'Email already exists'}, {status:409})
    }
    //!============== check if username already exisis================
    const exsitingUserByUsername = await prisma.user.findUnique({
        where:{
            username:username
        }
    })
    if(exsitingUserByUsername){
        return NextResponse.json({user:null, error:'Username already exists'}, {status:409})
    }

    // !=============== create new user on database =============
    const hashedPassword = await hash(password, 10)
    const newUser = await prisma.user.create({
        data:{
            username,
            email,
            password: hashedPassword
        }
    })

   return NextResponse.json({user: newUser, error:'Create new user successfully'}, {status: 201})
   
    } catch (error) {
        return NextResponse.json({message: "something went wrong!"}, {status:500})
    }
}