import React from "react";
import X from "./assets/X.png";
import Google from "./assets/Google.svg";
import Apple from "./assets/Apple.svg";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router";
import Reload from "./assets/reload.svg";

const First_Page = ({ setInfo }: { setInfo: Function }): React.ReactNode => {
  const [email, setEmail] = useState<string>("");
  const handleNext = () => {
    setInfo(email);
  };
  return (
    <div className=" bg-black rounded-xl md:w-xl w-full md:h-fit h-full">
      <div className="flex m-2">
        <button
          onClick={() => location.reload()}
          className="text-[#e7e9ea] cursor-pointer hover:bg-[#eff3f41a] rounded-full px-2 text-3xl "
        >
          ×
        </button>
        <span className="w-full flex justify-center">
          <img src={X} width={40} height={40} />
        </span>
      </div>
      <div className="flex flex-col md:px-30 px-12 gap-6 py-1 my-1">
        <h1 className="text-3xl font-semibold font text-[#e7e9ea]">
          Sign in to X
        </h1>
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
          <p className="text-black font-semibold font">Sign up with Apple</p>
        </div>
        <span className="text-[#71767b] flex justify-around ">
          ─────────── <p className="text-[#e7e9ea] font">or</p> ───────────
        </span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="placeholder:text-[#71767b] p-2 py-3 rounded-md border-1 border-[#2f3336] font text-xl  focus:outline-none focus:ring-2 focus:ring-[#1d9bf0] text-[#e7e9ea] "
        />
        <button
          disabled={
            email.endsWith("@gmail.com") && email.length > 10 ? false : true
          }
          className="bg-white disabled:opacity-50 disabled:hover:bg-white hover:bg-[#e6e6e6] cursor-pointer py-2    rounded-full  font text-xl font-medium text-center  text-black"
          onClick={handleNext}
        >
          Next
        </button>
        <button className="text-[#e7e9ea] border-1 cursor-pointer rounded-full font-semibold font py-1.5 border-[#536471] hover:bg-[#e7e9ea1a]">
          Forgot Password?
        </button>
        <p className="text-[#71767b] text-base font mb-20 mt-12">
          Don't have an account?{" "}
          <a href="" className="text-[#1d9bf0] hover:underline">
            Sign up{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

const Second_Page = ({ email }: { email: string }): React.ReactNode => {
  const [isshow, setIsshow] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      localStorage.setItem(
        "twitter_account",
        JSON.stringify({email:email,password:password})
      );
      navigate("/");
    } catch (error: any) {
      console.log(error)
    }
  };
  return (
    <div className=" bg-black rounded-xl md:w-xl w-full md:h-fit h-full">
      <div className="flex m-2">
        <button
          onClick={() => location.reload()}
          className="text-[#e7e9ea] cursor-pointer hover:bg-[#eff3f41a] rounded-full px-2 text-3xl "
        >
          ×
        </button>
        <span className="w-full flex justify-center">
          <img src={X} width={40} height={40} />
        </span>
      </div>
      <div className="flex flex-col md:px-30 px-12 gap-6 py-1 my-1">
        <h1 className="text-3xl font-semibold font text-[#e7e9ea]">
          Enter your Password
        </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          disabled={true}
          className="bg-[#202327] opacity-50 p-2 py-3 rounded-md border-1 border-[#2f3336] font text-xl   text-[#71767b] "
        />
        <span>
          <span className="flex ">
            <input
              type={isshow ? "text" :"password" }
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:text-[#71767b] p-2 py-3 w-full rounded-s-md  border-r-0  border-1 border-[#2f3336] font text-xl     focus:outline-none   text-[#e7e9ea]"
            />
            <button
              className=" border-l-0 border-1 px-2 cursor-pointer  border-[#2f3336]"
              onClick={() => {
                setIsshow(!isshow);
              }}
            >
              {isshow ? (
                 <FiEyeOff className="text-[#e7e9ea]" size={20} />
              ) : (
                <FiEye className="text-[#e7e9ea]" size={20} />
               
              )}
            </button>
          </span>
          <a href="" className="text-[#1d9bf0] text-sm hover:underline">
            Forgot Password?
          </a>
        </span>
        <span className="flex flex-col gap-4 mt-16 mb-2">
          <button
            disabled={password ? false : true}
            onClick={handleLogin}
            className="bg-white disabled:opacity-50 disabled:hover:bg-white hover:bg-[#e6e6e6] cursor-pointer p-3 mt-12   rounded-full  font text-xl font-medium text-center  text-black"
          >
            Log in
          </button>
          <p className="text-[#71767b] text-base font">
            Don't have an account?{" "}
            <a href="" className="text-[#1d9bf0] hover:underline">
              Sign up
            </a>
          </p>
        </span>
      </div>
    </div>
  );
};


// Signin Page
function Signin() :React.ReactElement{
  const [email, setEmail] = useState<string>("");
  const [isloading, setisloading] = useState<boolean>(true);
  if (isloading) {
    setTimeout(() => {
      setisloading(false);
    }, 2000);
    return (
      <div className="flex fixed  h-screen w-screen bg-[#5b708366] justify-center items-center">
        <div className="bg-black w-xl h-96 rounded-xl flex justify-center items-center">
          <img src={Reload} className="animate-spin" width={20} height={20} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex fixed h-screen w-screen bg-[#5b708366] justify-center items-center">
      {email ? <Second_Page email={email} /> : <First_Page setInfo={setEmail} />}
    </div>
  );
}

export default Signin;
