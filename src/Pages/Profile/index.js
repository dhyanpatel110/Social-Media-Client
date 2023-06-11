import React from "react";
// css
import "./Profile.css";
// components
import PostSide from "../../Components/PostSide";
import ProfileCard from "../../Components/ProfileCard";
import ProfileLeft from "../../Components/ProfileLeft";
import RightSide from "../../Components/RightSide";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard location='profilePage' />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
