import React from "react";
import { images, regexExtension, videos } from "../constant/constant";

const ForumMedia = ({ media }) => {
  if (!media) {
    return "";
  }
  return (
    <div className="flex flex-col">
      {media.data().media.map((val, idx) => {
        return (
          <div key={idx} className={"my-2"}>
            {videos.some(obj => obj === regexExtension.exec(val)[1]) ? (
              <video
                className="rounded"
                controls
                style={{ maxHeight: "400px" }}
              >
                <source src={val} />
              </video>
            ) : (
              ""
            )}
            {images.some(obj => obj === regexExtension.exec(val)[1]) ? (
              <img src={val} alt="" style={{ maxHeight: "400px" }} />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ForumMedia;
