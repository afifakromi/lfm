import Navbar from "../../components/commons/Navbar";
import Layout from "../../components/commons/Layout";
import React from "react";
import "react-dropdown/style.css";
import Image from "next/image";
// import { gff_archive } from "../../const";
import { useRouter } from "next/router";

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
    },
    {
      link: "/archives/2",
      key: "GFF 2016",
      title: "Ganffest 2018: Jendela",
      content:
        "Tema Jendela diangkatan dengan harapan Ganffest 2018 dapat menjalankan fungsinya sebagai sebuah jendela. Jendela dapat digunakan sebagai media untuk melihat dari suatu tempat ke sebuah “cakrawala” lainnya. Bandung diumpamakan sebagai sebuah rumah yang di dalamnya terdapat film-film Bandung dan lingkungan luar Bandung diumpamakan sebagai lingkungan luar tersebut, dan Ganffest 2018 diumpamakan sebagai jendela dari rumah tersebut yang dapat menghubungkan orang-orang dari luar rumah (Bandung) dapat bisa melihat film-film dalam rumah tersebut, dan sebaliknya.",
      fotoUrl: "/img/gff2018.jpg",
    },
    {
      link: "/archives/3",
      key: "GFF 2014",
      title: "Ganffest 2018: Jendela",
      content:
        "Tema Jendela diangkatan dengan harapan Ganffest 2018 dapat menjalankan fungsinya sebagai sebuah jendela. Jendela dapat digunakan sebagai media untuk melihat dari suatu tempat ke sebuah “cakrawala” lainnya. Bandung diumpamakan sebagai sebuah rumah yang di dalamnya terdapat film-film Bandung dan lingkungan luar Bandung diumpamakan sebagai lingkungan luar tersebut, dan Ganffest 2018 diumpamakan sebagai jendela dari rumah tersebut yang dapat menghubungkan orang-orang dari luar rumah (Bandung) dapat bisa melihat film-film dalam rumah tersebut, dan sebaliknya.",
      fotoUrl: "/img/gff2018.jpg",
    },
    {
      link: "/archives/4",
      key: "GFF 2012",
      title: "Ganffest 2018: Jendela",
      content:
        "Tema Jendela diangkatan dengan harapan Ganffest 2018 dapat menjalankan fungsinya sebagai sebuah jendela. Jendela dapat digunakan sebagai media untuk melihat dari suatu tempat ke sebuah “cakrawala” lainnya. Bandung diumpamakan sebagai sebuah rumah yang di dalamnya terdapat film-film Bandung dan lingkungan luar Bandung diumpamakan sebagai lingkungan luar tersebut, dan Ganffest 2018 diumpamakan sebagai jendela dari rumah tersebut yang dapat menghubungkan orang-orang dari luar rumah (Bandung) dapat bisa melihat film-film dalam rumah tersebut, dan sebaliknya.",
      fotoUrl: "/img/gff2018.jpg",
    },
    {
      link: "/archives/5",
      key: "GFF 2010",
      title: "Ganffest 2018: Jendela",
      content:
        "Tema Jendela diangkatan dengan harapan Ganffest 2018 dapat menjalankan fungsinya sebagai sebuah jendela. Jendela dapat digunakan sebagai media untuk melihat dari suatu tempat ke sebuah “cakrawala” lainnya. Bandung diumpamakan sebagai sebuah rumah yang di dalamnya terdapat film-film Bandung dan lingkungan luar Bandung diumpamakan sebagai lingkungan luar tersebut, dan Ganffest 2018 diumpamakan sebagai jendela dari rumah tersebut yang dapat menghubungkan orang-orang dari luar rumah (Bandung) dapat bisa melihat film-film dalam rumah tersebut, dan sebaliknya.",
      fotoUrl: "/img/gff2018.jpg",
    },
    {
      link: "/archives/6",
      key: "GFF 2008",
      title: "Ganffest 2018: Jendela",
      content:
        "Tema Jendela diangkatan dengan harapan Ganffest 2018 dapat menjalankan fungsinya sebagai sebuah jendela. Jendela dapat digunakan sebagai media untuk melihat dari suatu tempat ke sebuah “cakrawala” lainnya. Bandung diumpamakan sebagai sebuah rumah yang di dalamnya terdapat film-film Bandung dan lingkungan luar Bandung diumpamakan sebagai lingkungan luar tersebut, dan Ganffest 2018 diumpamakan sebagai jendela dari rumah tersebut yang dapat menghubungkan orang-orang dari luar rumah (Bandung) dapat bisa melihat film-film dalam rumah tersebut, dan sebaliknya.",
      fotoUrl: "/img/gff2018.jpg",
    },
  ];
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
