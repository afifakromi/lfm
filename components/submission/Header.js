import React from "react";
import Image from "next/image";

const Header = ({ title, index, type = "show" }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full mt-8 text-white">
        <div className="flex flex-row items-center">
          <Image
            src="/img/film.svg"
            width={50}
            height={50}
            alt="Film Data Logo"
          />

          <p className="ml-4 text-xl">{title}</p>
        </div>
        <p className={type == "hide" ? "hidden" : "block"}>Form {index} of 4</p>
      </div>
      <hr className="bg-gradient-to-r from-first via-middle to-last" />
    </>
  );
};

export default Header;
