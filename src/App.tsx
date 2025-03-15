import X from "./assets/X.png";
import Google from "./assets/Google.svg";
import Apple from "./assets/Apple.svg";
import { useEffect, useState } from "react";
import Createaccount from "./Createaccount";
import Signin from "./Signin";

function App() :React.ReactElement{
  const [width, setwidth] = useState<number>(1024);
  const [isopensignin, setIsopensignin] = useState<boolean>(false);
  const [iscreateaccount, setIscreateaccount] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div className="flex bg-black lg:justify-between  flex-col h-screen">
      {isopensignin && <Signin />}
      {iscreateaccount && <Createaccount />}
      <div className=" flex flex-col lg:flex-row lg:size-full h-fit items-center">
        <div className=" lg:w-1/2 ">
          <div className="flex lg:justify-center lg:items-center justify-normal">
            {width >= 1024 ? (
              <img src={X} alt="Xpng" width={550} height={550} />
            ) : (
              <img src={X} alt="Xpng" width={100} height={100} />
            )}
          </div>
        </div>

        <div className=" lg:w-1/2  flex-col my-10">
          <div className="my-10 flex flex-col lg:flex-row gap-4">
            <h1 className="text-[#e7e9ea] font-bold  text-6xl  -tracking-wide font">
              Happening
            </h1>
            <h1 className="text-[#e7e9ea] font-bold  text-6xl  -tracking-wide font">
              now
            </h1>
          </div>
          <p className="text-white font font-semibold text-2xl mb-4">
            Join today.
          </p>

          <div className="flex flex-col max-w-fit ">
            <div className="bg-white hover:bg-[#e6e6e6] flex gap-1 rounded-full justify-center py-2 cursor-pointer my-1">
              {" "}
              <img src={Google} className="h-6" alt="" />{" "}
              <p className="text-black font font-semibold font">
                Sign up with Google
              </p>
            </div>
            <div className="bg-white hover:bg-[#e6e6e6] flex gap-1 rounded-full  justify-center py-2 cursor-pointer my-1">
              {" "}
              <img src={Apple} alt="" className="h-6" />{" "}
              <p className="text-black font-semibold font">
                Sign up with Apple
              </p>
            </div>
            <span className="text-[#71767b] flex justify-around ">
              ──────────── <p className="text-[#e7e9ea] font">or</p>{" "}
              ────────────
            </span>
            <button
              onClick={() => setIscreateaccount(!iscreateaccount)}
              className="bg-[#1d9bf0] hover:bg-[#1d8cd8] text-white font-bold rounded-full py-2 my-1 cursor-pointer"
            >
              Create account
            </button>
            <p className="text-[#71767b] text-xs">
              By signing up, you agree to the{" "}
              <a
                href="https://x.com/tos"
                className="text-[#1d9bf0] hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="https://x.com/privacy"
                className="text-[#1d9bf0] hover:underline"
              >
                Privacy <br /> Policy
              </a>{" "}
              , including{" "}
              <a
                href="https://support.x.com/articles/20170514"
                className="text-[#1d9bf0] hover:underline"
              >
                Cookie Use
              </a>
              .
            </p>
            <div className="flex flex-col mt-12 gap-3">
              <h3 className="text-[#e7e9ea] font-semibold tracking-tight font text-xl">
                Already have an account?
              </h3>
              <button
                onClick={() => setIsopensignin(!isopensignin)}
                className="text-[#1d9bf0] border-1 cursor-pointer rounded-full font-semibold font py-1.5 border-[#536471] hover:bg-[#1d9bf01a]"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-3 mx-1">
        <footer className="flex">
          <ul className="flex  gap-3 text-[#71767b] font text-sm flex-wrap justify-center">
            <li>
              <a href="https://about.x.com" className=" hover:underline">
                About
              </a>
            </li>
            <li>
              <a
                href="https://help.x.com/using-x/download-the-x-app"
                className=" hover:underline"
              >
                Download the X app
              </a>
            </li>
            <li>
              <a href="https://help.x.com" className=" hover:underline">
                Help Center
              </a>
            </li>
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
              <a href="https://blog.x.com" className=" hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="https://careers.x.com" className=" hover:underline">
                Carrers
              </a>
            </li>
            <li>
              <a
                href="https://about.x.com/press/brand-assets"
                className=" hover:underline"
              >
                Brand Resources
              </a>
            </li>
            <li>
              <a
                href="https://ads.x.com/?ref=gl-tw-tw-twitter-advertise"
                className=" hover:underline"
              >
                Advertising
              </a>
            </li>
            <li>
              <a href="https://marketing.x.com" className=" hover:underline">
                Marketing
              </a>
            </li>
            <li>
              <a href="https://business.x.com/" className=" hover:underline">
                X for Business
              </a>
            </li>
            <li>
              <a href="https://developer.x.com" className=" hover:underline">
                Developers
              </a>
            </li>
            <li>
              <a
                href="https://x.com/i/directory/profiles"
                className=" hover:underline"
              >
                Directory
              </a>
            </li>
            <li>
              <a href="" className=" hover:underline">
                Settings
              </a>
            </li>
            <li>© 2025 X Corp.</li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
