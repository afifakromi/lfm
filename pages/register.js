import React from "react";
import Register from "../components/auth/Register";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";

const register = () => {
  return (
    <Layout title="Register" auth={false}>
      <Navbar />
      <Register />
    </Layout>
  );
};

export default register;
