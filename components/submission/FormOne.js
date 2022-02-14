import React, { useEffect, useState } from "react";
import InputField from "../commons/InputFields";
import FeedBackMsg from "../commons/FeedBackMsg";
import InputRadio from "./InputRadio";
import BtnSlide from "./BtnSlide";
import Header from "./Header";
import { formOneState } from "../../authentication/state";
import { useFormik } from "formik";
import { useRecoilState } from "recoil";

const validate = values => {
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
    !values.sinopsis ||
    !values.suara
  ) {
    errors.all = "All fields is required";

    return errors;
  }
};

const FormOne = ({ nextSlide }) => {
  const [formOnevalue, setFormOneValue] = useRecoilState(formOneState);
  useEffect(() => {
    console.log(localStorage.getItem("email"));
  }, []);
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
      suara: "",
    },
    validate,
    onSubmit: async values => {
      if (!formik.errors.all) {
        nextSlide();
        setFormOneValue(values);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-16 bg-nav">
      <div className="flex flex-col w-3/5">
        <h1 className="text-4xl text-center text-white bg-gradient-to-r text-gradient from-first via-middle to-last">
          FORM SUBMISSION
        </h1>
        <Header title="Film Data" index={1} />
      </div>
      <div className="flex-shrink-0 w-6/12 mt-8">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.judul_film}
              name="judul_film"
              variation="submission"
              label="Judul Film"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.bahasa}
              name="bahasa"
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
              variation="submission"
              label="Tahun Produksi"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.festival}
              name="festival"
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
              variation="submission"
              label="Kota Produksi"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.penghargaan}
              name="penghargaan"
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
              variation="submission"
              label="Durasi Film"
            />
            <InputRadio
              label="Audio"
              optionsOne="Bersuara"
              optionsTwo="Tidak Bersuara"
              onChange={formik.handleChange}
              name="suara"
              valueOne="Bersuara"
              valueTwo="Tidak Bersuara"
            />
          </div>
          <div className="flex flex-col items-start justify-between mt-2 text-white font-poppins">
            <label>Sinopsis</label>
            <textarea
              name="sinopsis"
              value={formik.values.sinopsis}
              onChange={formik.handleChange}
              className="w-full h-24 px-4 py-2 mt-4 border-2 border-white text-customGrey bg-nav"
            ></textarea>
          </div>
          <div className="flex flex-row items-start justify-between mt-4 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.link}
              name="link"
              variation="submission"
              label="Link Film"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.cover}
              name="cover"
              variation="submission"
              label="Link Cover Film"
            />
          </div>

          {formik.errors.all ? (
            <FeedBackMsg text={formik.errors.all} error={true} />
          ) : null}
          <div className="flex flex-row justify-end w-full mt-6">
            <BtnSlide type="normal" next={true} onClick={formik.handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOne;
