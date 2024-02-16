"use client";
import DesginProcess from "@/components/Services/DesginProcess";
import WeBuild from "@/components/Services/WeBuild/WeBuild";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function Page() {
  // const { data: session, status } = useSession();
  // const router = useRouter();
  // useEffect(() => {
  //   if (status === "loading") return;
  //   if (!session) {
  //     router.push("/login");
  //   }
  // }, [session, status, router]);
  // if (status === "loading") {
  //   return <div>Hang on there...</div>;
  // }
  return (
    <div>
      <DesginProcess />
      <WeBuild />
    </div>
  );
}
