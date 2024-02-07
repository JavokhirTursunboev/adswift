"use client";
import React, { useState } from "react";
import { DataService } from "../services/Service_Fake";

export default function Service() {
  const [hoverIndex, setHoverIndex] = useState<string | null>(null);
  return (
    <div className="bg-[#27272E] w-full px-[20px] md:px-[30px] xl:px-0 ">
      <div className="container mx-auto">
        <div
          className="flex  flex-col mx-auto items-center gap-[30px] py-[50px] 
          md:w-[70%] lg:w-[50%]"
        >
          <h3 className="text-[#c75c6f]  text-[16px] md:text-[20px]   lg:pt-[60px] ">Featured Case Study</h3>
          <h1 className="text-white text-[34px] md:text-[50px] lg:text-[60px] leading-10 md:leading-[70px]">
            Design startup movement
          </h1>
          <p className="text-[#88888C] text-[16px] md:text-[18px] leading-6 max-w-[80%] ">
            The innovative design startup movement revolutionizes the industry with cutting-edge solutions and
            creative thinking
          </p>
        </div>

        {/* ! ========== BOXES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3  auto-rows-auto ">
          {/*================= One box =================== */}

          {/* =================== BOX END ====================== */}
        </div>
      </div>
    </div>
  );
}
