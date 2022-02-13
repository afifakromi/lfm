import React from "react";

const Image = ({ imageList, dark }) => {
  return (
    <div
      className={
        (dark ? "bg-gray-100 " : "bg-white ") +
        "flex items-center text-xs w-max py-1 px-2 rounded-lg mr-2"
      }
    >
      <img src="/img/image.png" alt="" className="h-5 max-h-5" />
      <p className="ml-2">{imageList}</p>
    </div>
  );
};

export default Image;
