interface dataServiceType {
  icon: JSX.Element;
  title: string;
  description: string;
}

import Image from "next/image";

export const DataService: dataServiceType[] = [
  {
    icon: (
      <Image
        src="/serviceIcon/icon-1.png"
        width={60}
        height={60}
        alt="icon"
        className="w-[60px]  lg:w-[85px] h-auto"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    title: "Website Designing",
    description:
      "The websites we design and develop are focused on driving maximum performance from all of your marketing and advertising initiatives.",
  },
  {
    icon: (
      <Image
        src="/serviceIcon/icon-2.png"
        width={60}
        height={60}
        alt="icon"
        className="w-[60px]  lg:w-[85px] h-auto"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    title: "Graphic Designing",
    description:
      "We offers you the complete graphic design service, from impact website design, new image logos, short run digital print, through to conventional print and signage.",
  },
  {
    icon: (
      <Image
        src="/serviceIcon/icon-3.png"
        width={60}
        height={60}
        alt="icon"
        className="w-[60px]  lg:w-[85px] h-auto"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    title: "Online Marketing",
    description:
      "We build and manage paid search campaigns that perform! Coupled with innovative research, optimisation and reporting to provide you with a greater return for every click on your campaign.",
  },
  {
    icon: (
      <Image
        src="/serviceIcon/icon-4.png"
        width={60}
        height={60}
        alt="icon"
        className="w-[50px]  lg:w-[75px] h-auto"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    title: "Mobile Development",
    description:
      "It has already started. Apps are changing the world. Apps are changing our lives. We do apps. Talk to us about your idea",
  },
  {
    icon: (
      <Image
        src="/serviceIcon/icon-5.png"
        width={60}
        height={60}
        alt="icon"
        className="w-[60px]  lg:w-[85px] h-auto"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    title: "Web Development",
    description:
      "We have a special interest in high-caliber web development. This inspires us to not only design beautiful websites, but to also give them a solid backbone",
  },
  {
    icon: (
      <Image
        src="/serviceIcon/icon-6.png"
        width={60}
        height={60}
        alt="icon"
        className="w-[60px]  lg:w-[85px] h-auto"
        style={{ width: "auto", height: "auto" }}
      />
    ),
    title: "UI/UX Designing",
    description:
      " We are specialized in creating beautiful and smooth UI/UX designs that provide better user experience by incorporating effective collaboration, streamlined Projects which strive for better results.",
  },
];
