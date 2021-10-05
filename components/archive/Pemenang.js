import React, { useState } from "react";
import Image from "next/image";

const Program = () => {
  const [hide, setHide] = useState(false);

  return (
    <div className="flex flex-col justify-between w-4/6 mt-4 rounded-lg bg-customDropdownHead">
      <div className="flex flex-row justify-between px-16 py-4">
        <h1 className="text-4xl text-customArchive">Pemenang</h1>
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
        <div className="w-full px-16 py-8 duration-100 rounded-lg bg-customDropdown ">
          <h1 className="text-2xl text-customArchive">
            Gajah Emas: Film Terbaik
          </h1>
          <div className="w-full px-8 text-xl ">
            <p className="text-customArchive">
              Mesin Tanah (Wimar Herdanto, 2016)
            </p>
          </div>

          <h1 className="text-2xl text-customArchive">
            Gajah Pinilih: Film Terbaik berdasarkan perwakilan komunitas Kota
            Bandung
          </h1>
          <div className="w-full px-8 text-xl ">
            <p className="text-customArchive">
              Seorang Kambing (Tunggul Banjaransari, 2017)
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Program;
