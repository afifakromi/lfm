import React from "react";
import About from "../components/about/About";
import Navbar from "../components/commons/Navbar";
import Layout from "../components/commons/Layout";
import Footer from "../components/commons/Footer";

const about = () => {
  return (
    <Layout title="About">
      <Navbar />
      <About />
      <Footer />
    </Layout>
  );
};

export default about;
