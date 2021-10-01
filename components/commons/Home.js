import React from "react";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div className="relative w-full bg-primary">
      <div className="w-full">
        <ReactPlayer
          url="/video-landing.mp4"
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          muted={true}
        />
      </div>
    </div>
  );
};

export default Home;
