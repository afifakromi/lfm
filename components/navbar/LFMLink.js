import React from "react";
import Link from "next/link";

const LFMLink = ({ type, url, text }) => {
  return (
    <div className="w-24 py-1 ml-4 text-center border-2 border-transparent navbar-div hover:border-red-400">
      <Link href={url}>
        <a className="hover:text-hover">{text}</a>
      </Link>
    </div>
  );
};

export default LFMLink;
