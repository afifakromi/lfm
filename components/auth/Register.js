import React, { useState } from "react";
import { register } from "../../authentication/utils";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import InputField from "../commons/InputFields";
import Button from "../commons/Button";
import FeedBackMsg from "../commons/FeedBackMsg";

//State imports
import { useRecoilState } from "recoil";
import { isLoggedIn } from "../../authentication/state";

const validate = (values) => {
  const errors = {};

  if (
    !values.nama ||
    !values.domisili ||
    !values.email ||
    !values.username ||
    !values.password
  ) {
    errors.all = "All fields is required";

    return errors;
  } else {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.all = "Invalid Email Address";

      return errors;
    }

    if (values.nama.length < 6) {
      errors.all = "Nama minimum 6 character";
    }

    if (values.username.length < 6) {
      errors.all = "Username minimum 6 character";
    }

    if (values.password.length < 8) {
      errors.all = "Password minimum 8 character";

      return errors;
    }
  }
};

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [setLoggedIn] = useRecoilState(isLoggedIn);

  const formik = useFormik({
    initialValues: {
      nama: "",
      domisili: "",
      email: "",
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      register(values)
        .then((res) => {
          if (!res.status) {
            setError(true);
            setErrorMsg(res.message);
          } else {
            router.push("/submission");
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <InputField
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nama}
            name="nama"
            placeholder="Nama"
            width="100%"
          />
          <InputField
            type="text"
            onChange={formik.handleChange}
            value={formik.values.domisili}
            name="domisili"
            placeholder="Domisili"
            width="100%"
          />
          <InputField
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            name="username"
            placeholder="Username"
            width="100%"
          />
          <InputField
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            placeholder="E-mail"
            width="100%"
          />
          <InputField
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            placeholder="Kata Sandi"
            width="100%"
          />
          {formik.errors.all ? (
            <FeedBackMsg text={formik.errors.all} error={true} />
          ) : null}
          {error ? <FeedBackMsg text={errorMsg} error={true} /> : null}
          <Button text="REGISTER" width="100%" />
        </form>
      </div>
    </div>
  );
};

export default Register;
