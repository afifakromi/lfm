import React from "react";
import Link from "next/link";

const Button = ({ text, url, onClick }) => {
  return (
    <div
      className="py-2 text-center text-white rounded-lg cursor-pointer w-28 bg-gradient-to-r hover:from-first hover:via-middle hover:to-last"
      onClick={onClick}
    >
      <Link href={url}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

export default Button;
