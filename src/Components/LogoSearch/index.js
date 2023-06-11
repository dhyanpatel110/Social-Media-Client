import React from "react";
// css
import './LogoSearch.css'
// assets
import Logo from "../../img/logo.png";
// icon
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} height="45px" width="45px" alt="" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
