import React, { useEffect, useState } from "react";
import { forum_db } from "../../../firebase/forumConfig";
import { createdAt } from "../../../helper/time";
import firebase from "firebase/app";
import LikeButton from "../commons/LikeButton";
import DislikeButton from "../commons/DislikeButton";
import ForumContentModal from "./ForumContentModal";

const ForumContentCard = ({ postdata, interacted }) => {
  const [togglemodal, settogglemodal] = useState(false);
  const [liked, setliked] = useState();
  useEffect(() => {
    if (interacted) {
      // console.log(interacted.data().state);
      setliked(interacted.data().state);
    }
  }, [interacted]);
  // if (postdata.id === "1") console.log(liked);

  return (
    <div
      className="flex p-5 bg-white shadow-lg rounded-xl mb-12"
      // style={{ maxWidth: "55rem" }}
    >
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
        <p className="text-gray-500 text-sm font-gilroy my-3">
          {postdata.data().description}
        </p>
        {/* <button className="">
          <img
            src="https://drive.google.com/thumbnail?id=1iXnktnoZq6z9BGsx3BtVhCLX_e2LVGhG"
            alt=""
          />
        </button> */}
        <video width="320" height="240" controls className="rounded-xl mb-3">
          <source
            src="https://drive.google.com/uc?export=preview&id=1zZS_6vsG6LXzM_q9kYrG2xYBHZGIBb0z"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* <div>
          <iframe
            src="https://drive.google.com/file/d/1zZS_6vsG6LXzM_q9kYrG2xYBHZGIBb0z/preview"
            width="640"
            height="480"
            allow="autoplay"
            frameborder="0"
            scrolling="no"
            seamless=""
          ></iframe>
        </div> */}
        <div className="flex pt-2 border-t-2 border-gray-200 items-center text-sm">
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
