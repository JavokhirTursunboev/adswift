import { Comments } from "@/components/Comment/Comment";
import Image from "next/image";
import LikeButton from "./../../../components/GlobalComponents/likeButton/LikeButton";
import { FaRegComment } from "react-icons/fa";
import PopOver from "@/components/Posts/PopOver/PopOver";
import Link from "next/link";

export default function SinglePage() {
  return (
    <div className="bg-[#0f172a] px-[20px] md:px-[30px] xxl:px-0 pb-[50px] lg:py-[80px]">
      <div className="container mx-auto">
        {/* header and image */}
        <div className="flex flex-col gap-9 lg:flex-row md:items-center items-start justify-center pt-[50px] mb-[70px] ">
          <div className="flex flex-col  md:gap-[30px] ">
            <h1
              className="text-white text-[32px] md:text-[54px] lg:text-[65px] md:leading-[50px]
             lg:leading-[60px]  font-bold mb-[20px] md:mb-[50px]"
            >
              This is inside of text header
            </h1>
            {/* user */}
            <div className="flex gap-5">
              <Image
                src="/AboutComment/testimonial-1.png"
                height={50}
                width={50}
                alt="user"
                className="rounded-full "
              />
              <div>
                <p className="text-white font-[500] ">Javokhir Tursunboev</p>
                <p className="text-white text-[14px]">01.01.2024</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* ================= share side ===================== */}
              <div className="flex items-center justify-end gap-5 mt-[20px] border-y-1 w-full py-5">
                <LikeButton col="white" />
                <Link href="#comments">
                  <FaRegComment className="text-white " />
                </Link>
                <PopOver color="white" />
              </div>
            </div>
          </div>

          {/* ======== main images ========== */}
          <Image
            src="/images/cactus.jpg"
            width={600}
            height={600}
            alt="idImage"
            priority
            className="w-auto h-auto "
          />
        </div>

        {/*================= text============== */}
        <div className="mb-[40px] lg:mb-[80px]  ">
          <p className="text-white text-[18px] align-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt deserunt voluptate provident
            incidunt earum consequatur ex minus laborum quis optio vero, ratione dolorum pariatur est natus
            dolorem dolores quibusdam, iste quam, delectus error ad quas tempore? Eius, modi eligendi sed
            molestias culpa dolorem impedit dicta, reiciendis voluptatem, alias exercitationem molestiae
            laborum totam iste tempora temporibus! Dolor optio, quae reprehenderit molestiae assumenda veniam
            dolore fuga modi, natus eum et incidunt, id distinctio inventore. Unde, explicabo eius. Id veniam
            odio itaque doloribus voluptatum eveniet magni sint possimus magnam saepe minus, dignissimos,
            tenetur exercitationem vel, ex illo esse nobis corporis excepturi necessitatibus consequatur
            debitis obcaecati dolor! Culpa, cupiditate porro nulla ipsam quisquam voluptatem itaque at odio
            veniam iusto suscipit, reiciendis omnis expedita nam sunt ab consequuntur error enim officia
            numquam quo accusantium. Quae similique a recusandae vero quas veritatis perferendis repudiandae
            quo facilis nam unde modi magnam nulla, fugiat minima pariatur. Nemo at, cumque sequi, beatae
            assumenda ipsum, nesciunt recusandae amet aliquid cupiditate eaque molestias harum exercitationem
            laborum quis natus! Aliquam, tempora. Repellendus necessitatibus delectus ducimus at accusantium
            consequatur explicabo veritatis consectetur fugit, vel earum tenetur saepe esse magnam vitae nam
            perferendis repudiandae cumque nihil similique dolorem beatae temporibus! Dolorem officia error
            voluptatum.{" "}
          </p>
        </div>

        {/* ============== comments ======= */}
        <div id="comments">
          <Comments />
        </div>
      </div>
    </div>
  );
}
