import React, { useState } from "react";
import InputField from "../commons/InputFields";
import FeedBackMsg from "../commons/FeedBackMsg";
import InputRadio from "./InputRadio";
import BtnSlide from "./BtnSlide";
import { formOneState } from "../../authentication/state";
import { useFormik } from "formik";
import { useRecoilState } from "recoil";
import Image from "next/image";

const validate = (values) => {
  const errors = {};

  if (
    !values.judul_film ||
    !values.bahasa ||
    !values.tahun ||
    !values.festival ||
    !values.kota ||
    !values.penghargaan ||
    !values.durasi ||
    !values.link ||
    !values.cover ||
    !values.sinopsis
  ) {
    errors.all = "All fields is required";

    return errors;
  }
};

const FormOne = ({ nextSlide, prevSlide }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [formValue, setFormValue] = useRecoilState(formOneState);

  const formik = useFormik({
    initialValues: {
      judul_film: "",
      bahasa: "",
      tahun: "",
      festival: "",
      kota: "",
      penghargaan: "",
      durasi: "",
      link: "",
      cover: "",
      sinopsis: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        if (!formik.errors.all) {
          nextSlide();
          prevSlide();
          setFormValue(values);
        }

        const response = await fetch(
          "https://v1.nocodeapi.com/akromiafif/google_sheets/WkrOfbhsGNjJzVmB?tabId=LFM_Database",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [
                values.judul_film,
                values.bahasa,
                values.tahun,
                values.festival,
                values.kota,
                values.penghargaan,
                values.durasi,
                values.link,
                values.cover,
                values.sinopsis,
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
              value={formik.values.judul_film}
              name="judul_film"
              placeholder="Judul Film"
              variation="submission"
              label="Judul Film"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.bahasa}
              name="bahasa"
              placeholder="Bahasa"
              variation="submission"
              label="Bahasa yang Digunakan dalam Film"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.tahun}
              name="tahun"
              placeholder="Tahun Produksi"
              variation="submission"
              label="Tahun Produksi"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.festival}
              name="festival"
              placeholder="Festival Film"
              variation="submission"
              label="Festival Film yang pernah Diikuti"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.kota}
              name="kota"
              placeholder="Kota Produksi"
              variation="submission"
              label="Kota Produksi"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.penghargaan}
              name="penghargaan"
              placeholder="Penghargaan"
              variation="submission"
              label="Penghargaan yang Diraih"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.durasi}
              name="durasi"
              placeholder="Durasi Film"
              variation="submission"
              label="Durasi Film"
            />
            <InputRadio
              label="Audio"
              optionsOne="Bersuara"
              optionsTwo="Tidak Bersuara"
            />
          </div>
          <div className="flex flex-col items-start justify-between mt-2 text-white font-poppins">
            <label>Sinposis</label>
            <textarea
              name="sinopsis"
              value={formik.values.sinopsis}
              onChange={formik.handleChange}
              className="w-full h-24 mt-4 border-2 border-white bg-nav"
            ></textarea>
          </div>
          <div className="flex flex-row items-start justify-between mt-4 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.link}
              name="link"
              placeholder="Link Film"
              variation="submission"
              label="Link Film"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.cover}
              name="cover"
              placeholder="Link Cover Film"
              variation="submission"
              label="Link Cover Film"
            />
          </div>

          {formik.errors.all ? (
            <FeedBackMsg text={formik.errors.all} error={true} />
          ) : null}
          <div className="flex flex-row justify-between w-full mt-6">
            <BtnSlide next={false} onClick={formik.handleSubmit} />
            <BtnSlide next={true} onClick={formik.handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOne;
