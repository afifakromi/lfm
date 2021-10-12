import React from "react";
import Link from "next/link";
import Layout from "../../components/commons/Layout";
import Navbar from "../../components/commons/Navbar";
import Footer from "../../components/commons/Footer";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import Image from "next/image";
import { gff_archive } from "../../const";

const Archive = () => {
  return (
    <Layout title="Archive">
      <Navbar />
      <div className="flex flex-row items-center justify-center w-full py-16 bg-nav ">
        <Login />
        <Register />
        <div className="flex flex-col w-5/6 h-4/5 ">
          <div className="grid grid-cols-3 gap-8">
            {gff_archive.map((item, index) => {
              return (
                <Link key={index} href={item.link} passHref>
                  <div className="flex flex-col items-center justify-center px-2 py-4 mt-10 transition duration-500 transform border-2 cursor-pointer hover:scale-110 rounded-3xl bg-customArchiveItem">
                    <a className="text-xl text-center bg-gradient-to-r text-gradient from-first via-middle to-last">
                      {item.archiveTitle}
                    </a>
                    <Image
                      src={item.fotoUrl}
                      width={344}
                      height={500}
                      alt="Poster"
                    />
                  </div>
                </Link>
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
