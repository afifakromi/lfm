import React, { useEffect } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";

// Untuk hide/show Login Register
import { useOpen } from "../../context/ToggleContext";

const Home = () => {
  const optionsOpen = useOpen();

  return (
    <div className="relative w-full h-screen bg-primary">
      <Login open={optionsOpen[0].loginOpen} />
      <Register open={optionsOpen[0].registerOpen} />
    </div>
  );
};

export default Home;
