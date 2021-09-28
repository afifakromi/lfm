import React from "react";
import Link from "next/link";
import Layout from "../../components/commons/Layout";
import Navbar from "../../components/commons/Navbar";
// import { gff_archive } from "../../const";

const Archive = () => {
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
      link: "/archives/3",
      key: "GFF 2014",
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
      link: "/archives/4",
      key: "GFF 2012",
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
      link: "/archives/5",
      key: "GFF 2010",
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
      link: "/archives/6",
      key: "GFF 2008",
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
  ];

  return (
    <Layout title="Archive">
      <Navbar />
      <div className="flex flex-row items-center justify-center w-full py-16 bg-customArchive">
        <div className="flex flex-col w-5/6 h-4/5">
          <h1 className="text-6xl text-customArchive">Archive</h1>
          <div className="grid grid-cols-3 gap-6">
            {gff_archive.map((item, index) => {
              return (
                <div
                  key={index}
                  className="px-4 py-2 mt-10 border-2 rounded-lg cursor-pointer border-primary hover:bg-primary"
                >
                  <Link href={item.link}>
                    <a className="text-lg text-customPink">{item.key}</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Archive;
