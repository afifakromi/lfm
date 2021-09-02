import React from "react";
import Image from "next/image";

const BtnSlide = ({ next, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-row items-center justify-center w-32 py-2 text-white rounded-md cursor-pointer hover:opacity-80 bg-customPink"
    >
      <p className="text-2xl">{next ? "NEXT" : null}</p>
      <Image
        src={next ? "/img/next.svg" : "/img/prev.svg"}
        width={25}
        height={25}
        alt="Slide Btn"
      />
      <p className="text-2xl">{next ? null : "BACK"}</p>
    </div>
  );
};

export default BtnSlide;
