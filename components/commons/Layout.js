import React, { useEffect } from "react";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { isLoggedIn } from "../../authentication/state";
import { checkToken, fetchToken } from "../../authentication/utils";
import { useRouter } from "next/router";
import NotAuthorized from "../NotAuthorized";

const Layout = ({ title, auth, children }) => {
  const [loggedIn, setLoggedIn] = useRecoilState(isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (checkToken()) {
      setLoggedIn(true);
      const token = fetchToken();
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div>
      {auth && !loggedIn ? (
        <NotAuthorized />
      ) : (
        <>
          {children}
          <Head>
            <title>{title}</title>
          </Head>
        </>
      )}
    </div>
  );
};

export default Layout;
