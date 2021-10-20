import React from "react";
import Image from "next/image";

const BtnSlide = ({ next, onClick, type }) => {
  return (
    <div
      onClick={onClick}
      className={
        "flex-row flex items-center justify-center w-32 py-2 text-white rounded-md cursor-pointer hover:opacity-80 bg-customPink"
      }
    >
      {type === "submit" ? (
        <p className="text-2xl">SUBMIT</p>
      ) : (
        <>
          <p className="mr-2 text-2xl">{next ? "NEXT" : null}</p>
          <Image
            src={next ? "/img/next.svg" : "/img/prev.svg"}
            width={25}
            height={25}
            alt="Slide Btn"
          />
          <p className="ml-2 text-2xl">{next ? null : "BACK"}</p>
        </>
      )}
    </div>
  );
};

export default BtnSlide;
