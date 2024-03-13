import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import  Link  from 'next/link';

export default function App({session}:any) {
  return (
    <div className=" hidden  md:flex items-center gap-4">
   
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: session.user.image || `/defaults/defaultUser.png`,
            }}
            className="transition-transform"
            description={session.user.username === null ? "@"+session.user.name.split(' ').join('') : "@"+session.user.username }
            name={session.user.username || session.user.name}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2" textValue="Profile">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{session.user.email}</p>
          </DropdownItem>
          <DropdownItem key="Writepost" textValue="Writepost">
           <Link href='write'>    
            Write post
           </Link>
          </DropdownItem>
         
          
         
          <DropdownItem key="help_and_feedback" textValue="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger" textValue='logout'>
         <button onClick={() => signOut()} >
          
            Log Out
          </button> 
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
