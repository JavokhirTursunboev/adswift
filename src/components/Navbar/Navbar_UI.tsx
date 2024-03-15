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
  User,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import UserPage from "./UserPage";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "next-auth/react";
import { Suspense } from "react";
import Loading from "@/app/loading";


export default function NavbarUI({session}:any) {
 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Service", "Portfolio", "Contact", "Log Out"];

  const pathname = usePathname();
  return (
    <Suspense fallback={<Loading />}>
    <Navbar
      className={`${
        pathname === "/about" ? "bg-gradient-to-r from-gray-200 via-gray-200 to-transparent " : ""
      } `}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit flex items-end text-[1rem] lg:text-[2rem]">
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
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* ! FOR LARGE SIZE */}
      <NavbarContent className="hidden md:flex gap-5 justify-center items-center ">
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
          <Link className={`link ${pathname === "/posts" ? "text-blue-600" : ""}`} href="/posts">
            Posts
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`link ${pathname === "/portfolio" ? "text-blue-600" : ""}`} href="/portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`link ${pathname === "/contact" ? "text-blue-600" : ""}`} href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* fOR SMALL SIZE */}
      <NavbarContent justify="end">
        
      {session?.user ? 
            <NavbarItem>
                  <UserPage session={session} />
            </NavbarItem>
            :
        <>  
            <NavbarItem className="hidden md:flex">
              <Link
                href="/login"
                className={`link ${pathname === "/login" ? "text-red-500 font-bold  " : ""}`}
              >
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="/register"
                variant="flat"
                className={`hidden md:flex text-black link ${
                  pathname === "/register" ? "text-red-500 font-bold " : ""
                }`}
              >
                Sign Up
              </Button>
            </NavbarItem>
            </>
          }
            {/* ======================== sign out ================ */}
         
          
        

        {/* ======================== hamberuger button ====================================  */}

        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden" />
      </NavbarContent>
      <NavbarMenu className="text-start">
    
    {session?.user ? 
      <div className='flex  justify-between items-center ' >
   <div className='flex items-center gap-3'>
      <User
            as="button"
            name=''
            avatarProps={{
              isBordered: true,
              src: session.user.image || `/defaults/defaultUser.png`,
            }}
            className="transition-transform"
           
          
            /> 
         <div className='flex flex-col'>
            <p>{ session.user.username || session.user.name }</p>
          <p className='text-[12px] text-slate-400 ' >{session?.user.email}</p>
          </div>
   </div>       
          <NavbarItem>
                <button onClick={()=>signOut()}  className='text-lg' > <IoIosLogOut /></button>
              </NavbarItem>
      </div>
          :
          <div className="flex items-center justify-between ">
         
            
          <NavbarItem>
            <Link href="/login">Login</Link>
          </NavbarItem>

          {/* ================= sign up ===================  */}
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/signup"
              variant="flat"
              className={`text-black link ${pathname === "/signup" ? "text-red-500  " : ""}`}
            >
              Sign Up
            </Button>
          </NavbarItem>
      
     
        
          {/* ======================== sign out ================ */}
         
      
     
    </div>
          }
           <hr className=' my-5' />
        <NavbarItem>
          <Link
            className={`link ${pathname === "/" ? "text-blue-600 font-bold ml-5 text-xxl" : ""} text-xl`}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`link ${pathname === "/about" ? "text-blue-600 font-bold ml-5 text-xxl" : ""} text-xl`}
            href="/about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`link ${
              pathname === "/posts" ? "text-blue-600 font-bold ml-5 text-xxl" : ""
            } text-xl `}
            href="/posts"
          >
            Posts
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`link ${
              pathname === "/service" ? "text-blue-600 font-bold ml-5 text-xxl" : ""
            } text-xl `}
            href="/service"
          >
            Service
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`link ${
              pathname === "/portfolio" ? "text-blue-600 font-bold ml-5 text-xxl" : ""
            } text-xl`}
            href="/portfolio"
          >
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`link ${
              pathname === "/contact" ? "text-blue-600 font-bold ml-5 text-xxl" : ""
            } text-xl`}
            href="/contact"
          >
            Contact
          </Link>
        </NavbarItem>
       
       
      </NavbarMenu>
    </Navbar>
    </Suspense>
  );
}
