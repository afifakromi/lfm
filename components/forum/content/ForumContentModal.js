import React, { useEffect, useState } from "react";
import { forum_db } from "../../../firebase/forumConfig";
import ForumComment from "./ForumComment";
import ForumReply from "./ForumReply";
import { dislike, like } from "./functions";
import LikeButton from "../commons/LikeButton";
import DislikeButton from "../commons/DislikeButton";

const ForumContentModal = ({
  togglemodal,
  settogglemodal,
  postdata,
  liked,

  // setpostdata,
}) => {
  const [comments, setcomments] = useState();
  const [isEndComment, setisEndComment] = useState(false);
  const [lastVisible, setlastVisible] = useState();
  const [commentInteracted, setcommentInteracted] = useState([]);

  useEffect(() => {
    if (postdata) {
      // console.log(postdata.id);
      forum_db
        .collection("posts")
        .doc(postdata.id)
        .collection("comments")
        .orderBy("created_at", "desc")
        .limit(3)
        .onSnapshot(res => {
          var data = [];
          res.forEach(doc => {
            data.push(doc);
          });
          setcomments(data);
          setlastVisible(res.docs[res.docs.length - 1]);
        });
    }
  }, [postdata]);

  useEffect(() => {
    if (!postdata) return;
    forum_db
      .collection("users")
      .doc("bintang")
      .collection("post_interacted")
      .doc(postdata.id)
      .collection("comment_interacted")
      .onSnapshot(res => {
        if (res.docs.length > 0) {
          var data = [];
          res.forEach(doc => {
            // console.log(doc.data());
            data.push(doc);
          });
          setcommentInteracted(data);
        }
      });
  }, [postdata]);

  useEffect(() => {
    if (togglemodal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [togglemodal]);
  // console.log("a");

  const toggleLoadComments = () => {
    if (comments) {
      return comments.map((doc, idx) => {
        // console.log(doc.data());
        return (
          <ForumComment
            postdata={postdata}
            commentdata={doc}
            key={idx}
            commentInteracted={
              commentInteracted.filter(comment => comment.id === doc.id)[0]
            }
          />
        );
      });
    } else {
      return <p className="text-center mb-3">...</p>;
    }
  };
  const loadMoreComments = lastVisible => {
    if (!lastVisible) return;
    console.log(lastVisible);
    forum_db
      .collection("posts")
      .doc(postdata.id)
      .collection("comments")
      .orderBy("created_at", "desc")
      .startAfter(lastVisible)
      .limit(3)
      .onSnapshot(res => {
        if (res.docs.length == 0) {
          setisEndComment(true);
        } else {
          var data = [];
          res.forEach(doc => {
            console.log(doc.data(), doc.id);
            data.push(doc);
          });
          // console.log(data);
          setcomments(prevComments => [...prevComments, ...data]);
          setlastVisible(res.docs[res.docs.length - 1]);
        }
      });
  };

  return (
    <>
      <div
        style={{ backgroundColor: "rgba(209, 213, 219, .75 )" }}
        className={
          (togglemodal ? "visible " : "hidden ") +
          "fixed w-full h-full top-0 left-0 py-20 overflow-y-auto"
        }
        data-modal
        onClick={e => {
          e.preventDefault();
          if (e.target.dataset.modal) {
            settogglemodal();
          }
        }}
      >
        <div
          className={
            (togglemodal && postdata ? "visible " : "hidden ") +
            "flex p-8 rounded-xl mx-auto xl:w-1/2 md:w-3/5 max-w-4xl sm:w-3/4 bg-white shadow-lg"
          }
        >
          {postdata ? (
            <>
              <div className="flex flex-col mr-9 items-center">
                {/* {console.log(postdata.data())} */}
                <LikeButton sourcedata={postdata} liked={liked} />
                <p className="my-3 text-center">
                  {postdata.data().liked - postdata.data().disliked}
                </p>
                <DislikeButton sourcedata={postdata} liked={liked} />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center w-full mb-1">
                  <p className="text-black text-xl font-bold mr-auto">
                    {postdata.data().topic}
                  </p>
                  <img src="/img/pp.png" alt="" className="mr-1" />
                </div>

                <p className="text-black text-sm font-gilroy my-3">
                  {postdata.data().description}
                </p>
                <div className="flex flex-col w-full h-full py-4 border-t-2 border-gray-200">
                  <div
                    className="flex flex-col w-full overflow-y-auto"
                    // style={{ maxHeight: "38rem" }}
                  >
                    {toggleLoadComments()}
                    {isEndComment ? (
                      ""
                    ) : (
                      <button
                        className=" text-customBlueForum mb-2"
                        onClick={e => {
                          e.preventDefault();
                          loadMoreComments(lastVisible);
                        }}
                      >
                        load more...
                      </button>
                    )}
                  </div>
                  <div className="w-full border-t-2 border-gray-200"></div>
                  <ForumReply />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ForumContentModal;
