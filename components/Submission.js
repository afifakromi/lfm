import React, { useState } from "react";
import InputField from "./commons/InputFields";
import FeedBackMsg from "./commons/FeedBackMsg";
import Button from "./commons/Button";
import { useFormik } from "formik";
import Image from "next/image";
import InputRadio from "./submission/InputRadio";
import BtnSlide from "./submission/BtnSlide";
import FormOne from "./submission/FormOne";

const Submission = ({ nextSlide, prevSlide, index }) => {
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
          <p>Form {index} of 3</p>
        </div>
        <hr className="bg-gradient-to-r from-first via-middle to-last" />
      </div>
      <FormOne nextSlide={nextSlide} prevSlide={prevSlide} />
    </div>
  );
};

export default Submission;
