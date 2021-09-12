import React from "react";
import Link from "next/link";

const Archive = () => {
  const gff_archive = [
    { link: "/", title: "GFF 2018" },
    { link: "/", title: "GFF 2016" },
    { link: "/", title: "GFF 2014" },
    { link: "/", title: "GFF 2018" },
    { link: "/", title: "GFF 2016" },
    { link: "/", title: "GFF 2014" },
  ];
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen bg-customArchive">
      <div className="flex flex-col w-5/6 mt-16 h-4/5">
        <h1 className="text-6xl text-customArchive">Archive</h1>
        <div className="grid grid-cols-3 gap-6">
          {gff_archive.map((item, index) => {
            return (
              <div
                key={index}
                className="px-4 py-2 mt-10 border-2 rounded-lg cursor-pointer border-primary hover:bg-primary"
              >
                <Link href={item.link}>
                  <a className="text-lg text-customPink">{item.title}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Archive;
