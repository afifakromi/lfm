import React from "react";
import Link from "next/link";
import { gff_archive } from "../const/index";

const Archive = () => {
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
