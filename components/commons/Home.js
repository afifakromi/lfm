import React from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-primary">
      <div className="w-full">
        <Login />
        <Register />
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
