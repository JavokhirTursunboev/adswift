import Link from "next/link";
import React from "react";

export default function GlobalBtn({ name }: { name: string }) {
  return (
    <Link href="/contact" className="bg-[#5ab424] p-[20px] text-white rounded-[20px] hover:bg-blue-600">
      {name}
    </Link>
  );
}
