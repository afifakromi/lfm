import React from "react";
import Image from "next/image";
import Link from "next/link";

import { logout } from "../../authentication/utils";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 bg-nav">
      <div>
        <Link href="/">
          <a>
            <Image src="/img/logo.png" width={80} height={80} alt="Logo" />
          </a>
        </Link>
      </div>

      <div className="flex items-center justify-center py-2 text-base font-bold text-primary">
        <div className="px-2">
          <Link href="/">
            <a className="hover:text-hover">SUBMISSION</a>
          </Link>
        </div>
        <div className="px-2">
          <Link href="/">
            <a className="hover:text-hover">ARCHIVE</a>
          </Link>
        </div>
        <div className="px-2">
          <Link href="/">
            <a className="hover:text-hover">ABOUT</a>
          </Link>
        </div>
        {/* {localStorage.getItem("token") == undefined ? ( */}
        <>
          <div className="px-2">
            <Link href="/login">
              <a className="hover:text-hover">LOGIN</a>
            </Link>
          </div>
          <div className="px-2">
            <Link href="/register">
              <a className="hover:text-hover">REGISTER</a>
            </Link>
          </div>
        </>
        {/* ) : ( */}
        <div className="px-2" onClick={() => {}}>
          <Link href="#">
            <a className="hover:text-hover">LOGOUT</a>
          </Link>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
