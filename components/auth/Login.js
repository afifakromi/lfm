import React, { useState } from "react";
import { login } from "../../authentication/utils";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import InputField from "../commons/InputFields";
import Button from "../commons/Button";
import FeedBackMsg from "../commons/FeedBackMsg";

//State imports
import { useSetRecoilState } from "recoil";
import { isLoggedIn } from "../../authentication/state";

const validate = (values) => {
  const errors = {};

  if (!values.email || !values.password) {
    errors.all = "All fields is required";

    return errors;
  }
};

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
            setErrorMsg("Invalid Credentials");
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
            value={formik.values.email}
            name="email"
            placeholder="email"
            width="100%"
          />
          <InputField
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            placeholder="password"
            width="100%"
          />
          {formik.errors.all ? (
            <FeedBackMsg text={formik.errors.all} error={true} />
          ) : null}
          {error ? (
            <FeedBackMsg text="Username & Password Invalid" error={true} />
          ) : null}
          <Button text="Login" width="100%" />
        </form>
      </div>
    </div>
  );
};

export default Login;
