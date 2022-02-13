import React from "react";
import Navbar from "../components/commons/Navbar";
import Forum from "../components/Forum";
import Layout from "../components/commons/Layout";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const forum = () => {
  return (
    <div>
      <Layout title="Forum" auth={true}>
        <Navbar />
        <Forum />
        <Login />
        <Register />
      </Layout>
    </div>
  );
};

export default forum;
