import React from "react";
// assets
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
// icon
import { UilEstate, UilSetting, UilSnapchatAlt, UilCommentAltChartLines } from "@iconscout/react-unicons";
// react router dom
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <UilEstate className='nav-btn' />
      </Link>
      <UilSetting className='nav-btn' />
      <UilSnapchatAlt className='nav-btn' />
      <Link to="../chat">
        <UilCommentAltChartLines className='nav-btn' />
      </Link>
    </div>
  );
};

export default NavIcons;
