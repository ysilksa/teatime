import React from "react";
import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa";
// https://react-icons.github.io/react-icons/

// heart icon for the post 
export function HeartIcon({size = 20, color = '#2A2B2A'}) {
    return (
    <div>
        <FaRegHeart size = {size}  color = {color} />
    </div>
    );
  }

// comment icon for the post 
export function CommentIcon({size = 20, color = '#2A2B2A'}) {
  return (
   <div>
        <FaRegCommentAlt size = {size}  color = {color} />
   </div>
  );
}