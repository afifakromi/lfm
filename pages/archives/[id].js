import Navbar from "../../components/commons/Navbar";
import Layout from "../../components/commons/Layout";
import React from "react";
import "react-dropdown/style.css";
import Image from "next/image";
import { gff_archive } from "../../const";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title={gff_archive[id - 1].key}>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-center w-full h-screen bg-red-400">
          <p>Carousel</p>
        </div>
        <div className="flex flex-row items-start justify-center py-20 bg-primary">
          <Image
            src={gff_archive[id - 1].fotoUrl}
            width={344}
            height={500}
            alt="Logo"
          />
          <div className="w-3/6 ml-8">
            <p className="mb-8 text-5xl">{gff_archive[id - 1].title}</p>
            <p>{gff_archive[id - 1].content}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
