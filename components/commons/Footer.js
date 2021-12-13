import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-nav">
      <div
        className="flex flex-row items-center justify-between w-full px-16 py-8 bg-crem"
        style={{ borderRadius: "0.5rem 0.5rem 0 0" }}
      >
        <div>
          <h1 className="text-xl text-customArchive">Ganesha Film Festival</h1>
          <p className="text-customArchive">
            Jl. Ganesha No.10, Lb. Siliwangi, Coblong Bandung, <br /> Jawa Barat
            40132
          </p>
        </div>
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-xl text-customArchive">
            Find Us On Social Media
          </h1>
          <div className="flex flex-row items-center justify-start">
            <div className="w-12">
              <Link href="https://wa.me/082257091669">
                <a>
                  <Image src="/img/wa.svg" width={60} height={60} alt="IG" />
                </a>
              </Link>
            </div>
            <div className="w-12">
              <Link href="https://www.instagram.com/ganffest/">
                <a>
                  <Image src="/img/ig.svg" width={70} height={70} alt="IG" />
                </a>
              </Link>
            </div>
            <div className="w-12 ml-4">
              <Link href="mailto:mail.ganffest@gmail.com">
                <a>
                  <Image src="/img/email.svg" width={35} height={35} alt="IG" />
                </a>
              </Link>
            </div>
            <div className="w-12">
              <Link href="https://twitter.com/Ganffest">
                <a>
                  <Image
                    src="/img/twitter.svg"
                    width={60}
                    height={60}
                    alt="IG"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
