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
    <div className="h-[100vh] flex  items-center justify-center sticky top-0">
      <div
        style={{ backgroundColor: color }}
        className="bg-[color]
         flex
         flex-col relative top-[-10%]
          h-[500px] max-w-[1000px]
           rounded-[25px] p-[50px]
            transform-origin-top"
      >
        <h2 className="text-center m-0 text-[28px]">{title}</h2>
        {/* body */}
        <div className="flex  h-full mt-[50px] gap-[50px]">
          <div className="w-[40%] relative top-[10%]">
            <p className="text-[16px]">{description}</p>
            <span className="flex items-center gap-[5px] ">
              <a href={src} target="_blank" className="text-[12px] underline cursor-pointer">
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
                See more
              </a>
            </span>
          </div>

          <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden">
            <div className="w-full h-full">
              <Image fill src={`/images/${src}`} alt="iamges" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
