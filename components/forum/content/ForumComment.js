import React, { useEffect, useState } from "react";
import { createdAt } from "../../../helper/time";
import DislikeButton from "../commons/DislikeButton";
import LikeButton from "../commons/LikeButton";
import { dislike, like } from "./functions";

const ForumComment = ({ postdata, commentdata, commentInteracted }) => {
  // console.log(commentdata);
  const [commentLiked, setcommentLiked] = useState();
  useEffect(() => {
    if (!commentInteracted) return;
    setcommentLiked(commentInteracted.data().state);
  }, [commentInteracted]);
  // if (postdata.id === "1" && commentdata.id === "2") console.log(commentLiked);
  return (
    <div className="flex bg-gray-100 w-full px-5 py-4 mb-5">
      {commentdata ? (
        <>
          <div className="flex flex-col items-center mr-4 min-w-min">
            <img src="/img/pp.png" alt="" className="mb-3" />
            <LikeButton
              sourcedata={postdata}
              liked={commentLiked}
              commentdata={commentdata}
            />
            <p className="my-3 text-center">
              {commentdata.data().liked - commentdata.data().disliked}
            </p>
            <DislikeButton
              sourcedata={postdata}
              liked={commentLiked}
              commentdata={commentdata}
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex mt-2">
              <p className="mr-auto text-customBlueForum font-gilroy">
                {commentdata.data().username}
              </p>
              <p className="font-gilroy text-sm mr-5 ">
                {createdAt(commentdata.data().created_at.seconds)}
              </p>
            </div>
            <p className="font-gilroy text-sm mt-2 text-black">
              {commentdata.data().description}
            </p>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ForumComment;
