"use server";

import prisma from "@/utils/connect";
import { redirect } from "next/navigation";

export default async function editServer(slug: string, title: string, desc: string) {
  await prisma.post.update({
    where: { slug },
    data: { title, desc },
  });
  redirect(`/posts/${slug}`);
}