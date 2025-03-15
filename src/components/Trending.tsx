import { BsThreeDots } from "react-icons/bs";
import Dhanush from "../assets/Dhanush.webp";
import { FiSearch } from "react-icons/fi";

const Trending_txt = ({ trend }: { trend: string }): React.ReactNode => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-[#71767b] text-sm font">Trending in India</p>
        <h4 className="text-[#e7e9ea] text-base font-bold">{trend}</h4>
        <p className="text-[#71767b] text-sm font">
          {Math.floor(Math.random() * 212)}k posts
        </p>
      </div>
      <div>
        <BsThreeDots className="hover:text-[#1d9bf0] text-[#71767b] cursor-pointer" />
      </div>
    </div>
  );
};

// Trending section
function Trending():React.ReactElement {
  return (
    <div className="hidden lg:max-w-70  xl:max-w-96 pt-1 pl-5 lg:flex flex-col gap-3">
      <div className="rounded-full border-1 border-[#2f3336] flex items-center p-2 gap-1">
        <FiSearch color="#71767b" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-[#71767b] font  focus:outline-none  text-[#e7e9ea] "
        />
      </div>
      <div className="border-1 border-[#2f3336] w-full rounded-xl p-3 gap-2 flex flex-col">
        <h3 className="text-[#e7e9ea] text-xl font-black">
          Subscribe to Premium
        </h3>
        <p className="text-[#e7e9ea] font">
          Subscribe to unlock new features and if eligible, receive a share of
          revenue.
        </p>
        <button className="bg-[#1d9bf0] w-30 hover:bg-[#1d8cd8] text-[#e7e9ea] font-bold rounded-full p-2  cursor-pointer">
          Subscribe
        </button>
      </div>

      <div className="border-1 border-[#2f3336] w-full rounded-xl flex flex-col p-3 gap-2">
        <h3 className="text-[#e7e9ea] text-xl font-semibold font">
          What's happening
        </h3>
        <div className="flex gap-2">
          <img src={Dhanush} width={100} height={100} className="rounded-xl" />
          <span>
            <h4 className="text-[#e7e9ea] text-base font-bold">
              Dhanush in T.I.M.
            </h4>
            <p className="text-[#71767b] text-sm">LIVE</p>
          </span>
        </div>
        <Trending_txt trend="#Sitaramam" />
        <Trending_txt trend="#Tamasha" />
        <Trending_txt trend="#Thiruchitrabalam" />
        <Trending_txt trend="#Premalu" />
        <div>
          <button className="text-[#1d9bf0] cursor-pointer font">
            Show more
          </button>
        </div>
      </div>
      <div>
        <ul className="flex gap-3 px-2 text-[#71767b] font text-sm flex-wrap">
          <li>
            <a href="https://x.com/tos" className=" hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="https://x.com/privacy" className=" hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://support.x.com/articles/20170514"
              className=" hover:underline"
            >
              Cookie policy
            </a>
          </li>
          <li>
            <a
              href="https://help.x.com/resources/accessibility"
              className=" hover:underline"
            >
              Accessibility
            </a>
          </li>
          <li>
            <a
              href="https://business.x.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=adsinfo"
              className=" hover:underline"
            >
              Ads info
            </a>
          </li>
          <li>
            <a href="" className=" hover:underline">
              More
            </a>
          </li>
          <li>© 2025 X Corp.</li>
        </ul>
      </div>
    </div>
  );
}

export default Trending;
