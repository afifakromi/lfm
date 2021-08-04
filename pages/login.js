import React from "react";
import Login from "../components/auth/Login";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";

const login = () => {
  return (
    <Layout title="Login" auth={false}>
      <Navbar />
      <Login />
    </Layout>
  );
};

export default login;
