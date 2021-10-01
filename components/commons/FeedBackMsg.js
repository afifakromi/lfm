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
        "flex flex-row relative items-center  justify-center w-full py-3 mt-2 rounded-lg " +
        (error ? "bg-customError " : "bg-customSuccess ") +
        (hide ? "hidden " : "flex")
      }
    >
      <p className="text-white">{text}</p>

      {/* <div className="absolute flex flex-row items-center justify-end w-1/6 right-6">
        <Image
          onClick={() => handleHide()}
          className="cursor-pointer hover:opacity-40"
          src="/img/close-white.svg"
          width={30}
          height={30}
          alt="Close Button"
        />
      </div> */}
    </div>
  );
};

export default FeedBackMsg;
