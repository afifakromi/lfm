import React, { useState, useEffect } from "react";
import Image from "next/image";
import { logout } from "../../authentication/utils";

const Profile = ({ loggedIn, setLoggedIn }) => {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("name"));
  }, []);

  const arrowClick = () => {
    setClick(!click);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-40">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center mr-4 rounded-full w-14 h-14 bg-customPink">
          <p className="text-3xl text-black">A</p>
        </div>
        <Image
          onClick={arrowClick}
          className="cursor-pointer"
          src={click ? "/img/pyramid.svg" : "/img/pyramid-normal.svg"}
          width={20}
          height={20}
          alt="profile"
        />
      </div>
      <div
        className={
          "absolute z-50 flex-col items-center justify-center w-24 py-4 text-center bg-white rounded-lg top-16 right-12 " +
          (click ? "flex" : "hidden")
        }
      >
        <p className="text-xs text-black cursor-pointer">My Profile</p>
        <div
          className="px-2 py-1 mt-2 rounded-md cursor-pointer bg-customPink hover:opacity-80"
          onClick={() => {
            logout();
            setLoggedIn(false);
          }}
        >
          <p className="text-xs text-black">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
