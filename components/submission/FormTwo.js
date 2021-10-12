import React, { useState, useEffect } from "react";
import InputField from "../commons/InputFields";
import FeedBackMsg from "../commons/FeedBackMsg";
import InputRadio from "./InputRadio";
import BtnSlide from "./BtnSlide";
import Header from "./Header";
import { useFormik } from "formik";
import { formTwoState } from "../../authentication/state";
import { useRecoilState } from "recoil";

const validate = (values) => {
  const errors = {};

  if (
    !values.nama ||
    !values.no_hp ||
    !values.alamat ||
    !values.email ||
    !values.kota ||
    !values.foto ||
    !values.provinsi ||
    !values.biografi ||
    !values.gender
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

const FormTwo = ({ nextSlide, prevSlide }) => {
  const [fromTwoValue, setFormTwoValue] = useRecoilState(formTwoState);

  const formik = useFormik({
    initialValues: {
      nama: "",
      no_hp: "",
      alamat: "",
      email: "",
      kota: "",
      foto: "",
      provinsi: "",
      biografi: "",
      gender: "",
    },
    validate,
    onSubmit: async (values) => {
      if (!formik.errors.all) {
        nextSlide();
        setFormTwoValue(values);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-16 bg-nav">
      <div className="flex flex-col w-3/5">
        <h1 className="text-4xl text-center text-white bg-gradient-to-r text-gradient from-first via-middle to-last">
          FORM SUBMISSION
        </h1>
        <Header title="Director Data" index={2} />
      </div>
      <div className="flex-shrink-0 w-6/12 mt-8">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nama}
              name="nama"
              variation="submission"
              label="Nama Lengkap"
            />
            <InputRadio
              label="Jenis Kelamin"
              optionsOne="Laki-Laki"
              optionsTwo="Perempuan"
              onChange={formik.handleChange}
              name="gender"
              valueOne="Laki-Laki"
              valueTwo="Perempuan"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.no_hp}
              name="no_hp"
              placeholder="'081214840080"
              variation="submission"
              label="Nomor Telepon"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.alamat}
              name="alamat"
              variation="submission"
              label="Alamat"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              variation="submission"
              label="Alamat Email"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.kota}
              name="kota"
              variation="submission"
              label="Kota/Kabupaten"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.foto}
              name="foto"
              variation="submission"
              label="Link Foto Diri"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.provinsi}
              name="provinsi"
              variation="submission"
              label="Provinsi"
            />
          </div>
          <div className="flex flex-col items-start justify-between mt-2 mb-4 text-white font-poppins">
            <label>Biografi Director</label>
            <textarea
              name="biografi"
              value={formik.values.biografi}
              onChange={formik.handleChange}
              className="w-full h-24 mt-4 border-2 border-white text-customGrey bg-nav"
            ></textarea>
          </div>
          {formik.errors.all ? (
            <FeedBackMsg text={formik.errors.all} error={true} />
          ) : null}
          <div className="flex flex-row justify-between w-full mt-6">
            <BtnSlide type="normal" next={false} onClick={prevSlide} />
            <BtnSlide type="normal" next={true} onClick={formik.handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
