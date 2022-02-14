import React, { useState, useRef } from "react";
import { forum_db, forum_storage } from "../../../firebase/forumConfig";
import Image from "../../commons/Image";
import firebase from "firebase/app";
import ErrorMessage from "../commons/ErrorMessage";
import { getUsername } from "../../../authentication/utils";

const ForumReply = ({ postdata }) => {
  const fileref = useRef(null);
  const [imageList, setimageList] = useState();
  const [description, setdescription] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState();
  const toggleImage = imageList => {
    // console.log(imageList);
    var images = [];
    for (let i = 0; i < imageList.length; i++) {
      images.push(<Image dark={false} imageList={imageList[i].name} key={i} />);
    }
    return images;
  };
  const uploadhandler = async data => {
    let storageref = forum_storage.ref();
    let upload = await storageref
      .child(`media/${Date.now()}-${data.name}`)
      .put(data);

    let url = await upload.ref.getDownloadURL();
    // console.log(url);
    return url;
  };

  const submithandle = async e => {
    e.preventDefault();
    if (description.length === 0) {
      seterror("Comment required");
      return 0;
    }
    setisLoading(true);
    // console.log("SUBMIT");
    // console.log(fileref.current.files);
    let linkarray = [];
    for (let i = 0; i < fileref.current.files.length; i++) {
      let newurl = await uploadhandler(fileref.current.files[i]);
      // console.log("newurl", newurl);
      linkarray.push(newurl);
    }
    await forum_db
      .collection("posts")
      .doc(postdata.id)
      .collection("comments")
      .doc(Date.now().toString())
      .set({
        description: description,
        liked: 0,
        disliked: 0,
        username: getUsername(),
        created_at: firebase.firestore.Timestamp.fromDate(new Date()),
        media: linkarray,
      });
    await forum_db
      .collection("posts")
      .doc(postdata.id)
      .set(
        {
          comments: postdata.data().comments + 1,
        },
        { merge: true }
      );
    setdescription("");
    setimageList();
    setisLoading(false);
  };

  return (
    <div className="flex w-full flex-col bg-gray-100 px-5 py-4 mt-4 ">
      <div className="flex w-full flex-1">
        <div className="flex h-12">
          <img src="/img/pp.png" alt="" />
        </div>
        <div className="flex flex-col ml-4 mt-2 w-full">
          <p className=" text-customBlueForum font-gilroy ">{getUsername()}</p>
          <textarea
            type="text"
            className="bg-transparent outline-none font-gilroy py-3 text-black resize-none h-16 text-sm"
            placeholder="Enter Topic Discussion"
            onChange={e => {
              setdescription(e.target.value);
            }}
            value={description}
          />
          <div className="flex flex-wrap mt-2 mb-2">
            {imageList ? toggleImage(imageList) : ""}
          </div>
          <ErrorMessage message={error} />
        </div>
        <div className="flex items-center ml-5">
          <input
            ref={fileref}
            type="file"
            name=""
            id={postdata?.id}
            className="hidden"
            onClick={e => {
              e.stopPropagation();
            }}
            onChange={e => {
              e.preventDefault();
              setimageList(e.target.files);
            }}
            multiple
            accept="image/*, video/*"
          />
          <button
            onClick={e => {
              e.preventDefault();
              document.getElementById(postdata?.id).click();
            }}
          >
            <img src="/img/attach1.png" alt="" />
          </button>
        </div>
      </div>
      {!isLoading ? (
        <button
          className="py-1 rounded bg-customBlueForum mt-5"
          onClick={submithandle}
        >
          SUBMIT
        </button>
      ) : (
        <div className="py-1 rounded bg-customBlueForum mt-5 w-full text-white text-center font-semibold">
          Loading...
        </div>
      )}
    </div>
  );
};
export default ForumReply;
