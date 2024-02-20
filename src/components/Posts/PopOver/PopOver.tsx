"use client";
import { FaRegShareSquare } from "react-icons/fa";

import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  XIcon,
  TelegramIcon,
  TelegramShareButton,
} from "react-share";

export default function PopOver({ color }: { color: string }) {
  const shareUrl = "http://google.com";
  const title = "GitHub";

  return (
    <Popover
      showArrow
      offset={10}
      placement="bottom"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,

            transition: {
              duration: 0.1,
              opacity: {
                duration: 0.15,
              },
            },
          },
          exit: {
            y: "10%",
            opacity: 0,
            transition: {
              duration: 0.1,
              opacity: {
                duration: 0.1,
              },
            },
          },
        },
      }}
    >
      <PopoverTrigger>
        <div>
          <FaRegShareSquare className={`text-${color}`} />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 mx-auto">
          <div className="text-md mb-2 font-bold text-crimson-900 ">Social Share</div>
          <FacebookShareButton url={shareUrl} className="mr-2">
            <FacebookIcon size={22} round />
          </FacebookShareButton>
          {/* tweenter */}
          <TwitterShareButton url={shareUrl} title={title} className="mr-2">
            <XIcon size={22} round />
          </TwitterShareButton>
          {/* github */}
          <TelegramShareButton url={shareUrl} title={title} className="mr-2">
            <TelegramIcon size={22} round />
          </TelegramShareButton>
        </div>
      </PopoverContent>
    </Popover>
  );
}
