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
            <div className="bg-white py-3 px-4 mt-5 rounded-full w-64 shadow-black">
              <Link href="https://bit.ly/KelilingKomunitas">
                <a className="flex flex-row items-center justify-between  bg-white">
                  <p className="text-black text-3xl ml-2">Join Now</p>
                  <img
                    className="w-10 h-10 mr-4"
                    src="/img/right-arrow.png"
                    alt="youtube"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full py-20 px-20 bg-nav">
          <p className="text-3xl font-gilroy text-justify max-w-xl text-customGrey">
            Keliling komunitas akan diadakan secara
            online. Keliling komunitas memiliki mata acara
            yaitu menonton film bersama, diskusi film,
            pemaparan GFF, dan juga pemaparan dari
            komunitas itu sendiri.
            <br />
            <br />
            Keliling komunitas ini dapat dikunjungi juga
            oleh masyarakat umum. Untuk detail acara
            akan diumumkan lebih lanjut.
          </p>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default komunitas;
