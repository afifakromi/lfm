import { forum_db } from "../../../firebase/forumConfig";

export const like = postdata => {
  if (!postdata) return;
  forum_db
    .collection("posts")
    .doc(postdata.id)
    .update({
      liked: postdata.data().liked + 1,
    });
};

export const dislike = postdata => {
  if (!postdata) return;
  forum_db
    .collection("posts")
    .doc(postdata.id)
    .update({
      disliked: postdata.data().disliked + 1,
    });
};
