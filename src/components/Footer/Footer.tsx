import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="container w-full mx-auto   px-[20px] md:px-[30px] xl:px-0  pt-[80px]">
      <div className="flex justify-between pb-[50px]">
        <FaInstagram className=" text-[26px] text-[#525260] hover:text-[#E4405F]" />
        <FaTwitter className=" text-[26px] text-[#525260] hover:text-[#0d6efd]" />

        <FaGithub className=" text-[26px] text-[#525260] hover:text-black" />
      </div>

      {/* get in touch */}
      <div>
        <h1 className="mb-[20px] text-[38px] text-bolder ">Get in touch!</h1>

        <p className="mb-[40px]">Connect with us on social media for updates, news, and exciting content!</p>
        {/* mail part */}
        <form
          className="flex w-full justify-around flex-wrap  items-stretch h-[72px] rounded-[20px] relative"
          style={{
            padding: "10px 10px 10px 55px",
            boxShadow: "0 24px 48px -15px rgba(153, 161, 170, 0.25)",
          }}
        >
          <div className="absolute left-[30px] top-[24px] z-1">
            <MdEmail className="text-[22px]" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="px-[15px] py-[5px]
           flex-1
           outline-none
            "
          />
          <button
            type="submit"
            className=" border-none bg-[#5AB424] text-white  rounded-[16px] py-[10px] px-[28px] "
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* ==================== service ======================= */}
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[16px]">
          <h1 className=" font-bold text-[20px] pt-[40px]">Services</h1>
          <p>Website Designing</p>
          <p>Mobile App Development</p>
          <p>Web Development</p>
          <p>Graphic Designing</p>
          <p>UI / UX Designing</p>
          <p>Internet Marketing</p>
        </div>
        {/* resource */}
        <div className="flex flex-col gap-[16px]">
          <h1 className=" font-bold text-[20px]">Resourses</h1>
          <p>Case Studies</p>
          <p>Portfolio</p>
        </div>
        {/* Support */}
        <div className="flex flex-col gap-[16px]">
          <h1 className=" font-bold text-[20px]">Support</h1>
          <p>Contact</p>
          <p>Terms of Use </p>
        </div>

        {/* copy right */}
        <hr className="w-full mx-auto " />
        <div className=" mx-auto">
          <p className="pb-[25px]"> &copy; Copyright 2024. All Right Reserverd</p>
        </div>
      </div>
    </div>
  );
}
