import React from "react";
import Layout from "../components/commons/Layout";

const authorized = () => {
  return (
    <Layout title="Not Authorized">
      <div className="w-full h-screen bg-nav">
        <p>Please login first to use this feature</p>
      </div>
    </Layout>
  );
};

export default authorized;
