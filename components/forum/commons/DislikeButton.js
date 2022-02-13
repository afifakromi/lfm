import React, { useEffect, useState } from "react";
import { forum_db } from "../../../firebase/forumConfig";

const DislikeButton = ({ sourcedata, liked, commentdata }) => {
  //   const dislikecomplicatedcondition = () => {
  //     if (liked) {
  //       setliked(false);
  //     } else {
  //       if (liked === false) {
  //         setliked();
  //       } else {
  //         setliked(false);
  //       }
  //     }
  //   };
  const [active, setactive] = useState();
  useEffect(() => {
    if (liked === -1) {
      setactive(true);
    } else {
      setactive(false);
    }
  }, [liked]);
  //   if (sourcedata.id === "1") console.log(active, liked);
  const dislike = (postdata, liked) => {
    if (!postdata) return;
    // console.log(liked);
    if (!commentdata) {
      forum_db
        .collection("posts")
        .doc(postdata.id)
        .update({
          disliked:
            liked === 1
              ? postdata.data().disliked + 2
              : liked === -1
              ? postdata.data().disliked - 1
              : postdata.data().disliked + 1,
        });
      forum_db
        .collection("users")
        .doc("bintang")
        .collection("post_interacted")
        .doc(postdata.id)
        .set({
          state: liked === -1 ? 0 : -1,
        });
    } else {
      forum_db
        .collection("posts")
        .doc(postdata.id)
        .collection("comments")
        .doc(commentdata.id)
        .update({
          disliked:
            liked === 1
              ? commentdata.data().disliked + 2
              : liked === -1
              ? commentdata.data().disliked - 1
              : commentdata.data().disliked + 1,
        });
      forum_db
        .collection("users")
        .doc("bintang")
        .collection("post_interacted")
        .doc(postdata.id)
        .collection("comment_interacted")
        .doc(commentdata.id)
        .set({
          state: liked === -1 ? 0 : -1,
        });
    }
  };

  return (
    <button
      onClick={e => {
        e.preventDefault();
        dislike(sourcedata, liked);
      }}
    >
      <img
        src={active ? "/img/downarrowred.png" : "/img/downarrowgrey.png"}
        alt=""
        className="h-6"
      />
    </button>
  );
};

export default DislikeButton;
