import React, { useState } from "react";
// css
import "./RightSide.css";
// component
import TrendCard from "../TrendCard";
import ShareModal from "../ShareModal";
import NavIcons from "../NavIcons";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      {/* Side Navbar */}
      <NavIcons />

      {/* TrendCard */}
      <TrendCard />

      {/* Share buttong */}
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
