import React, { useState } from "react";
import Tabs from "./components/Tabs";
import Tweets from "./components/Tweets";
import Trending from "./components/Trending";
import Reload from "./assets/reload.svg";
import { useNavigate } from "react-router";

// Home Page
function Home():React.ReactElement {
  const navigate = useNavigate();
  const token: any = localStorage.getItem("twitter_account");
  const [loading, setLoading] = useState<boolean>(true);
  if (loading) {
    setTimeout(() => {
      if (!token) {
        navigate("/x");
        return;
      }
      setLoading(false);
    }, 2000);
    return (
      <div className="flex size-full justify-center items-center">
        <img src={Reload} className="animate-spin" width={25} height={25} />
      </div>
    );
  }
  return (
    <div className=" bg-black flex justify-center gap-2 ">
      <Tabs />
      <Tweets />
      <Trending />
    </div>
  );
}

export default Home;
