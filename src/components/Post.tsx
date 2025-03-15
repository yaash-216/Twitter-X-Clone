import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa6";
import { LuRepeat2 } from "react-icons/lu";
import { TiHeartOutline } from "react-icons/ti";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import { useEffect, useState } from "react";

interface t {
  name: string;
  username: string;
  pic: any;
  tweet: string;
}

const Post = ({ part }: { part: t }): React.ReactNode => {
  const [random, setrandom] = useState<string>(
    Math.floor(Math.random() * 21212121).toString()
  );
useEffect(() => {
  setrandom(Math.floor(Math.random() * 21212121).toString())
}, [])

  return (
    <div className="flex p-3 gap-2 border-b-1 border-[#2f3336] ">
      <div className="size-10 ">
        <img src={part.pic} className="rounded-full" alt="" />
      </div>
      <div className="flex  w-full flex-col gap-1">
        <div className="flex items-center justify-between ">
          <span className="flex gap-1 items-center">
            <h3 className="font text-[#e7e9ea] sm:text-lg font-semibold">
              {part.name}
            </h3>
            <p className="text-[#71767b] font">@{part.username} · 23h</p>
          </span>
          <span>
            <BsThreeDots className="hover:text-[#1d9bf0] text-[#71767b] cursor-pointer" />
          </span>
        </div>

        <div>
          <p className="font break-all text-[#e7e9ea] ">{part.tweet}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center justify-around w-full">
            <span className="flex gap-1 items-center">
              <FaRegComment
                className="hover:text-[#1d9bf0] text-[#71767b] cursor-pointer"
                size={20}
              />
              <p className="text-[#71767b] text-sm font">
                {random.substring(0, 2)}k
              </p>
            </span>
            <span className="flex gap-1 items-center">
              <LuRepeat2
                className="hover:text-[#00ba7c] text-[#71767b] cursor-pointer"
                size={20}
              />
              <p className="text-[#71767b] text-sm font">
                {random.substring(2, 4)}k
              </p>
            </span>
            <span className="flex gap-1 items-center">
              <TiHeartOutline
                className="hover:text-[#f91880] text-[#71767b] cursor-pointer"
                size={20}
              />
              <p className="text-[#71767b] text-sm font">
                {random.substring(4, 6)}k
              </p>
            </span>
            <span className="flex gap-1 items-center">
              <AiOutlineAlignLeft
                className="hover:text-[#1d9bf0] text-[#71767b] cursor-pointer -rotate-90"
                size={20}
              />
              <p className="text-[#71767b] text-sm font">
                {random.substring(6, 8)}k
              </p>
            </span>
          </span>
          <span className="flex items-center gap-2">
            <FaRegBookmark
              className="hover:text-[#1d9bf0] text-[#71767b] cursor-pointer"
              size={20}
            />
            <MdOutlineFileUpload
              className="hover:text-[#1d9bf0] text-[#71767b] cursor-pointer"
              size={20}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
