import React from "react";
import Home from "../components/commons/Home";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";

const index = () => {
  return (
    <Layout title="Home" auth={false}>
      <Navbar type="login" />
      <Home />
    </Layout>
  );
};

export default index;
