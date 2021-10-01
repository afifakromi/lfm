import React from "react";
import About from "../components/about/About";
import Navbar from "../components/commons/Navbar";
import Layout from "../components/commons/Layout";
import Footer from "../components/commons/Footer";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const about = () => {
  return (
    <Layout title="About">
      <Navbar />
      <About />
      <Login />
      <Register />
      <Footer />
    </Layout>
  );
};

export default about;
