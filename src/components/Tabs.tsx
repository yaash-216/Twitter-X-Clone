import X from "../assets/X.png";
import DP from "../assets/Default_pfp.svg.webp";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { RiMailLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { MdGroup } from "react-icons/md";
import { RxLightningBolt } from "react-icons/rx";
import { LuUser } from "react-icons/lu";
import { CgMoreO } from "react-icons/cg";
import { IoLogoGoogle } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import React, { useState, useEffect } from "react";

const Btn = ({
  children,
  title,
}: {
  children: React.ReactElement;
  title: string;
}) => {
  const [width, setwidth] = useState<number>(1024);
  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <span>
      <button className="hover:bg-[#e7e9ea1a] cursor-pointer  p-2 px-3 rounded-full justify-center gap-4 font text-xl font-medium items-center flex text-[#e7e9ea]">
        {children}
        {width >= 1280 ? title : ""}
      </button>
    </span>
  );
};


// Tabs section
function Tabs():React.ReactElement {
  const [width, setwidth] = useState<number>(1024);
  const handleLogout = () => {
    localStorage.removeItem("twitter_account");
    location.reload();
  };
  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen  bg-black w-fit px-4  hidden sm:flex flex-col justify-between py-2">
      <div className="flex flex-col gap-3 xl:justify-normal justify-center ">
        <span className="w-fit">
          <a className="hover:bg-[#e7e9ea1a] cursor-pointer p-2 px-3 rounded-full  font text-xl font-medium flex text-[#e7e9ea]">
            <img src={X} width={35} height={35} />
          </a>
        </span>
        <Btn children={<GoHome color="#e7e9ea" size={25} />} title={"Home"} />
        <Btn
          children={<FiSearch color="#e7e9ea" size={25} />}
          title={"Explore"}
        />
        <Btn
          children={<GrNotification color="#e7e9ea" size={25} />}
          title={"Notifications"}
        />
        <Btn
          children={<RiMailLine color="#e7e9ea" size={25} />}
          title={"Messages"}
        />
        <Btn children={<IoLogoGoogle />} title={"Grok"} />
        <Btn
          children={<FaRegBookmark color="#e7e9ea" size={25} />}
          title={"Bookmarks"}
        />
        <Btn
          children={<MdGroup color="#e7e9ea" size={25} />}
          title={"Communities"}
        />
        <Btn
          children={<img src={X} width={25} height={25} />}
          title={"Preminum"}
        />
        <Btn
          children={<RxLightningBolt color="#e7e9ea" size={25} />}
          title={"Business"}
        />
        <Btn
          children={<LuUser color="#e7e9ea" size={25} />}
          title={"Profile"}
        />
        <Btn children={<CgMoreO color="#e7e9ea" size={25} />} title={"More"} />
        <span>
          <button className="bg-white w-fit hover:bg-[#e6e6e6] cursor-pointer p-2 px-4 xl:w-full rounded-full  font text-xl font-medium text-center  text-black">
            {width >= 1280 ? "Post" : "+"}
          </button>
        </span>
      </div>
      <div
        onClick={handleLogout}
        className="flex  hover:bg-[#e7e9ea1a] my-2 cursor-pointer  rounded-full p-2 justify-between items-center"
      >
        {width >= 1280 ? (
          <>
            <div className="flex gap-2 items-center">
              <span className="size-10">
                <img src={DP} alt="" />
              </span>
              <span className="flex flex-col">
                <p className="font text-[#e7e9ea] text-lg font-semibold">Bot</p>
                <p className="text-[#71767b]">@bot_21</p>
              </span>
            </div>
            <div>
              <BsThreeDots color="#e7e9ea" />
            </div>
          </>
        ) : (
          <>
            <span className="size-10">
              <img src={DP} alt="" />
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default Tabs;
