import { useState } from "react";
import X from "./assets/X.png";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router";
import Reload from "./assets/reload.svg";

interface info {
  name: string;
  email: string;
  month: string;
  date: string;
  year: string;
}

const First_Page = ({
  setInformation,
}: {
  setInformation: Function;
}): React.ReactNode => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const handleNext = () => {
    setInformation({
      name: name,
      email: email,
      month: month,
      date: date,
      year: year,
    });
  };
  return (
    <>
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
        <div className="flex flex-col px-12 gap-6 py-1 my-1">
          <h1 className="text-3xl font-bold text-[#e7e9ea]">
            Create your account
          </h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="placeholder:text-[#71767b] p-2 py-3 rounded-md border-1 border-[#2f3336] font text-xl  focus:outline-none focus:ring-2 focus:ring-[#1d9bf0]  text-[#e7e9ea]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder:text-[#71767b] p-2 py-3 rounded-md border-1 border-[#2f3336] font text-xl  focus:outline-none focus:ring-2 focus:ring-[#1d9bf0] text-[#e7e9ea] "
          />
          <span>
            <h3 className="font-bold text-[#e7e9ea]">Date of birth</h3>
            <p className="text-[#71767b] font">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
          </span>
          <span className="flex justify-between ">
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className=" bg-black md:p-2 p-0 py-3 rounded-md border-1 border-[#2f3336] font text-xl  focus:outline-none focus:ring-2 focus:ring-[#1d9bf0] text-[#e7e9ea] "
            >
              <option value="" className="text-[#71767b]">
                Month
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className=" bg-black md:px-4 px-1 py-3 rounded-md border-1 border-[#2f3336] font text-xl  focus:outline-none focus:ring-2 focus:ring-[#1d9bf0] text-[#e7e9ea] "
            >
              <option value="" className="text-[#71767b]">
                Date
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className=" bg-black  md:px-4  py-3 rounded-md border-1 border-[#2f3336] font text-xl  focus:outline-none focus:ring-2 focus:ring-[#1d9bf0] text-[#e7e9ea] "
            >
              <option value="" className="text-[#71767b]">
                Year
              </option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
            </select>
          </span>
          <button
            disabled={
              name &&
              email.endsWith("@gmail.com") &&
              email.length > 10 &&
              month &&
              date &&
              year
                ? false
                : true
            }
            className="bg-white disabled:opacity-50 disabled:hover:bg-white hover:bg-[#e6e6e6] cursor-pointer p-3 mt-12   rounded-full  font text-xl font-medium text-center  text-black"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const Second_Page = ({ information }: { information: info }): React.ReactNode => {
  const [isshow, setIsshow] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      localStorage.setItem(
        "twitter_account",
        JSON.stringify({ email: information.email, password: password })
      );
      navigate("/");
    } catch (error: any) {
      console.log(error);
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
      <div className="flex flex-col px-12 py-2 my-1 gap-28 md:h-fit  justify-between md:justify-normal">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-[#e7e9ea]">
            You'll need a password
          </h1>
          <p className="text-[#71767b] font">
            Make sure it's 8 characters or more
          </p>
          <span className="flex ">
            <input
              type={isshow ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:text-[#71767b] p-2 py-3 w-full rounded-s-md border-r-0  border-1 border-[#2f3336] font text-xl  focus:outline-none   text-[#e7e9ea]"
            />
            <button
              className=" border-l-0 rounded-e-md border-1 px-2 cursor-pointer  border-[#2f3336]"
              onClick={() => {
                setIsshow(!isshow);
              }}
            >
              {isshow ? (
                <FiEye className="text-[#e7e9ea]" size={20} />
              ) : (
                <FiEyeOff className="text-[#e7e9ea]" size={20} />
              )}
            </button>
          </span>
        </div>
        <div className=" flex flex-col gap-4">
          <p className="text-[#71767b] md:text-base font text-sm">
            By signing up, you agree to the{" "}
            <a href="" className="text-[#1d9bf0] hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="" className="text-[#1d9bf0] hover:underline">
              Privacy Policy
            </a>
            , including{" "}
            <a href="" className="text-[#1d9bf0] hover:underline">
              Cookie Use
            </a>
            . X may use your contact information, including your email address
            and phone number for purposes outlined in our Privacy Policy, like
            keeping your account secure and personalizing our services,
            including ads.
            <a href="" className="text-[#1d9bf0] hover:underline">
              {" "}
              Learn more
            </a>
            . Others will be able to find you by email or phone number, when
            provided, unless you choose otherwise{" "}
            <a href="" className="text-[#1d9bf0] hover:underline">
              here
            </a>
            .
          </p>
          <button
            disabled={password.length >= 8 ? false : true}
            className="bg-white w-full disabled:opacity-50 disabled:hover:bg-white hover:bg-[#e6e6e6] cursor-pointer p-3    rounded-full  font text-xl font-medium text-center  text-black"
            onClick={handleSignup}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
// Createaccount Page

function Createaccount():React.ReactElement {
  const [information, setInformation] = useState<info>();
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
      {information ? (
        <Second_Page information={information} />
      ) : (
        <First_Page setInformation={setInformation} />
      )}
    </div>
  );
}

export default Createaccount;
