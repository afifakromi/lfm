import React, { useState } from "react";
import ReactPlayer from "react-player";
import Link from "next/link";
import NextCountdown from "./NextCountdown";
import Image from "next/image";
import Timeline from "./Timeline";

const Home = () => {
  const [komunitas, setKomunitas] = useState(false);
  const [entry, setEntry] = useState(false);
  const [timeline, setTimeline] = useState(false);
  const [MainEvent, setMainEvent] = useState(false);

  return (
    <div className="bg-primary">
      <div className="">
        <ReactPlayer
          url="/video-landing.mp4"
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          muted={true}
        />
        <div className=" py-20 flex flex-col items-center justify-center relative">
          <div className="mb-16 bg-customPink cursor-pointer rounded-lg hover:opacity-95 shadow-black">
            <Link href="https://genflix.co.id/live">
              <p className="text-4xl mx-7 my-5 text-white">Tonton Ganffest</p>
            </Link>
          </div>
          <h1 className="text-6xl text-customCrem font-montserrat absolute left-14 top-52">
            Exhibition
          </h1>
          <div className="mt-28 flex flex-col items-center cursor-pointer w-2/4">
            <Link href="https://www.oracularganffest.com/">
              <ReactPlayer
                url="/videoPameran.mp4"
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                muted={true}
              />
            </Link>
          </div>
          {/* <p className="text-6xl mb-4 text-customCrem">Exhibition</p> */}
          {/* <NextCountdown />
          <p className="mt-8 text-2xl text-customGrey">Hari Menuju Main Event Ganffest</p> */}

          <div className="w-3/4 mt-20 flex flex-col justify-center relative">
            <h1 className="text-6xl text-customCrem font-montserrat absolute -left-24 top-8">
              Timeline
            </h1>
            <div className="mt-32 flex flex-row items-center">
              <Link href="/submission" passHref>
                <div
                  className="w-16 h-12 relative rounded-full bg-customFirst cursor-pointer"
                  onMouseOver={() => setKomunitas(true)}
                  onMouseLeave={() => setKomunitas(false)}
                >
                  <p className="text-2xl text-customFirst mt-20 -right-40 absolute w-64 ">
                    Calling Entry
                  </p>
                  <div
                    className={
                      "absolute w-80  p-4 text-center flex-col bg-white top-20 rounded-xl -left-32"
                    }
                    style={{ display: komunitas ? "flex" : "none" }}
                  >
                    <p className="text-2xl text-customPink">Calling Entry</p>
                    <p className=" text-customPink font-montserrat">
                      13 - 21 Desember 2021
                    </p>
                    <p className="text-sm text-black mt-4">
                      Ayo submisikan karyamu di Ganesha Film Festival 2022!
                      Untuk melakukan submisi dapat dilakukan di website ini
                      dengan menekan tombol submisi
                    </p>
                  </div>
                </div>
              </Link>
              <hr className="w-5/12 border-0 h-1 bg-gradient-to-r from-first to-second" />
              <Link href="/komunitas" passHref>
                <div
                  className="w-16 h-12 relative rounded-full bg-customSecond cursor-pointer"
                  onMouseOver={() => setTimeline(true)}
                  onMouseLeave={() => setTimeline(false)}
                >
                  <p className="text-2xl text-customSecond mt-20 -right-36 absolute w-64">
                    Keliling Komunitas
                  </p>
                  <div
                    className={
                      "absolute w-80  p-4 flex text-center flex-col bg-white top-20 rounded-xl -left-32"
                    }
                    style={{ display: timeline ? "flex" : "none" }}
                  >
                    <p className="text-2xl text-customPink">
                      Keliling Komunitas
                    </p>
                    <p className=" text-customPink font-montserrat">
                      31 Oktober 2021 <br />
                      4 Desember 2021 <br />
                      12 Februari 2022 <br />
                    </p>
                    <p className="text-sm text-black mt-4">
                      Keliling komunitas adalah kegiatan yang berupa mengunjungi
                      komunitas-komunitas non perfilman yang bertujuan untuk
                      memasyarakatkan film alternatif dan juga memperkenalkan
                      GFF 2022.
                    </p>
                  </div>
                </div>
              </Link>

              <hr className="w-5/12 border-0 h-1 bg-gradient-to-r from-second to-third" />
              <Link href="/workshop" passHref>
                <div
                  className="w-16 h-12 relative rounded-full bg-customThird cursor-pointer"
                  onMouseOver={() => setEntry(true)}
                  onMouseLeave={() => setEntry(false)}
                >
                  <p className="text-2xl text-customThird mt-20 -right-44 absolute w-64">
                    Workshop
                  </p>
                  <div
                    className={
                      "absolute w-80 p-4 flex text-center flex-col bg-white top-20 rounded-xl -left-32"
                    }
                    style={{ display: entry ? "flex" : "none" }}
                  >
                    <p className="text-2xl text-customPink">Workshop</p>
                    <p className=" text-customPink font-montserrat">
                      12 Februari 2022
                    </p>
                    <p className="text-sm text-black mt-4">
                      Workshop adalah kegiatan yang akan diisi oleh para
                      pembicara yang akan membawakan topik perfilman.
                    </p>
                  </div>
                </div>
              </Link>
              <hr className="w-5/12 border-0 h-1 bg-gradient-to-r from-third to-last" />
              <div
                className="w-16 h-12 relative rounded-full bg-customLast cursor-pointer"
                onMouseOver={() => setMainEvent(true)}
                onMouseLeave={() => setMainEvent(false)}
              >
                <p className="text-2xl text-customLast mt-20 -right-44 absolute w-64">
                  Main Event
                </p>
                <div
                  className={
                    "absolute w-80 p-4 flex text-center flex-col bg-white top-20 rounded-xl -left-32"
                  }
                  style={{ display: MainEvent ? "flex" : "none" }}
                >
                  <p className="text-2xl text-customPink">Main Event</p>
                  <p className=" text-customPink font-montserrat">
                    14 - 20 Februari 2022
                  </p>
                  <p className="text-sm text-black mt-4">
                    Acara utama pada Ganesha Film Festival 2022 yang memutarkan
                    program-program unggulan Ganffest. Selain itu, juga terdapat
                    acara pembukaan dan penutupan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-52">
            <h1 className="text-6xl text-customCrem ml-6">
              Sponsor & Media Partner
            </h1>
            <div className="mt-7">
                <Image src="/img/sponsorMedpar.png" width={700} height={300} alt="sponsormedpar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
