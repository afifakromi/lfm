import React, { useEffect, useState } from "react";
import Image from "../../commons/Image";

const CreateTopicModal = ({ togglecreatetopic, settogglecreatetopic }) => {
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

  return (
    <>
      <div
        style={{ backgroundColor: "rgba(209, 213, 219, .75 )" }}
        className={
          (togglecreatetopic ? "visible " : "hidden ") +
          "fixed w-full h-full top-0 left-0 overflow-y-auto py-8"
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
                />
                <button
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById("uploadimage").click();
                  }}
                >
                  <input
                    type="file"
                    name=""
                    id="uploadimage"
                    className="hidden"
                    multiple
                    onClick={e => {
                      e.stopPropagation();
                    }}
                    onChange={e => {
                      e.preventDefault();
                      setimageList(e.target.files);
                    }}
                  />
                  <img src="/img/attach1.png" alt="" />
                </button>
              </div>
              <div className="flex flex-wrap">
                {imageList ? toggleImage(imageList) : ""}
              </div>
            </div>
            <button className="py-4 bg-customBlueForum rounded-lg">
              Create Topic
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTopicModal;
