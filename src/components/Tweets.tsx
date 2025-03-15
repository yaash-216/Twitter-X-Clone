import { MdOutlineGifBox } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoLogoGoogle } from "react-icons/io";
import { FiSmile } from "react-icons/fi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { BiPoll } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import DP from "../assets/Default_pfp.svg.webp";
import Post from "./Post";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface t {
  _id: string;
  name: string;
  pic: string;
  username: string;
  tweet: string;
}


// Sample Data
const post: t[] = [
  {
    _id: "1",
    name: "Dulquer Salmaan",
    username: "dulQuer",
    pic: "https://pbs.twimg.com/profile_images/1652302478346690563/7H-8y-OE_400x400.jpg",
    tweet:
      "Sita Ramam is a 2022 Indian Telugu-language period romantic drama film directed by Hanu Raghavapudi. Produced by C. Aswani Dutt, under Vyjayanthi Movies and Swapna Cinema, it starred Dulquer Salmaan and Mrunal Thakur in the titular roles, alongside Rashmika Mandanna.",
  },
  {
    _id: "2",
    name: "Ranbir kapoor",
    username: "ranbir",
    pic: "https://static.theprint.in/wp-content/uploads/2023/01/ANI-20221231215323.jpg",
    tweet:
      "Tamasha is a 2015 Indian coming-of-age romantic drama film written and directed by Imtiaz Ali and produced by Sajid Nadiadwala from his studio, Nadiadwala Grandson Entertainment. It stars Ranbir Kapoor and Deepika Padukone.",
  },
  {
    _id: "3",
    name: "VijaySethupathi",
    username: "VijaySethuOffl",
    pic: "https://pbs.twimg.com/profile_images/1701117064755191808/nk117GiN_400x400.jpg",
    tweet:
      " 96 is a 2018 Indian Tamil-language romantic drama film written and directed by C. Prem Kumar in his directorial debut. Produced by S. Nanthagopal of Madras Enterprises, the film was distributed by Lalit Kumar under his banner, Seven Screen Studio. Vijay Sethupathi and Trisha Krishnan are in the prominent roles as Ram and Jaanu",
  },
  {
    _id: "4",
    name: "Dhanush",
    username: "dhanushkraja",
    pic: "https://pbs.twimg.com/profile_images/1887090441113247744/9BqZ6WG2_400x400.jpg",
    tweet:
      " Thiruchitrambalam is a delivery man who lives with his father and grandfather blames the former for the loss of his mother and sister and is not on good terms with the latter. Meanwhile, his love life is not so successful.",
  },
  {
    _id: "5",
    name: "Salman khan",
    username: "BeingSalmanKhan",
    pic: "https://pbs.twimg.com/profile_images/1562753790369218560/wtiHWrkG_400x400.jpg",
    tweet:
      " Kyon Ki is a 2005 Indian Hindi-language romantic drama film written and directed by Priyadarshan and produced by Sunil Manchanda and Mukesh Talreja",
  },
  {
    _id: "6",
    name: "Nani",
    username: "NameisNani",
    pic: "https://pbs.twimg.com/profile_images/1881327885287596032/iOhljV96_400x400.jpg",
    tweet:
      "Hi Papa is a 2023 Indian Telugu-language romantic drama film directed by Shouryuv, in his directoral debut, and produced by Vyra Entertainments. The film stars Nani and Mrunal Thakur in lead roles.",
  },
];


// Tweets Section
function Tweets():React.ReactElement {
  const [data, setData] = useState<t[]>([]);
  const [_data_, set_Data_] = useState<string>("");
  const navigate = useNavigate();
  const token: any = localStorage.getItem("twitter_account");
  if (!token) {
    navigate("/x");
  }
  const handleLogout = () => {
    localStorage.removeItem("twitter_account");
    location.reload();
  };
  useEffect(() => {
    const get = async () => {
      try {
        setData(post);
      } catch (error: any) {
        console.log(error);
      }
    };
    get();
  }, []);
  return (
    <div className="w-xl   border-1  border-[#2f3336]  max-h-screen overflow-y-auto ">
      <div className="w-xl fixed min-h-full flex-col flex sm:hidden justify-end">
        <div className=" justify-end p-10  flex sm:hidden ">
          <button
            onClick={handleLogout}
            className="cursor-pointer bg-white p-2 rounded-full"
          >
            <MdOutlineLogout size={30} color="black" />
          </button>
        </div>
      </div>
      <nav className="border-b-1  border-[#2f3336]  sticky top-0 backdrop-blur-3xl  ">
        <ul className="flex cursor-pointer">
          <li className="text-[#e7e9ea] py-3 hover:bg-[#e7e9ea1a] text-center underline decoration-2 decoration-[#1d9bf0] underline-offset-16 w-1/2 font font-semibold">
            For you
          </li>
          <li className="text-[#71767b] py-3 hover:bg-[#e7e9ea1a] text-center w-1/2 font font-medium">
            Following
          </li>
        </ul>
      </nav>

      <div className="p-2.5 flex gap-2 border-b-1 border-[#2f3336] ">
        <div className="size-10">
          <img src={DP} alt="" />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="What is happening?!"
            value={_data_}
            onChange={(e) => set_Data_(e.target.value)}
            maxLength={300}
            className="placeholder:text-[#71767b] font text-xl w-full   focus:outline-none  text-[#e7e9ea] "
          />
          <div className="flex items-center justify-between py-2">
            <div className="flex gap-2 cursor-pointer">
              <HiOutlinePhotograph
                color="#1d9bf0"
                size={20}
                className="hover:bg-[#1d9bf01a]"
              />
              <MdOutlineGifBox
                color="#1d9bf0"
                size={20}
                className="hover:bg-[#1d9bf01a]"
              />
              <IoLogoGoogle
                color="#1d9bf0"
                size={20}
                className="hover:bg-[#1d9bf01a]"
              />
              <BiPoll
                color="#1d9bf0"
                size={20}
                className="hover:bg-[#1d9bf01a]"
              />
              <FiSmile
                color="#1d9bf0"
                size={20}
                className="hover:bg-[#1d9bf01a]"
              />
              <RiCalendarScheduleLine
                color="#1d9bf0"
                size={20}
                className="hover:bg-[#1d9bf01a]"
              />
              <IoLocationOutline
                color="#1d9bf0"
                size={20}
                className="hover:bg-[#1d9bf01a]"
              />
            </div>
            <div>
              <button
                disabled={_data_ ? false : true}
                className="bg-white disabled:opacity-50 disabled:hover:bg-white  hover:bg-[#e6e6e6] cursor-pointer p-1 px-4 rounded-full  font text-lg font-medium text-center  text-black"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      {data.map((d) => (
        <Post key={d._id} part={d} />
      ))}
    </div>
  );
}

export default Tweets;
