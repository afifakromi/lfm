import React, { useEffect } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ReactPlayer from "react-player";

// Untuk hide/show Login Register
import { useOpen } from "../../context/ToggleContext";

const Home = () => {
  const optionsOpen = useOpen();

  return (
    <div className="relative w-full h-screen bg-primary">
      <Login open={optionsOpen[0].loginOpen} />
      <Register open={optionsOpen[0].registerOpen} />
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
