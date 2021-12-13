import React from "react";
import Navbar from "../components/commons/Navbar";
import Footer from "../components/commons/Footer";
import Link from "next/link";
import Layout from "../components/commons/Layout";

const komunitas = () => {
  return (
    <Layout title="Komunitas">
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="w-full h-screen bg-komunitas bg-contain bg-center flex flex-row items-end py-20">
          <div className="flex flex-row w-full items-center justify-between px-20">
            <div>
              <h1 className="font-gilroy" style={{ fontSize: "6rem" }}>
                Keliling
              </h1>
              <h1
                className="font-gilroy"
                style={{ fontSize: "6rem", marginTop: "-4rem" }}
              >
                komunitas
              </h1>
            </div>
            <div className="bg-white py-3 px-4 rounded-full w-96 shadow-black">
              <Link href="youtube.com">
                <a className="flex flex-row items-center justify-between  bg-white">
                  <p className="text-black text-3xl">Watch on Youtube</p>
                  <img
                    className="w-10 h-10"
                    src="/img/right-arrow.png"
                    alt="youtube"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full py-20 px-20 bg-nav">
          <p className="text-3xl font-gilroy text-justify">
            Keliling komunitas akan diadakan secara
            <br /> online. Keliling komunitas memiliki mata acara
            <br /> yaitu menonton film bersama, diskusi film,
            <br /> pemaparan GFF, dan juga pemaparan dari
            <br /> komunitas itu sendiri.
            <br />
            <br />
            Keliling komunitas ini dapat dikunjungi juga
            <br /> oleh masyarakat umum. Untuk detail acara
            <br /> akan diumumkan lebih lanjut.
          </p>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default komunitas;
