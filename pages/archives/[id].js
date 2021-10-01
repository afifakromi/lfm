import Navbar from "../../components/commons/Navbar";
import Layout from "../../components/commons/Layout";
import React from "react";
import "react-dropdown/style.css";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import Footer from "../../components/commons/Footer";

// import { gff_archive } from "../../const";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const gff_archive = [
    {
      link: "/archives/1",
      key: "GFF 2018",
      title: "Ganffest 2018: Jendela",
      content:
        "Tema Jendela diangkatan dengan harapan Ganffest 2018 dapat menjalankan fungsinya sebagai sebuah jendela. Jendela dapat digunakan sebagai media untuk melihat dari suatu tempat ke sebuah “cakrawala” lainnya. Bandung diumpamakan sebagai sebuah rumah yang di dalamnya terdapat film-film Bandung dan lingkungan luar Bandung diumpamakan sebagai lingkungan luar tersebut, dan Ganffest 2018 diumpamakan sebagai jendela dari rumah tersebut yang dapat menghubungkan orang-orang dari luar rumah (Bandung) dapat bisa melihat film-film dalam rumah tersebut, dan sebaliknya.",
      fotoUrl: "/img/gff2018.jpg",
      fotoCarousel: [
        "/img/archives/2018/1_2018.jpg",
        "/img/archives/2018/2_2018.jpg",
        "/img/archives/2018/3_2018.jpg",
        "/img/archives/2018/4_2018.jpg",
        "/img/archives/2018/5_2018.jpg",
        "/img/archives/2018/6_2018.jpg",
      ],
    },
    {
      link: "/archives/2",
      key: "GFF 2016",
      title: "Ganffest 2016: Jendela",
      content:
        "Tema Jendela diangkatan dengan harapan Ganffest 2018 dapat menjalankan fungsinya sebagai sebuah jendela. Jendela dapat digunakan sebagai media untuk melihat dari suatu tempat ke sebuah “cakrawala” lainnya. Bandung diumpamakan sebagai sebuah rumah yang di dalamnya terdapat film-film Bandung dan lingkungan luar Bandung diumpamakan sebagai lingkungan luar tersebut, dan Ganffest 2018 diumpamakan sebagai jendela dari rumah tersebut yang dapat menghubungkan orang-orang dari luar rumah (Bandung) dapat bisa melihat film-film dalam rumah tersebut, dan sebaliknya.",
      fotoUrl: "/img/gff2018.jpg",
      fotoCarousel: [
        "/img/archives/2018/1_2018.jpg",
        "/img/archives/2018/2_2018.jpg",
        "/img/archives/2018/3_2018.jpg",
        "/img/archives/2018/4_2018.jpg",
        "/img/archives/2018/5_2018.jpg",
        "/img/archives/2018/6_2018.jpg",
      ],
    },
    {
      link: "/archives/3",
      key: "GFF 2014",
      title: "Ganffest 2014: Jendela",
      content:
        "Tema Jendela diangkatan dengan harapan Ganffest 2018 dapat menjalankan fungsinya sebagai sebuah jendela. Jendela dapat digunakan sebagai media untuk melihat dari suatu tempat ke sebuah “cakrawala” lainnya. Bandung diumpamakan sebagai sebuah rumah yang di dalamnya terdapat film-film Bandung dan lingkungan luar Bandung diumpamakan sebagai lingkungan luar tersebut, dan Ganffest 2018 diumpamakan sebagai jendela dari rumah tersebut yang dapat menghubungkan orang-orang dari luar rumah (Bandung) dapat bisa melihat film-film dalam rumah tersebut, dan sebaliknya.",
      fotoUrl: "/img/gff2018.jpg",
      fotoCarousel: [
        "/img/archives/2018/1_2018.jpg",
        "/img/archives/2018/2_2018.jpg",
        "/img/archives/2018/3_2018.jpg",
        "/img/archives/2018/4_2018.jpg",
        "/img/archives/2018/5_2018.jpg",
        "/img/archives/2018/6_2018.jpg",
      ],
    },
    {
      link: "/archives/4",
      key: "GFF 2012",
      title: "Ganffest 2012: Jendela",
      content:
        "Tema Jendela diangkatan dengan harapan Ganffest 2018 dapat menjalankan fungsinya sebagai sebuah jendela. Jendela dapat digunakan sebagai media untuk melihat dari suatu tempat ke sebuah “cakrawala” lainnya. Bandung diumpamakan sebagai sebuah rumah yang di dalamnya terdapat film-film Bandung dan lingkungan luar Bandung diumpamakan sebagai lingkungan luar tersebut, dan Ganffest 2018 diumpamakan sebagai jendela dari rumah tersebut yang dapat menghubungkan orang-orang dari luar rumah (Bandung) dapat bisa melihat film-film dalam rumah tersebut, dan sebaliknya.",
      fotoUrl: "/img/gff2018.jpg",
      fotoCarousel: [
        "/img/archives/2018/1_2018.jpg",
        "/img/archives/2018/2_2018.jpg",
        "/img/archives/2018/3_2018.jpg",
        "/img/archives/2018/4_2018.jpg",
        "/img/archives/2018/5_2018.jpg",
        "/img/archives/2018/6_2018.jpg",
      ],
    },
    {
      link: "/archives/5",
      key: "GFF 2010",
      title: "Ganffest 2010: Jendela",
      content:
        "Tema Jendela diangkatan dengan harapan Ganffest 2018 dapat menjalankan fungsinya sebagai sebuah jendela. Jendela dapat digunakan sebagai media untuk melihat dari suatu tempat ke sebuah “cakrawala” lainnya. Bandung diumpamakan sebagai sebuah rumah yang di dalamnya terdapat film-film Bandung dan lingkungan luar Bandung diumpamakan sebagai lingkungan luar tersebut, dan Ganffest 2018 diumpamakan sebagai jendela dari rumah tersebut yang dapat menghubungkan orang-orang dari luar rumah (Bandung) dapat bisa melihat film-film dalam rumah tersebut, dan sebaliknya.",
      fotoUrl: "/img/gff2018.jpg",
      fotoCarousel: [
        "/img/archives/2018/1_2018.jpg",
        "/img/archives/2018/2_2018.jpg",
        "/img/archives/2018/3_2018.jpg",
        "/img/archives/2018/4_2018.jpg",
        "/img/archives/2018/5_2018.jpg",
        "/img/archives/2018/6_2018.jpg",
      ],
    },
    {
      link: "/archives/6",
      key: "GFF 2008",
      title: "Ganffest 2008: Jendela",
      content:
        "Tema Jendela diangkatan dengan harapan Ganffest 2018 dapat menjalankan fungsinya sebagai sebuah jendela. Jendela dapat digunakan sebagai media untuk melihat dari suatu tempat ke sebuah “cakrawala” lainnya. Bandung diumpamakan sebagai sebuah rumah yang di dalamnya terdapat film-film Bandung dan lingkungan luar Bandung diumpamakan sebagai lingkungan luar tersebut, dan Ganffest 2018 diumpamakan sebagai jendela dari rumah tersebut yang dapat menghubungkan orang-orang dari luar rumah (Bandung) dapat bisa melihat film-film dalam rumah tersebut, dan sebaliknya.",
      fotoUrl: "/img/gff2018.jpg",
      fotoCarousel: [
        "/img/archives/2018/1_2018.jpg",
        "/img/archives/2018/2_2018.jpg",
        "/img/archives/2018/3_2018.jpg",
        "/img/archives/2018/4_2018.jpg",
        "/img/archives/2018/5_2018.jpg",
        "/img/archives/2018/6_2018.jpg",
      ],
    },
  ];

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
