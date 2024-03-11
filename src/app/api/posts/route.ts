import { authOptions } from "@/lib/auth";
import prisma from "@/utils/connect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};


export const POST =async (req:Request) => {
  const session = await getServerSession(authOptions)
  if(!session){
    return new NextResponse(
      JSON.stringify({message:'Not Authenticated'}),{status:401}
    )
  }
  try {
    const body = await req.json()
    const post = await prisma.post.create({
      data:{...body, userEmail:session.user.email}
    })
    return new NextResponse(JSON.stringify(post),{status:200})
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
    );
  }
}