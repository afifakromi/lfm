import React, { useState } from "react";
import Image from "next/image";

const FeedBackMsg = ({ text, error = false }) => {
  const [hide, setHide] = useState(false);
  const handleHide = () => {
    setHide(true);
  };

  return (
    <div
      className={
        "flex flex-row items-center px-4 justify-between w-full py-3 mt-2 rounded-lg " +
        (error
          ? "bg-customError"
          : "bg-customSuccess " + hide
          ? "hidden"
          : "flex")
      }
    >
      <div className="w-5/6">
        <p className="text-white ml-36">{text}</p>
      </div>
      <div className="flex flex-row items-center justify-end w-1/6">
        <Image
          onClick={() => handleHide()}
          className="cursor-pointer hover:opacity-40"
          src="/img/close-white.svg"
          width={30}
          height={30}
          alt="Close Button"
        />
      </div>
    </div>
  );
};

export default FeedBackMsg;
