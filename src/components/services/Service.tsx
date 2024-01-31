import style from "./servce.module.css";

export default function Service() {
  return (
    <div className="bg-[#27272E] w-full px-[20px]  lg:px-0 ">
      <div className="container mx-auto">
        <div className="flex  flex-col justify-around gap-[30px] py-[50px]   md:w-[70%] lg:w-[50%]">
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

          <div
            className=" grid col-auto grid-flow-col
           py-[40px] xl:pt-[50px] xl:pb-[40px] 2xl:py-[50px]
            px-[20px] lg:px-[15px] xl:px-[30px] 2xl:px-[40px]"
          >
            {/* icon*/}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="w-[60px]  lg:w-[85px] h-auto"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFCA28"
                  d="M36.585,38.376c-0.192-0.908-0.532-2.225-1.063-4.209c-1.778-6.654,9.789-17.236-0.948-23.138c-10.226-5.621-14.248,6.505-17.199,8.678c-2.659,2.001-5.543,2.417-7.56,2.876c-0.63,0.089-1.172,0.253-1.606,0.499c-0.45,0.215-0.772,0.487-0.914,0.883c-1.622,2.843,3.595,8.903,11.659,13.53c5.264,3.022,10.436,4.684,13.844,4.684c1.814,0,3.133-0.47,3.697-1.461c0.199-0.284,0.308-0.547,0.28-1.083C36.791,39.246,36.721,38.824,36.585,38.376z M34.557,39.59c-0.869,3.473-10.096-0.389-14.807-3.09c-7.874-4.519-12.42-9.795-10.516-11.408c0.082-0.09,0.58-0.341,1.751-0.341c3.137,0,8.014,1.682,12.73,4.392C31.595,33.657,34.872,38.535,34.557,39.59z"
                ></path>
                <path
                  fill="#B78B27"
                  d="M34.557 39.59c.315-1.055-2.962-5.933-10.84-10.447-4.716-2.71-9.593-4.392-12.73-4.392-1.172 0-1.669.251-1.751.341C7.33 26.705 11.876 31.981 19.75 36.5 24.461 39.201 33.688 43.063 34.557 39.59zM34.574 11.029c.938.515 1.695 1.068 2.316 1.648C38.131 12.145 39 10.913 39 9.475 39 7.559 37.441 6 35.52 6c-1.921 0-3.475 1.559-3.475 3.475 0 .17.026.333.05.496C32.879 10.209 33.702 10.55 34.574 11.029z"
                ></path>
                <path
                  fill="#FDD835"
                  d="M23.633,29.019C20.49,29.212,18,31.814,18,35c0,3.311,2.688,6,6.005,6C27.313,41,30,38.311,30,35c0-0.577-0.086-1.133-0.238-1.662C27.415,31.367,25.298,29.969,23.633,29.019z"
                ></path>
                <path
                  fill="#FFF9C4"
                  d="M24,30.001c0.542,0,1.063,0.078,1.563,0.213c-0.687-0.45-1.344-0.861-1.929-1.195C20.49,29.212,18,31.814,18,35c0,0.169,0.012,0.335,0.025,0.5C18.28,32.422,20.855,30.001,24,30.001z"
                ></path>
              </svg>
            </div>
            {/* text */}
            <div>
              <h1
                className="text-xl lg:text-2xl mb-[30px]
               text-white  transition delay-75 duration-300 
               ease-in  font-medium"
              >
                Website Designing
              </h1>
              <p className="text-[#b5b7b8] mb-[40px]">
                The websites we design and develop are focused on driving maximum performance from all of your
                marketing and advertising initiatives.
              </p>
              <p className="text-white style.spanP ">
                <span></span>
                Find more
              </p>
            </div>
          </div>

          {/* =================== BOX END ====================== */}
        </div>
      </div>
    </div>
  );
}
