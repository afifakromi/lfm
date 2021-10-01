import React from "react";
import Home from "../components/commons/Home";
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";
import Footer from "../components/commons/Footer";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const index = () => {
  return (
    <Layout title="Home" auth={false}>
      <Navbar type="login" />
      <Home />
      <Login />
      <Register />
      <Footer />
    </Layout>
  );
};

export default index;
