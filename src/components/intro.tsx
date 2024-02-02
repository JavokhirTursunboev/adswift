import Image from "next/image";
import Link from "next/link";
import GlobalBtn from "./GlobalComponents/button";
export default function Intro() {
  return (
    <>
      <div
        className=" flex container mx-auto
         flex-col px-[20px] lg:px-0 
          lg:min-h-[800px]  
      lg:flex-row 
       lg:items-center
        justify-between 
        gap-[30px] mt-[20px] "
      >
        <div
          className="flex flex-col  gap-[3rem] items-start lg:max-w-[500px] 
"
        >
          <h1 className="text-[2.5rem] md:text-[70px] leading-[40px] md:leading-[55px] lg:mt-[5rem]  font-bold">
            Build beautiful website & mobile apps.
          </h1>
          <p className="text-[16px]]">
            Create live segments and target the right people for messages based on their behaviors.
          </p>
          <GlobalBtn name={"Get Started"} />
        </div>

        <div className="h-auto ">
          <div className="relative lg:mt-[50px] ">
            <Image src="/web4.png" width={600} height={600} alt="main" className="absolute " />
            <Image src="/k5c.png" width={600} height={600} alt="main " className="relative" />
          </div>
        </div>
      </div>
    </>
  );
}
