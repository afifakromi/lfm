import React from "react";
import Countdown from "react-countdown";
import Navbar from "../components/commons/Navbar";
import Footer from "../components/commons/Footer";

const countdown = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-nav w-full p-20 flex flex-col items-center justify-center">
        <p className="text-6xl mb-4 font-montserrat">COUNTDOWN</p>
        <Countdown
          className="text-6xl bg-gradient-to-r text-gradient from-first via-middle to-last"
          date={Date.now() + 10000}
        />
        <p className="mt-8 text-xl">Hari Menuju Main Event Ganffest</p>

        <div className="w-1/2 mt-20">
          <h1 className="text-6xl text-customCrem font-montserrat">Timeline</h1>
          <p className="text-3xl mt-16 font-montserrat">
            11 Oktober 2021 <br /> - <br /> 17 Desember 2021
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default countdown;
