import React, { useState } from "react";

const PopUp = () => {
  const [hide, setHide] = useState(false);
  const hidePoup = () => {
    setHide(true);
  };

  return (
    <div
      className={
        hide
          ? "hidden"
          : "bg-white flex absolute z-50 top-96 drop-shadow-lg left-1/2 transform -translate-x-1/2  flex-col items-center justify-center px-12 py-4  rounded-3xl"
      }
      style={{ filter: "drop-shadow(10px 5px 4px #000000)" }}
    >
      <div>
        <p className="text-black">
          1. Film wajib memiliki subtitle Bahasa Indonesia. <br /> Subtitle
          wajib bersifat <i>hardsubbed</i>
        </p>
        <p className="text-black">2. Film berdurasi maksimal 45 menit.</p>
        <p className="text-black">
          3. Resolusi film minimal 720p atau setaranya.
        </p>
        <p className="text-black">4. Film diproduksi setelah Februari 2020.</p>
      </div>

      <div
        onClick={hidePoup}
        className="w-1/2 px-4 py-4 mt-4 text-center cursor-pointer hover:opacity-80 rounded-3xl bg-customPink"
      >
        <p className="text-4xl">Okay</p>
      </div>
    </div>
  );
};

export default PopUp;
