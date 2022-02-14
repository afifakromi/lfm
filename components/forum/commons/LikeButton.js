import React, { useEffect, useState } from "react";
import { getUsername } from "../../../authentication/utils";
import { forum_db } from "../../../firebase/forumConfig";
// import { dislike, like } from "./functions";

const LikeButton = ({ sourcedata, liked, commentdata }) => {
  const [active, setactive] = useState();
  useEffect(() => {
    if (liked === 1) {
      setactive(true);
    } else {
      setactive(false);
    }
  }, [liked]);
  const like = (postdata, liked, commentdata) => {
    if (!postdata) return;
    if (!commentdata) {
      forum_db
        .collection("posts")
        .doc(postdata.id)
        .update({
          liked:
            liked === 1
              ? postdata.data().liked - 1
              : liked === -1
              ? postdata.data().liked + 2
              : postdata.data().liked + 1,
        });
      forum_db
        .collection("users")
        .doc(getUsername())
        .collection("post_interacted")
        .doc(postdata.id)
        .set({
          state: liked === 1 ? 0 : 1,
        });
    } else {
      forum_db
        .collection("posts")
        .doc(postdata.id)
        .collection("comments")
        .doc(commentdata.id)
        .update({
          liked:
            liked === 1
              ? commentdata.data().liked - 1
              : liked === -1
              ? commentdata.data().liked + 2
              : commentdata.data().liked + 1,
        });
      forum_db
        .collection("users")
        .doc(getUsername())
        .collection("post_interacted")
        .doc(postdata.id)
        .collection("comment_interacted")
        .doc(commentdata.id)
        .set({
          state: liked === 1 ? 0 : 1,
        });
    }
  };

  return (
    <button
      onClick={e => {
        e.preventDefault();
        like(sourcedata, liked, commentdata);
      }}
    >
      {
        <img
          src={active ? "/img/uparrowblue.png" : "/img/uparrowgrey.png"}
          alt=""
          className="h-6"
        />
      }
    </button>
  );
};

export default LikeButton;
