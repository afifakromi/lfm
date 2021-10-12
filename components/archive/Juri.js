import React, { useState } from "react";
import Image from "next/image";

const Juri = ({ data }) => {
  const [hide, setHide] = useState(false);

  return (
    <div
      className={
        "flex-col justify-between w-4/6 mt-4 rounded-lg bg-customCrem " +
        (data.length == 0 ? "hidden" : "flex")
      }
    >
      <div className="flex flex-row justify-between px-16 py-4">
        <h1 className="text-4xl text-customArchive">Juri</h1>
        <Image
          src="/img/arrow.svg"
          className="duration-100 transform cursor-pointer hover:opacity-60 hover:rotate-90"
          width={40}
          height={40}
          alt="Arrow"
          onClick={() => {
            setHide(!hide);
          }}
        />
      </div>

      {hide ? (
        <div className="w-full px-16 py-8 duration-100 rounded-lg bg-customCremOpacity ">
          {data != [] &&
            data.map((item, index) => {
              return (
                <h1
                  key={index}
                  className="text-xl font-montserrat text-customArchive"
                >
                  {item}
                </h1>
              );
            })}
        </div>
      ) : null}
    </div>
  );
};

export default Juri;
