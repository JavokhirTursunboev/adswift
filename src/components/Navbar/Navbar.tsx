"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",

    "Log Out",
  ];

  const pathname = usePathname();
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit flex items-end text-[1rem] lg:text-[2rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem] "
              viewBox="0 0 24 24"
            >
              <polygon fill="#C62828" points="9.702,14.968 14.298,14.968 12,6.359 9.702,14.968"></polygon>
              <path
                fill="#C62828"
                d="M2.571,0C1.152,0,0,1.152,0,2.571v18.857C0,22.848,1.152,24,2.571,24h18.857C22.848,24,24,22.848,24,21.429	V2.571C24,1.152,22.848,0,21.429,0H2.571L2.571,0z M20.5,19.998h-4.864L14.34,15.09l-5.984,4.907H3.497L8.56,3.995h6.879	L20.5,19.998L20.5,19.998L20.5,19.998z"
              ></path>
              <polygon
                fill="#DEDEDE"
                points="12,3.995 8.56,3.995 3.497,19.998 8.356,19.998 12,17.01 12,14.968 9.702,14.968 12,6.359 12,3.995"
              ></polygon>
              <polygon fill="#AC2323" points="12,6.359 9.702,14.968 12,14.968 12,6.359"></polygon>
              <path
                fill="#AC2323"
                d="M12,0H2.571C1.152,0,0,1.152,0,2.571v18.857C0,22.848,1.152,24,2.571,24H12v-6.99l-3.643,2.988H3.497	L8.56,3.995H12V0L12,0z"
              ></path>
            </svg>
            AdSwift
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* ! FOR LARGE SIZE */}
      <NavbarContent className="hidden lg:flex gap-5 justify-center items-center ">
        <NavbarItem>
          <Link className={`link ${pathname === "/" ? "text-blue-600" : ""}`} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`link ${pathname === "/about" ? "text-blue-600" : ""}`} href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`link ${pathname === "/service" ? "text-blue-600" : ""}`} href="/service">
            Service
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`link ${pathname === "/portfolio" ? "text-blue-600" : ""}`} href="/portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`link ${pathname === "/contact" ? "text-blue-600" : "black"}`} href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* fOR SMALL SIZE */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="hidden lg:flex">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="lg:hidden" />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <hr />
        <div className="flex items-center justify-between mt-10">
          <NavbarItem>
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
