"use client";
import { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

function LikeButton() {
  const [liked, setLiked] = useState(true);
  const handleClick = () => {
    setLiked(!liked);
  };
  if (liked) return <AiOutlineLike color="black" size="20" onClick={handleClick} />;
  return <AiFillLike color="red" size="20" onClick={handleClick} />;
}

export default LikeButton;
