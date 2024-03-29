import prisma from "@/utils/connect"
import { NextResponse } from "next/server"


export const GET = async (req:Request, {params}:any) => {
    const {slug} = params
    try {
        const post = await prisma.post.findUnique({
            where:{slug},
            include:{user:true}
        })
        return new NextResponse(JSON.stringify(post),{status:200})
    } catch (error) {
        return new NextResponse(JSON.stringify({message:'Something went wrong in get single post'}), {status:500})
    }
}