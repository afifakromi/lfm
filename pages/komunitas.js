import React from "react";
import Navbar from "../components/commons/Navbar";
import Footer from "../components/commons/Footer";
import Link from "next/link";

const komunitas = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="w-full h-screen bg-komunitas bg-contain bg-center flex flex-row items-end py-48">
        <div className="flex flex-row w-full items-center justify-between px-20">
          <div>
            <h1 style={{fontSize: "6rem"}}>Keliling</h1>
            <h1 style={{fontSize: "6rem", marginTop: "-4rem"}}>komunitas</h1>
          </div>
          <div className="bg-white py-2 px-4 rounded-full  w-1/5 ">
            <Link href="youtube.com">
              <a className="flex flex-row items-center justify-between">

              <p className="text-black text-3xl">Watch on Youtube</p>
            <img className="w-10 h-10" src="/img/right-arrow.png" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default komunitas;
