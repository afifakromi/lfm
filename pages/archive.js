import React from 'react'
import Archive from '../components/Archive';
import Layout from "../components/commons/Layout";
import Navbar from "../components/commons/Navbar";

const archive = () => {
  return (
    <Layout title="Archive">
      <Navbar />
      <Archive />
    </Layout>
  )
}

export default archive
