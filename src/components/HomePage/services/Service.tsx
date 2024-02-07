"use client";
import React, { useState } from "react";
import { DataService } from "./Service_Fake";

export default function Service() {
  const [hoverIndex, setHoverIndex] = useState<string | null>(null);
  return (
    <div className="bg-[#27272E] w-full px-[20px] md:px-[30px] xl:px-0 ">
      <div className="container mx-auto">
        <div
          className="flex  flex-col justify-around gap-[30px] py-[50px] 
          md:w-[70%] lg:w-[50%]"
        >
          <h3 className="text-[#c75c6f]  text-[16px] md:text-[20px]   lg:pt-[60px] ">
            What We Can Do For You
          </h3>
          <h1 className="text-white text-[34px] md:text-[50px] lg:text-[60px] leading-10 md:leading-[70px]">
            Services we can help you with
          </h1>
          <p className="text-[#88888C] text-[16px] md:text-[18px] leading-6  ">
            Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu imperdiet
          </p>
        </div>

        {/* ! ========== BOXES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3  auto-rows-auto ">
          {/*================= One box =================== */}

          {DataService.map((service) => {
            let timerId;
            return (
              <div
                key={service.title}
                className={`grid col-auto grid-flow-col
                py-[40px] xl:pt-[50px] xl:pb-[40px] 2xl:py-[50px]
                px-[20px] lg:px-[15px] xl:px-[30px] 2xl:px-[40px] gap-4 
              
              
                  transition-all
                 duration-300 ease-in-out 
                  linear-gradient(0deg, #27272e 64.45%, rgba(74, 75, 86, 0.72) 100%) 
                 rounded-[30px]  group 
                 
                 ${hoverIndex === service.title ? "bg-[#303035] " : ""}`}
                onMouseEnter={() => setHoverIndex(service.title)}
                onMouseLeave={() => (timerId = setTimeout(() => setHoverIndex(null), 20000))}
              >
                {/* icon*/}
                <div>{service.icon}</div>
                {/* text */}
                <div>
                  <h1
                    className="text-xl lg:text-2xl mb-[30px]
                    text-white hover:text-[#5ab424] transition-all duration-300 
                    ease-in-out font-medium cursor-pointer"
                  >
                    {service.title}
                  </h1>
                  <p className="text-[#b5b7b8] mb-[40px] group-hover:text-white ">{service.description}</p>
                  <p className="text-white mb-[40px] group-hover:text-[#b5b7b8]">Find more</p>
                </div>
              </div>
            );
          })}

          {/* =================== BOX END ====================== */}
        </div>
      </div>
    </div>
  );
}
