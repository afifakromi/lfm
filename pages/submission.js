import React from "react";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";
import Carousel from "../components/submission/Carousel";
import Footer from "../components/commons/Footer";

const submission = () => {
  return (
    <div>
      <Layout title="Submission" auth={false}>
        <Navbar />
        <Carousel />
        <Footer />
      </Layout>
    </div>
  );
};

export default submission;
