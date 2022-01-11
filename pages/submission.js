import React from "react";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";
import Carousel from "../components/submission/Carousel";
import Footer from "../components/commons/Footer";
import PopUp from "../components/submission/PopUp";
import Link from "next/link";

const submission = () => {
  return (
    <div>
      <Layout title="Submission" auth={false}>
        <Navbar />
        {/* <PopUp />
        <Carousel /> */}
        <div className="flex flex-col items-center justify-center w-full h-screen bg-nav">
          <p className="text-2xl text-customCrem">
            Mohon maaf calling entry sudah ditutup
          </p>
          <Link href="/">
            <a>
              <div className="flex flex-row items-center justify-center px-8 py-2 mt-4 bg-red-400 rounded-lg cursor-pointer hover:opacity-80">
                <p className="text-2xl">Go to Home</p>
              </div>
            </a>
          </Link>
        </div>
        <Footer />
      </Layout>
    </div>
  );
};

export default submission;
