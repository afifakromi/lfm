import React from "react";
import Home from "../components/commons/Home";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";
import { ToggleProvider } from "../context/ToggleContext";

const index = () => {
  return (
    <Layout title="Home">
      <ToggleProvider>
        <Navbar />
        <Home />
      </ToggleProvider>
    </Layout>
  );
};

export default index;
