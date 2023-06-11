import React from "react";
// css
import "./PostSide.css";
// component
import Posts from "../Posts";
import PostShare from "../PostShare";


const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
