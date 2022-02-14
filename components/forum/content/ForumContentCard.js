import React, { useEffect, useState } from "react";
import { forum_db } from "../../../firebase/forumConfig";
import { createdAt } from "../../../helper/time";
import firebase from "firebase/app";
import LikeButton from "../commons/LikeButton";
import DislikeButton from "../commons/DislikeButton";
import ForumContentModal from "./ForumContentModal";
import ForumMedia from "./ForumMedia";

const ForumContentCard = ({ postdata, interacted }) => {
  const [togglemodal, settogglemodal] = useState(false);
  const [liked, setliked] = useState();
  useEffect(() => {
    if (interacted) {
      setliked(interacted.data().state);
    }
  }, [interacted]);

  return (
    <div className="flex p-5 bg-white shadow-lg rounded-xl mb-12">
      <div className="flex flex-col mr-9 items-center">
        <LikeButton sourcedata={postdata} liked={liked} />
        <p className="my-3 text-center">
          {postdata.data().liked - postdata.data().disliked}
        </p>
        <DislikeButton sourcedata={postdata} liked={liked} />
      </div>
      <div className="flex flex-col w-full">
        <p className="text-gray-600 text-xl font-bold mb-1">
          {postdata.data().topic}
        </p>
        <p className="text-gray-500 text-sm font-gilroy mt-3">
          {postdata.data().description}
        </p>
        <ForumMedia media={postdata} />

        <div className="flex pt-2 border-t-2 border-gray-200 items-center text-sm mt-3">
          <img src="/img/pp.png" alt="" />
          <p className="font-gilroy ml-2">Posted by</p>
          <p className="font-gilroy ml-4 text-customBlueForum">
            {postdata.data().username}
          </p>
          <p className="font-gilroy ml-10 ">
            {createdAt(postdata.data().created_at.seconds)}
          </p>
          <button
            className="ml-auto"
            onClick={e => {
              e.preventDefault();
              settogglemodal(true);
            }}
          >
            <img src="/img/commentgrey.png" alt="" />
          </button>
          <p className="ml-2 text-gray-500 mr-5">{postdata.data().comments}</p>
          {/* <img src="/img/sharegrey.png" alt="" className="ml-3 mr-8" /> */}
        </div>
      </div>
      <ForumContentModal
        postdata={postdata}
        togglemodal={togglemodal}
        settogglemodal={settogglemodal}
        liked={liked}
      />
    </div>
  );
};

export default ForumContentCard;
