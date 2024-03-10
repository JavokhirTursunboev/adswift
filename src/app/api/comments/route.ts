import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth";


export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const postSlug = url.searchParams.get('postSlug');

  try {
    const comments = await prisma.comment.findMany({
      where: { 
        ...(postSlug && { postSlug })
       },
      include: { user: true }
    });

    // Return the post data directly in the response body
    return new NextResponse(JSON.stringify(comments),{status:200});
  } catch (error) {
    console.log(error);
    // Return an error message with status code 500
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
}
// Create a comment
export const POST = async (req: Request) => {
 
  const session = await getServerSession(authOptions)
  try {
    const body = await req.json()
    const comment = await prisma.comment.create({
    data:{...body, userEmail: session?.user.email }
    });

    // Return the post data directly in the response body
    return new NextResponse(JSON.stringify(comment),{status:200});
  } catch (error) {
    console.log(error);
    // Return an error message with status code 500
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
}
