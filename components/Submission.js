import React, { useState } from "react";
import InputField from "./commons/InputFields";
import FeedBackMsg from "./commons/FeedBackMsg";
import Button from "./commons/Button";
import { useFormik } from "formik";
import Image from "next/image";
import InputRadio from "./submission/InputRadio";

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
    <div className="flex flex-col items-center justify-center w-full h-full py-16 bg-nav">
      <div className="flex flex-col w-3/5">
        <h1 className="text-4xl text-center text-white bg-gradient-to-r text-gradient from-first via-middle to-last">
          FORM SUBMISSION
        </h1>
        <div className="flex flex-row items-center justify-between w-full mt-8 text-white">
          <div className="flex flex-row items-center">
            <Image
              src="/img/film.svg"
              width={50}
              height={50}
              alt="Film Data Logo"
            />
            <p className="ml-4 text-xl">Film Data</p>
          </div>
          <p>Form 1 of 3</p>
        </div>
        <hr className="bg-gradient-to-r from-first via-middle to-last" />
      </div>
      <div className="flex-shrink-0 w-6/12 mt-8">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              placeholder="Username"
              variation="submission"
              label="Judul Film"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              placeholder="E-mail"
              variation="submission"
              label="Bahasa yang Digunakan dalam Film"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
              name="title"
              placeholder="Movie Title"
              variation="submission"
              label="Tahun Produksi"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.production_year}
              name="production_year"
              placeholder="Production Year"
              variation="submission"
              label="Festival Film yang pernah Diikuti"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.production_city}
              name="production_city"
              placeholder="Production City"
              variation="submission"
              label="Kota Produksi"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.duration}
              name="duration"
              placeholder="Duration"
              variation="submission"
              label="Penghargaan yang Diraih"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.production_city}
              name="production_city"
              placeholder="Production City"
              variation="submission"
              label="Durasi Film"
            />
            <InputRadio />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <textarea className="w-full h-24 border-2 border-white bg-nav"></textarea>
          </div>
          <div className="flex flex-row items-start justify-between mt-4 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.production_city}
              name="production_city"
              placeholder="Production City"
              variation="submission"
              label="Link Film"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.duration}
              name="duration"
              placeholder="Duration"
              variation="submission"
              label="Link Cover Film"
            />
          </div>

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
