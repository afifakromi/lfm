import React, { useEffect, useRef, useState } from "react";
import { forum_db, forum_storage } from "../../../firebase/forumConfig";
import Image from "../../commons/Image";
import firebase from "firebase/app";
import ErrorMessage from "../commons/ErrorMessage";
import { getUsername } from "../../../authentication/utils";

const CreateTopicModal = ({ togglecreatetopic, settogglecreatetopic }) => {
  const fileref = useRef(null);
  const [topic, settopic] = useState("");
  const [description, setdescription] = useState("");
  const [error, seterror] = useState();
  const [isLoading, setisLoading] = useState();

  useEffect(() => {
    if (togglecreatetopic) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [togglecreatetopic]);

  const [imageList, setimageList] = useState();
  const toggleImage = imageList => {
    var images = [];
    for (let i = 0; i < imageList.length; i++) {
      images.push(<Image dark={true} imageList={imageList[i].name} key={i} />);
    }
    return images;
  };

  const uploadhandler = async data => {
    let storageref = forum_storage.ref();
    let upload = await storageref
      .child(`media/${Date.now()}-${data.name}`)
      .put(data);

    let url = await upload.ref.getDownloadURL();

    return url;
  };

  const submithandle = async e => {
    e.preventDefault();
    // console.log("SUBMIT");
    // console.log(fileref.current.files);
    if (description.length === 0) {
      seterror("All fields required");
      return 0;
    }
    setisLoading(true);
    let linkarray = [];
    for (let i = 0; i < fileref.current.files.length; i++) {
      let newurl = await uploadhandler(fileref.current.files[i]);

      linkarray.push(newurl);
    }
    await forum_db
      .collection("posts")
      .doc(Date.now().toString())
      .set({
        topic: topic,
        description: description,
        liked: 0,
        disliked: 0,
        comments: 0,
        username: getUsername(),
        created_at: firebase.firestore.Timestamp.fromDate(new Date()),
        media: linkarray,
      });
    settopic("");
    setdescription("");
    setisLoading(false);
    setimageList();
    settogglecreatetopic(false);
  };

  return (
    <>
      <div
        style={{ backgroundColor: "rgba(209, 213, 219, .75 )" }}
        className={
          (togglecreatetopic ? "visible " : "hidden ") +
          "fixed w-full h-full top-0 left-0 overflow-y-auto py-8 z-50"
        }
        data-modal
        onClick={e => {
          e.preventDefault();
          if (e.target.dataset.modal) {
            settogglecreatetopic(false);
          }
        }}
      >
        <div
          className={
            (togglecreatetopic ? "visible " : "hidden ") +
            "flex flex-col mx-auto bg-white shadow-lg w-full pt-8 pb-4 z-10 rounded-lg relative"
          }
          style={{ maxWidth: "40rem" }}
        >
          <button
            className="absolute top-6 right-9"
            onClick={e => {
              e.preventDefault();
              settogglecreatetopic(false);
            }}
          >
            <img src="/img/crossgrey.png" alt="" />
          </button>
          <p className="text-2xl mb-8 ml-10">New Topic</p>
          <div className="flex flex-col w-full py-8 px-10 border-t-2 border-gray-200">
            <p className="mb-5">Topic Title</p>
            <input
              type="text"
              className="border-2 outline-none border-blue-600 rounded-lg font-gilroy py-3 px-4 text-gray-600 mb-1"
              placeholder="Title"
              value={topic}
              onChange={e => {
                e.preventDefault();
                settopic(e.target.value);
              }}
            />
            <p className="text-xs mb-6">
              The title must contain a maximum of 32 characters
            </p>
            <p className="mb-5">Topic Content</p>
            <div className="flex flex-col mb-10 w-full py-3 px-4 rounded-lg border-blue-600 border-2">
              <div className="flex w-full">
                <textarea
                  type="text"
                  className="outline-none font-gilroy text-gray-600 resize-none h-48 w-full mr-4"
                  placeholder="Enter Topic Discussion"
                  value={description}
                  onChange={e => {
                    e.preventDefault();
                    setdescription(e.target.value);
                  }}
                />
                <button
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("uploadimagecreate").click();
                  }}
                >
                  <input
                    ref={fileref}
                    type="file"
                    name=""
                    id="uploadimagecreate"
                    className="hidden"
                    multiple
                    onClick={e => {
                      e.stopPropagation();
                    }}
                    onChange={e => {
                      e.preventDefault();

                      setimageList(e.target.files);
                    }}
                    accept="image/*, video/*"
                  />
                  <img src="/img/attach1.png" alt="" />
                </button>
              </div>
              <div className="flex flex-wrap">
                {imageList ? toggleImage(imageList) : ""}
              </div>
            </div>
            <ErrorMessage message={error} />
            {isLoading ? (
              <div className="py-4 bg-customBlueForum rounded-lg mt-2 text-white text-center font-semibold">
                Loading...
              </div>
            ) : (
              <button
                onClick={submithandle}
                className="py-4 bg-customBlueForum rounded-lg mt-2"
              >
                Create Topic
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTopicModal;
