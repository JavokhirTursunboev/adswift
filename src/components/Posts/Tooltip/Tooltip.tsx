import React from "react";
import { Tooltip as NextTooltip, Button } from "@nextui-org/react";
import  Link  from 'next/link';

export default function TooltipComponent() {
  return (
    <NextTooltip color='danger' content='Login or Sign Up first' className="capitalize">
      <Button variant="flat" color='danger' className="capitalize">
     <Link href='/login' >
     
      Add Post
     </Link> 
      </Button>
    </NextTooltip>
  );
}