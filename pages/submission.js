import React from "react";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";
import Submission from "../components/Submission";

const submission = () => {
  return (
    <div>
      <Layout title="Submission" auth={false}>
        <Navbar />
        <p>Submission</p>
      </Layout>
    </div>
  );
};

export default submission;
