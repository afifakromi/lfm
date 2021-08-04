import React, { useState } from "react";
import Image from "next/image";

const FeedBackMsg = ({ text, error = false }) => {
  const [hide, setHide] = useState(false);
  function handleHide() {
    setHide(true);
  }

  return (
    <div>
      <p>{text}</p>
      <Image
        onClick={() => handleHide()}
        src="/img/close.svg"
        width={30}
        height={30}
        alt="Close Button"
      />
      <style jsx>
        {`
          div {
            width: 100%;
            background-color: ${error ? "#DC3545" : "#28a745"};
            margin-top: 0.5rem;
            padding: 0.8rem 0;
            border-radius: 0.5rem;
            display: ${hide ? "none" : "flex"};
            justify-content: center;
            align-items: center;
            flex-direction: row;
            position: relative;
          }

          p {
            color: white;
            display: inline-block;
            font-size: 0.8rem;
          }

          img {
            width: 2rem;
            position: absolute;
            right: 1rem;
            cursor: pointer;
          }

          img:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </div>
  );
};

export default FeedBackMsg;
