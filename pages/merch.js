import React from "react";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";
import Footer from "../components/commons/Footer";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Image from "next/image";
import Link from "next/link";
import { merchConst } from "../const";

const merch = () => {
  return (
    <Layout title="Merch" auth={false}>
      <Navbar />
      <Login />
      <Register />
      <div className="w-full h-screen bg-primary px-64 py-52">
        {/* <div className="grid grid-cols-3 gap-8">
          {merchConst.map((item, index) => {
            return (
              <Link key={index} passHref href={item.href}>
                <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer hover:scale-125 transform duration-100">
                  <Image width={500} height={500} src={item.imgUrl} alt="Bag" />
                  <p className="text-2xl">{item.name}</p>
                  <p className="text-3xl text-customCrem">{item.price}</p>
                </div>
              </Link>
            );
          })}
        </div> */}
      </div>
      <Footer />
    </Layout>
  );
};

export default merch;
