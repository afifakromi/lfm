import React, { useState } from "react";
import InputField from "./commons/InputFields";
import FeedBackMsg from "./commons/FeedBackMsg";
import Button from "./commons/Button";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (
    !values.username ||
    !values.email ||
    !values.title ||
    !values.production_year ||
    !values.production_city ||
    !values.duration
  ) {
    errors.all = "All fields is required";

    return errors;
  } else {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.all = "Invalid Email Address";

      return errors;
    }
  }
};

const Submission = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      title: "",
      production_year: "",
      production_city: "",
      duration: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/akromiafif/google_sheets/WkrOfbhsGNjJzVmB?tabId=LFM_Database",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [
                values.username,
                values.email,
                values.title,
                values.production_year,
                values.production_city,
                values.duration,
              ],
            ]),
          }
        );

        let res = await response.json();
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex-shrink-0 w-2/5">
        <form onSubmit={formik.handleSubmit} className="w-full">
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
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            name="title"
            placeholder="Movie Title"
            width="100%"
          />
          <InputField
            type="text"
            onChange={formik.handleChange}
            value={formik.values.production_year}
            name="production_year"
            placeholder="Production Year"
            width="100%"
          />
          <InputField
            type="text"
            onChange={formik.handleChange}
            value={formik.values.production_city}
            name="production_city"
            placeholder="Production City"
            width="100%"
          />
          <InputField
            type="text"
            onChange={formik.handleChange}
            value={formik.values.duration}
            name="duration"
            placeholder="Duration"
            width="100%"
          />

          {formik.errors.all ? (
            <FeedBackMsg text={formik.errors.all} error={true} />
          ) : null}
          {error ? <FeedBackMsg text={errorMsg} error={true} /> : null}
          <Button text="SUBMIT" width="100%" />
        </form>
      </div>
    </div>
  );
};

export default Submission;
