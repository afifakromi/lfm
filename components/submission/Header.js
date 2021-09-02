import React from "react";
import Image from "next/image";

const Header = ({ title, index }) => {
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
        <p>Form {index} of 3</p>
      </div>
      <hr className="bg-gradient-to-r from-first via-middle to-last" />
    </>
  );
};

export default Header;
