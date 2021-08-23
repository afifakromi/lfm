import React from "react";
import Layout from "../components/commons/Layout";

const authorized = () => {
  return (
    <Layout title="Not Authorized">
      <p>Please login first to use this feature</p>
    </Layout>
  );
};

export default authorized;
