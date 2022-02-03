import React from "react";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";
import Carousel from "../components/submission/Carousel";
import Footer from "../components/commons/Footer";
import PopUp from "../components/submission/PopUp";
import Link from "next/link";
import Timeline from "../components/commons/Timeline";

const submission = () => {
  return (
    <div>
      <Layout title="Submission" auth={false}>
        <Navbar />
        <Timeline />
        <Footer />
      </Layout>
    </div>
  );
};

export default submission;
