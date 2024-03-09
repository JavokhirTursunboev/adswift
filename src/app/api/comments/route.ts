import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


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
