import { getServerSession } from "next-auth";
import NavbarUI from "./Navbar_UI";
import { authOptions } from "@/lib/auth";

export default async function NavbarMain() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return <div><NavbarUI session={session} /></div>;
}
