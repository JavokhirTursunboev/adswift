import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";
import { signOut } from "next-auth/react";

export default function App({session}:any) {
  return (
    <div className=" hidden  md:flex items-center gap-4">
   
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            description={"@"+session.user.username}
            name={session.user.username}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{session.user.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
         
          
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
         <button onClick={() => signOut()} >
          
            Log Out
          </button> 
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
