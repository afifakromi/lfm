import React from "react";
import Navbar from "../components/commons/Navbar";
import Footer from "../components/commons/Footer";
import Layout from "../components/commons/Layout";

const workshop = () => {
  return (
    <Layout title="Workshop">
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="w-full h-screen bg-workshop bg-contain bg-center flex flex-row items-end py-20">
          <div className="flex flex-row w-full items-center justify-between px-20">
            <div>
              <h1 className="font-gilroy" style={{ fontSize: "6rem" }}>
                Workshop
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full py-20 px-20 bg-nav">
          <p className="text-3xl font-gilroy text-justify max-w-xl">
            Workshop adalah kegiatan yang akan diisi oleh.
            para pembicara yang akan membawakan topik
            perfilman
            <br />
            <br />
            Workshop akan dilaksanakan secara online
            pada bulan Februari. Workshop ini bertujuan
            untuk memberikan ilmu kepada masyarakat
            umum mengenai topik perfilman. Untuk detail
            acara akan diumumkan lebih lanjut.
          </p>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default workshop;
