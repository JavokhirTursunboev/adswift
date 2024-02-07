"use client";
import { useState } from "react";
import { FeatureData } from "@/fakedata/FeatureData";
import { GlobalCountUp, UseScrollTrigger } from "@/components/GlobalComponents/countdown";

export default function Service() {
  const [counts, setCount] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  // ! =============== GSAP SCROLL ======================
  UseScrollTrigger(
    ".feature",
    "top 80%",
    "bottom 20%",
    () => setCount(true),
    () => setCount(true)
  );

  return (
    <div className="bg-[#27272E] w-full px-[20px] md:px-[30px] xl:px-0 ">
      <div className="container mx-auto">
        <div
          className="flex  flex-col mx-auto items-center gap-[30px] py-[50px] 
         "
        >
          <h3 className="text-[#c75c6f]  text-[16px] md:text-[20px]   lg:pt-[60px] ">Featured Case Study</h3>
          <h1 className="text-white text-center w-full text-[34px] md:text-[50px] lg:text-[60px] leading-10 md:leading-[70px]">
            Design startup movement
          </h1>
          <p className="text-[#88888C] text-[16px] text-center  md:text-[18px] leading-6 lg:max-w-[80%] ">
            The innovative design startup movement revolutionizes the industry with cutting-edge solutions and
            creative thinking
          </p>
        </div>

        {/* ! ========== BOXES */}
        <div className=" grid grid-cols-2 lg:grid-cols-4  gap-[20px]  mx-auto  feature">
          {/*================= One box =================== */}
          {FeatureData.map((item) => {
            let timerId;
            return (
              <div
                key={item.num}
                className={`flex flex-col items-center mb-[20px]  py-[30px] flex-1 md:py-[60px] px-[10px] md:px-[20px] max-w-[288px]
                  transition-all
              duration-300 ease-in-out 
               linear-gradient(0deg, #27272e 64.45%, rgba(74, 75, 86, 0.72) 100%) 
                rounded-[30px] 
              ${hoverIndex === item.num ? "bg-[#303035] " : ""}`}
                onMouseEnter={() => setHoverIndex(item.num)}
                onMouseLeave={() => (timerId = setTimeout(() => setHoverIndex(null), 20000))}
              >
                <div>{item.symbol}</div>
                <div
                  className=" mb-[10px]    text-[#C75C6F] text-bold"
                  style={{ fontSize: "clamp(30px, 5vw, 50px)" }}
                >
                  {counts && <GlobalCountUp count={true} dataCar={{ numPer: item.num }} />}+
                </div>

                <p className="text-[18px] text-center text-white mb-[30px] "> {item.text}</p>
              </div>
            );
          })}
          {/* =================== BOX END ====================== */}
        </div>
      </div>
    </div>
  );
}
