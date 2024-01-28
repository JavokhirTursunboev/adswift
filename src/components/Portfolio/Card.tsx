interface CardProps {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}

import Image from "next/image";

export default function Card({ title, description, src, link, color }: CardProps) {
  return (
    <div className="h-[100vh] w-[90%] md:w-full mx-auto flex  items-center justify-center sticky top-0 ">
      <div
        style={{ backgroundColor: color }}
        className="bg-[color]
         flex
         flex-col relative lg:top-[-10] top-[-15%]
          h-[500px] max-w-[1000px]
           rounded-[25px] p-[20px] lg:p-[50px]
            transform-origin-top"
      >
        {/* Image for Phone */}
        <div className=" md:hidden   relative w-full h-full rounded-[25px] overflow-hidden">
          <div className="w-full h-full">
            <Image fill src={`/images/${src}`} alt="iamges" className="object-cover" />
          </div>
        </div>
        <h2 className="text-center text-[22px] lg:text-[28px] mt-[20px] ">{title}</h2>
        {/* body */}
        <div className="flex flex-col lg:flex-row h-full lg:mt-[50px]  gap-[50px]">
          <div className=" w-full lg:w-[40%] relative top-[10%]">
            <p className="text-[13px] lg:text-[16px]">{description}</p>
            <span className="flex items-center gap-[5px] ">
              <a href={link} target="_blank" className="text-[12px] underline cursor-pointer">
                See more
              </a>
            </span>
          </div>

          <div className="hidden md:block relative w-[60%] h-full rounded-[25px] overflow-hidden">
            <div className="w-full h-full">
              <Image fill src={`/images/${src}`} alt="iamges" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
