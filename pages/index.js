import React from "react";
import Home from "../components/commons/Home";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";
import Footer from "../components/commons/Footer";

const index = () => {
  return (
    <Layout title="Home" auth={false}>
      <Navbar type="login" />
      <Home />
      <Footer />
    </Layout>
  );
};

export default index;
