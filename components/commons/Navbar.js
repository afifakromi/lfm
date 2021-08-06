import React from "react";
import Image from "next/image";
import Link from "next/link";

import { logout } from "../../authentication/utils";
import { useRecoilState } from "recoil";
import { isLoggedIn } from "../../authentication/state";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useRecoilState(isLoggedIn);

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
        {loggedIn ? (
          <div className="px-2">
            <Link href="/submission">
              <a className="hover:text-hover">SUBMISSION</a>
            </Link>
          </div>
        ) : null}

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
        {loggedIn ? (
          <div className="px-2">
            <Link href="/forum">
              <a className="hover:text-hover">FORUM</a>
            </Link>
          </div>
        ) : null}
        {!loggedIn ? (
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
        ) : (
          <>
            <div
              className="px-2"
              onClick={() => {
                logout();
                setLoggedIn(false);
                console.log("Logout");
              }}
            >
              <Link href="/register">
                <a className="hover:text-hover">LOGOUT</a>
              </Link>
            </div>
            <div className="mr-4">
              <p>Hi, {localStorage.getItem("nama")}</p>
            </div>
            <div>
              <Link href="#">
                <a>
                  <Image
                    src="/img/man.svg"
                    width={40}
                    height={40}
                    alt="profile icon"
                  />
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
