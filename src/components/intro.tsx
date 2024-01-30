import Image from "next/image";
import Link from "next/link";
export default function Intro() {
  return (
    <>
      <div className="  flex  flex-col  lg:min-h-[800px]  lg:flex-row   lg:items-center justify-around gap-[30px] mt-[20px] ">
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
          <Link href="/contact" className="bg-[#5ab424] p-[20px] text-white rounded-[20px] hover:bg-blue-600">
            Get Started
          </Link>
        </div>

        <div className="h-auto">
          <div className="relative lg:mt-[50px] ">
            <Image src="/web4.png" width={600} height={600} alt="main" className="absolute " />
            <Image src="/k5c.png" width={600} height={600} alt="main " className="relative" />
          </div>
        </div>
      </div>
    </>
  );
}
