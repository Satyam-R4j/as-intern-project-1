import React from "react";
import { Post } from "../types";

import tanStackImg from "../../public/tanstack.png";

interface PostCardprops {
  post: Post;
  onClick: () => void;
}

export const PostCard: React.FC<PostCardprops> = ({ post, onClick }) => (
  <div
    className="p-4 border hover:scale-105 transition-transform  border-gray-400 w-full h-full  rounded-lg mt-3  shadow-md bg-gray-900 cursor-pointer flex-wrap  flex items-center items-evenly gap-3 md:gap-2  "
    onClick={onClick}
  >
    <span>
      <img className="w-20 h-20   " src={tanStackImg} alt="" />
    </span>
    <span>
      <h3 className="text-lg text-white  font-bold">
        {post.title.substring(0, 10)}
      </h3>
    </span>
    <span>
      <p className="text-gray-400 ">{post.body.substring(0, 50)}...</p>
    </span>
  </div>
);

export default PostCard;
