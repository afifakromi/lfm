import React from "react";
import Navbar from "../components/commons/Navbar";
import Forum from "../components/Forum";
import Layout from "../components/commons/Layout";

const forum = () => {
  return (
    <div>
      <Layout title="Forum" auth={false}>
        <Navbar />
        <Forum />
      </Layout>
    </div>
  );
};

export default forum;
