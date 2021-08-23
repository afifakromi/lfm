import React from "react";
import Link from "next/link";

import { useOpenUpdate } from "../../context/ToggleContext";

const Button = ({ text, url, type }) => {
  const toggleOpen = useOpenUpdate();

  return (
    <div
      className="py-2 text-center text-white rounded-lg cursor-pointer w-28 bg-gradient-to-r hover:from-first hover:via-middle hover:to-last"
      onClick={
        toggleOpen === undefined
          ? null
          : type === "login"
          ? toggleOpen[0].toggleLogin
          : toggleOpen[0].toggleRegister
      }
    >
      <Link href={url}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

export default Button;
