import Navbar from "../../components/commons/Navbar";
import Layout from "../../components/commons/Layout";
import React from "react";
import "react-dropdown/style.css";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import Footer from "../../components/commons/Footer";

import { gff_archive } from "../../const";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title={gff_archive[id - 1].key}>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-center w-full bg-red-400">
          <div className="flex flex-col items-center justify-center w-4/6">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={2000}
              dynamicHeight={false}
              centerMode={true}
              centerSlidePercentage={100}
            >
              {gff_archive[id - 1].fotoCarousel.map((item, index) => {
                return (
                  <div key={index}>
                    <Image src={item} width={3740} height={2700} alt="One" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-center py-20 bg-primary"
          style={{ marginTop: "-3rem" }}
        >
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
      <Footer />
    </Layout>
  );
};

export default Details;
