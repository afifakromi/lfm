import React, { useState } from "react";
import Image from "../../commons/Image";

const ForumReply = () => {
  const [imageList, setimageList] = useState();

  const toggleImage = imageList => {
    var images = [];
    for (let i = 0; i < imageList.length; i++) {
      images.push(<Image dark={false} imageList={imageList[i].name} key={i} />);
    }
    return images;
  };
  return (
    <div className="flex w-full bg-gray-100 px-5 py-4 mt-4 flex-1">
      <div className="flex h-12">
        <img src="/img/pp.png" alt="" />
      </div>

      <div className="flex flex-col ml-4 mt-2 w-full">
        <p className=" text-customBlueForum font-gilroy ">Iqbal</p>
        <textarea
          type="text"
          className="bg-transparent outline-none font-gilroy py-3 text-black resize-none h-16 text-sm"
          placeholder="Enter Topic Discussion"
        />
        <div className="flex flex-wrap mt-2">
          {imageList ? toggleImage(imageList) : ""}
        </div>
      </div>
      <div className="flex items-center ml-5">
        <input
          type="file"
          name=""
          id="uploadimage"
          className="hidden"
          onClick={e => {
            e.stopPropagation();
          }}
          onChange={e => {
            e.preventDefault();
            setimageList(e.target.files);
          }}
        />
        <button
          onClick={e => {
            e.preventDefault();
            document.getElementById("uploadimage").click();
          }}
        >
          <img src="/img/attach1.png" alt="" />
        </button>
      </div>
    </div>
  );
};
export default ForumReply;
