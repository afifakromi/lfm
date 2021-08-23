import React, { useState, useEffect } from "react";
import { login } from "../../authentication/utils";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import InputField from "../commons/InputFields";
import Button from "../commons/Button";
import FeedBackMsg from "../commons/FeedBackMsg";
import Image from "next/image";

//State imports
import { useRecoilState } from "recoil";
import { isLoggedIn } from "../../authentication/state";

const validate = (values) => {
  const errors = {};

  if (!values.email || !values.password) {
    errors.all = "All fields is required";

    return errors;
  }
};

const Login = ({ open = false }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [hide, setHide] = useState(false);

  const [loggedIn, setLoggedIn] = useRecoilState(isLoggedIn);

  const handleHide = () => {
    setHide(true);
    console.log(hide);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      login(values)
        .then((res) => {
          console.log(res);

          if (!res.status) {
            setError(true);
            setErrorMsg("Username & Password Invalid");
          } else {
            console.log(localStorage.getItem("nama"));
            setLoggedIn(true);
            router.push("/submission");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div
      className={
        (open && !hide ? "block" : "hidden") +
        " absolute flex-row w-4/12 px-8 py-4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl top-1/2 left-1/2"
      }
    >
      <div className="flex justify-end mb-2">
        <Image
          src="/img/close_btn.svg"
          width={30}
          height={30}
          alt="Close Button"
          className="cursor-pointer hover:opacity-50"
          onClick={() => {
            handleHide();
          }}
        />
      </div>
      <div className="flex flex-row justify-center my-8">
        <Image src="/img/logo.png" width={230} height={70} alt="Logo" />
      </div>

      <div>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <InputField
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            placeholder="Email"
            width="100%"
          />
          <InputField
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            placeholder="Password"
            width="100%"
          />
          {formik.errors.all ? (
            <FeedBackMsg text={formik.errors.all} error={true} />
          ) : null}
          {error ? <FeedBackMsg text={errorMsg} error={true} /> : null}
          <Button text="Login" width="100%" />
        </form>
      </div>
    </div>
  );
};

export default Login;
