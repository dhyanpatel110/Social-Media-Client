import React from "react";
// css
import "./Home.css";
// components
import PostSide from "../../Components/PostSide";
import ProfileSide from "../../Components/profileSide";
import RightSide from "../../Components/RightSide";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
