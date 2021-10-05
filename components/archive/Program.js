import React, { useState } from "react";
import Image from "next/image";

const Program = () => {
  const [hide, setHide] = useState(false);

  return (
    <div className="flex flex-col justify-between w-4/6 mt-10 rounded-lg bg-customDropdownHead">
      <div className="flex flex-row justify-between px-16 py-4">
        <h1 className="text-4xl text-customArchive">Program</h1>
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
          <h1 className="text-2xl text-customArchive">Program Kompetisi</h1>

          <h1 className="text-2xl text-customArchive">Program Non-Kompetisi</h1>
          <div className="w-full px-8 text-xl ">
            <p className="text-customArchive">Horizon</p>
            <p className="text-customArchive">Bandung Nu Aing!</p>
            <p className="text-customArchive">A Look On: Jestful Society</p>
            <p className="text-customArchive">
              A Look On: Distinct Romantic Movies
            </p>
            <p className="text-customArchive">A Look On: Behind Closed Doors</p>
            <p className="text-customArchive">A Look On: Erectus Dysfunction</p>
            <p className="text-customArchive">A Look On: Becoming Human</p>
          </div>

          <h1 className="text-2xl text-customArchive">Workshop</h1>
          <div className="w-full px-8 text-xl ">
            <p className="text-customArchive">Kelas! With Jason Iskandar</p>
            <p className="text-customArchive">
              Kelas Kritik RONTOFU with Bahasinema
            </p>
          </div>
          <h1 className="text-2xl text-customArchive">Sinema Keliling</h1>
        </div>
      ) : null}
    </div>
  );
};

export default Program;
