import React from "react";
import Link from "next/link";
import Layout from "../../components/commons/Layout";
import Navbar from "../../components/commons/Navbar";
import Footer from "../../components/commons/Footer";
import { gff_archive } from "../../const";

const Archive = () => {
  return (
    <Layout title="Archive">
      <Navbar />
      <div className="flex flex-row items-center justify-center w-full h-screen py-16 bg-nav">
        <div className="flex flex-col w-5/6 h-4/5">
          <h1 className="text-6xl text-customArchive">Archive</h1>
          <div className="grid grid-cols-3 gap-6">
            {gff_archive.map((item, index) => {
              return (
                <div
                  key={index}
                  className="px-4 py-2 mt-10 border-2 rounded-lg cursor-pointer border-primary hover:bg-primary"
                >
                  <Link href={item.link}>
                    <a className="text-lg text-customPink">{item.key}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Archive;
