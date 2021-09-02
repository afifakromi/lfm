import React, { useState } from "react";
import InputField from "../commons/InputFields";
import FeedBackMsg from "../commons/FeedBackMsg";
import InputRadio from "./InputRadio";
import BtnSlide from "./BtnSlide";
import { formTwoState } from "../../authentication/state";
import { useFormik } from "formik";
import { useRecoilState } from "recoil";
import Image from "next/image";

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
    !values.biografi
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
  const [errorMsg, setErrorMsg] = useState("");
  const [formValue, setFormValue] = useRecoilState(formTwoState);

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
                values.nama,
                values.no_hp,
                values.alamat,
                values.email,
                values.kota,
                values.foto,
                values.provinsi,
                values.biografi,
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
            <p className="ml-4 text-xl">Director Data</p>
          </div>
          <p>Form 2 of 3</p>
        </div>
        <hr className="bg-gradient-to-r from-first via-middle to-last" />
      </div>
      <div className="flex-shrink-0 w-6/12 mt-8">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nama}
              name="nama"
              placeholder="Nama Lengkap"
              variation="submission"
              label="Nama Lengkap"
            />
            <InputRadio
              label="Jenis Kelamin"
              optionsOne="Laki Laki"
              optionsTwo="Perempuan"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.no_hp}
              name="no_hp"
              placeholder="Nomor Telepon"
              variation="submission"
              label="Nomor Telepon"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.alamat}
              name="alamat"
              placeholder="Alamat"
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
              placeholder="Alamat Email"
              variation="submission"
              label="Alamat Email"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.kota}
              name="kota"
              placeholder="Kota/Kabupaten"
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
              placeholder="Link Foto Diri"
              variation="submission"
              label="Link Foto Diri"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.provinsi}
              name="provinsi"
              placeholder="Provinsi"
              variation="submission"
              label="Provinsi"
            />
          </div>
          <div className="flex flex-col items-start justify-between mt-2 text-white font-poppins">
            <label>Biografi Director</label>
            <textarea
              name="biografi"
              value={formik.values.biografi}
              onChange={formik.handleChange}
              className="w-full h-24 mt-4 border-2 border-white bg-nav"
            ></textarea>
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

export default FormTwo;
