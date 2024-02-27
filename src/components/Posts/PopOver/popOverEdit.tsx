import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import Link from "next/link";

export default function PopOverEdit({ slug }:{slug:string}) {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <div className="flex flex-col gap-1 px-2 ">
          <div className="bg-white h-1 w-1 rounded-full "></div>
          <div className="bg-white h-1 w-1 rounded-full "></div>
          <div className="bg-white h-1 w-1 rounded-full "></div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div
            className="text-small font-bold flex items-center gap-1 
             cursor-pointer  hover:text-red-500 "
          >
            <RiDeleteBin5Line />
            delete
          </div>

          <Link
            href={`/posts/${slug}/edit`}
            className="text-small font-bold flex items-center 
             gap-1 cursor-pointer hover:text-blue-500 "
          >
            <LiaEdit />
            edit
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
