import React from "react";
import About from "../components/about/About";
import Navbar from "../components/commons/Navbar";
import Layout from "../components/commons/Layout";

const about = () => {
  return (
    <Layout title="About">
      <Navbar />
      <About />
    </Layout>
  );
};

export default about;
