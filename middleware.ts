import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const session = await getServerSession(authOptions);
    // If user is not authenticated and trying to access /posts, redirect to login page
    if (!authenticated && req.nextUrl.pathname === '/posts') {
        return NextResponse.redirect('/login');
    }
}