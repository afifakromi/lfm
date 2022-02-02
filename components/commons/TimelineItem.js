import React, { useState } from "react";

const TimelineItem = ({
  date,
  className,
  bgColor,
  isTop,
  rounded,
  content,
}) => {
  const [hide, setHide] = useState(false);

  return (
    <div className="flex flex-row space-x-8 items-center cursor-pointer">
      <div
        className={`w-16 h-32 ${
          !isTop ? "border-b-4 border-white" : null
        } relative ${rounded}`}
        style={{ backgroundColor: bgColor }}
        onMouseOver={() => setHide(true)}
        onMouseLeave={() => setHide(false)}
      >
        <p className={`text-xl w-24 absolute top-1/2 ${className}`}>{date}</p>
        <div
          className={` bg-white rounded-xl px-10 py-4 w-96 ${
            hide ? "absolute" : "hidden"
          } ${className}`}
        >
          <p className="text-black">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
