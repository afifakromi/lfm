import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";

const TimelineItem = ({
  date,
  className,
  bgColor,
  isTop,
  rounded,
  content,
  isBottom,
}) => {
  const [hide, setHide] = useState(false);

  return (
    <div className="flex flex-row space-x-8 items-center cursor-pointer">
      <div
        className={`w-16 h-32 ${
          !isBottom ? "border-b-4 border-white" : null
        } relative ${rounded}`}
        style={{ backgroundColor: bgColor }}
        onMouseOver={() => setHide(true)}
        onMouseLeave={() => setHide(false)}
      >
        <p className={`text-2xl w-28 absolute top-1/3 text-Montserrat text-customGrey ${className}`}>{date}</p>
        <div
          className={` bg-white rounded-xl px-10 py-4 w-96 z-10 ${
            hide ? "absolute" : "hidden"
          } ${className}`}
        >
          {ReactHtmlParser(content)}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
