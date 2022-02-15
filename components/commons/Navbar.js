import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { logout } from "../../authentication/utils";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import {
  isLoggedIn,
  toggleLoginState,
  toggleRegisterState,
} from "../../authentication/state";
import Button from "../navbar/Button";
import LFMLink from "../navbar/LFMLink";
import Profile from "../navbar/Profile";

const Navbar = ({ type }) => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useRecoilState(isLoggedIn);
  const [hide, setHide] = useState(true);
  const [hidePre, setHidePre] = useState(true);

  const setToggleLogin = useSetRecoilState(toggleLoginState);
  const setToggleRegister = useSetRecoilState(toggleRegisterState);

  const authLoginClick = () => {
    console.log("Login Clicked");
    setToggleLogin(prevToggle => !prevToggle);
    setToggleRegister(false);
  };

  const authRegisterClick = () => {
    console.log("Register Clicked");
    setToggleRegister(prevToggle => !prevToggle);
    setToggleLogin(false);
  };

  const logoutClick = () => {
    logout();
    router.push("/");
  };

  return (
    <div
      className={
        "flex items-center justify-between px-10 py-4 " +
        (type == "home" ? "bg-white" : "bg-nav")
      }
    >
      <div className="w-1/6">
        <Link href="/">
          <a>
            <Image src="/img/GFFXDIGICASH.png" width={100} height={80} alt="Logo" />
          </a>
        </Link>
      </div>

      <div
        className={
          "flex flex-row items-center justify-end w-5/6 " +
          (type == "home" ? "text-black" : "text-white")
        }
      >
        <div className="flex flex-row justify-start">
          <LFMLink type={type} url="/" text="Home" />
          {/* <LFMLink type={type} url="/submission" text="SUBMISSION" /> */}
          <div
            onMouseOver={() => setHide(false)}
            onMouseOut={() => setHide(true)}
            className="w-24 py-1 ml-4 border-2 border-transparent relative"
          >
            <p className="text-center text-white ">Event</p>
            <div
              style={{ backgroundColor: "#EBEAEA" }}
              className={`bg-white absolute cursor-pointer z-10 ${
                hide ? "hidden" : "flex"
              }  w-32 flex-col top-8 rounded-l-lg hover:rounded-xl divide-y-2`}
            >
              <div className="relative py-1 px-4 hover:bg-gray-300 rounded-t-lg">
                <p
                  onMouseOver={() => setHidePre(false)}
                  // onMouseOut={() => setHidePre(true)}
                  className="text-black text-xl "
                >
                  Pre Event
                </p>

                <div
                  style={{ backgroundColor: "#EBEAEA" }}
                  className={`bg-white absolute left-32 top-0 ${
                    hidePre ? "hidden" : "flex"
                  } flex-col rounded-r-lg items-start divide-y-2`}
                >
                  <div className="relative py-1 px-4 hover:bg-gray-300 rounded-t-lg w-52">
                    <Link href="/komunitas">
                      <a className="text-black text-xl ">
                        Keliling Komunitas
                      </a>
                    </Link>
                  </div>

                  <div className="relative py-1 px-4 hover:bg-gray-300 rounded-b-lg w-52">
                    <Link href="/workshop">
                      <a className="text-black text-xl ">Workshop</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 py-1 hover:bg-gray-300 rounded-b-lg">
                <Link href="/timeline" passHref>
                  <a
                    onMouseOver={() => setHidePre(true)}
                    className="text-black w-40 text-xl "
                  >
                    Main Event
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <LFMLink type={type} url="https://www.oracularganffest.com/" text="Exhibition" />
          <LFMLink type={type} url="/archives" text="Archive" />
          <LFMLink type={type} url="/merch" text="Merch" className="text-Montserrat"/>
          <LFMLink type={type} url="/forum" text="Pojok GFF" />
          <LFMLink type={type} url="/about" text="About" />
        </div>
        <div className="flex flex-row items-center justify-end w-3/12">
          {!loggedIn ? (
            <div className="flex flex-row items-center justify-center w-5/6">
              <Button text="Sign Up" url="#" onClick={authRegisterClick} />
              <div
                className={
                  "w-0 h-8 mx-4 border-l-2 " +
                  (type === "home" ? "border-black" : "border-white")
                }
              ></div>
              <Button text="Log In" url="#" onClick={authLoginClick} />
            </div>
          ) : (
            <>
              <Profile
                logout={() => {
                  logoutClick;
                }}
                setLoggedIn={setLoggedIn}
              />
              {/* <div
                className="p-2"
                onClick={() => {
                  logout();
                  setLoggedIn(false);
                  console.log("Logout");
                }}
              >
                <Link href="/">
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
              </div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
