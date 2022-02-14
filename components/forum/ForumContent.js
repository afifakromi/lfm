import React, { useEffect, useState } from "react";
import { getUsername } from "../../authentication/utils";
import { forum_db } from "../../firebase/forumConfig";
import ForumContentCard from "./content/ForumContentCard";
import ForumContentPagination from "./content/ForumContentPagination";

const ForumContent = () => {
  const [interacted, setinteracted] = useState([]);
  const [posts, setposts] = useState();
  const [page, setpage] = useState(1);
  const [maxPage, setmaxPage] = useState();

  useEffect(() => {
    const query = forum_db
      .collection("posts")
      .orderBy("created_at", "desc")
      .onSnapshot(res => {
        var data = [];
        res.forEach(doc => {
          data.push(doc);
        });
        setposts(data);
        setmaxPage(Math.ceil(res.docs.length / 3));
      });
    return query;
  }, []);
  useEffect(() => {
    if (!posts) return;
    forum_db
      .collection("users")
      .doc(getUsername())
      .collection("post_interacted")
      .onSnapshot(res => {
        if (res.docs.length > 0) {
          var data = [];
          res.forEach(doc => {
            data.push(doc);
          });
          setinteracted(data);
        }
      });
  }, [posts]);

  const generateContent = () => {
    if (!posts) return;
    var data = [];
    const start = (page - 1) * 3;
    const end = page * 3;
    posts.slice(start, end).forEach(val => {
      data.push(
        <ForumContentCard
          postdata={val}
          interacted={interacted.filter(post => post.id === val.id)[0]}
          key={val.id}
        />
      );
    });
    if (data.length === 0) {
      return (
        <p className="bg-white w-full py-2 text-black font-semibold shadow text-center rounded">
          no post yet
        </p>
      );
    }
    return data;
  };

  return (
    <div className="flex flex-col h-full px-12 w-full max-w-4xl ml-auto break-words">
      {generateContent()}
      <ForumContentPagination page={page} maxPage={maxPage} setpage={setpage} />
    </div>
  );
};

export default ForumContent;
