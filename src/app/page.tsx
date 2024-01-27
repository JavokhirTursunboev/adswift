import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row item lg:items-center justify-around gap-[30px] mt-[90px]">
      <div className="flex flex-col gap-[3rem] items-start lg:max-w-[450px]">
        <h1 className="text-[2.5rem] md:text-[60px] leading-[40px] md:leading-[55px]  font-bold">
          Build beautiful website & mobile apps.
        </h1>
        <p className="text-[16px]]">
          Create live segments and target the right people for messages based on their behaviors.
        </p>
        <button className="bg-[#5ab424] p-[20px] text-white rounded-[20px] hover:bg-blue-600">
          Get Started
        </button>
      </div>
      <div className="relative mt-[50px]">
        <Image src="/k5c.png" width={600} height={600} alt="main " className=" absolute z-10" />
        <Image src="/web4.png" width={600} height={600} alt="main" className=" z-0" />
      </div>
    </div>
  );
}
