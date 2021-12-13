import React from "react";
import Link from "next/link";
import Layout from "./commons/Layout";

const NotAuthorized = () => {
  return (
    <Layout title="Not Authorized" auth={false}>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-nav">
        <p className="text-2xl text-customCrem">
          Please login first to use this feature
        </p>
        <Link href="/">
          <a>
            <div className="flex flex-row items-center justify-center px-8 py-2 mt-4 bg-red-400 rounded-lg cursor-pointer hover:opacity-80">
              <p className="text-2xl">Go to Home</p>
            </div>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default NotAuthorized;
