import Navbar from "../../components/commons/Navbar";
import Layout from "../../components/commons/Layout";
import Footer from "../../components/commons/Footer";
import Program from "../../components/archive/Program";
import Pemenang from "../../components/archive/Pemenang";
import Juri from "../../components/archive/Juri";
import Image from "next/image";
import React from "react";

import { Carousel } from "react-responsive-carousel";
import { gff_archive } from "../../const";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-dropdown/style.css";

export const getStaticPaths = async () => {
  const paths = gff_archive.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  return {
    props: { archive: gff_archive[id - 1] },
  };
};

const Details = ({ archive }) => {
  return (
    <Layout title={archive.key}>
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
              showThumbs={false}
            >
              {archive.fotoCarousel.map((item, index) => {
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
          className="flex flex-col items-center justify-center py-20 bg-primary"
          style={{ marginTop: "-3rem" }}
        >
          <div className="flex flex-row justify-center w-5/6">
            <Image src={archive.fotoUrl} width={344} height={500} alt="Logo" />
            <div className="w-3/6 ml-8">
              <p className="mb-8 text-5xl">{archive.title}</p>
              <p>{archive.content}</p>
            </div>
          </div>
          <Program />
          <Pemenang />
          <Juri />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Details;
