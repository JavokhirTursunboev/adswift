import { getServerSession } from "next-auth";
import NavbarUI from "./Navbar_UI";
import { authOptions } from "@/lib/auth";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default async function NavbarMain() {
  const session = await getServerSession(authOptions)
 
  return <div>
     <Suspense fallback={<Loading />}>
    <NavbarUI session={session} />
    </Suspense>
    </div>;
}
