import React from "react";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";
import Submission from "../components/Submission";
import Carousel from "../components/submission/Carousel";

const submission = () => {
  return (
    <div>
      <Layout title="Submission" auth={false}>
        <Navbar />
        {/* <Submission /> */}
        <Carousel />
      </Layout>
    </div>
  );
};

export default submission;
