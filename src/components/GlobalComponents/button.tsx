import Link from "next/link";
import React from "react";

export default function GlobalBtn({ name }: { name: string }) {
  return (
    <Link
      href="/contact"
      className="bg-[#5ab424] py-[20px] px-[40px] text-white rounded-[20px] hover:bg-blue-600"
    >
      {name}
    </Link>
  );
}
