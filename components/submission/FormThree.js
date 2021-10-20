import React from "react";
import InputField from "../commons/InputFields";
import FeedBackMsg from "../commons/FeedBackMsg";
import BtnSlide from "./BtnSlide";
import { useFormik } from "formik";
import { formThreeState } from "../../authentication/state";
import { useRecoilState } from "recoil";
import Header from "./Header";

const validate = (values) => {
  const errors = {};

  if (
    !values.nama_produksi ||
    !values.alamat_produksi ||
    !values.no_hp_produksi ||
    !values.provinsi_produksi ||
    !values.nama_produser ||
    !values.no_hp_produser
  ) {
    errors.all = "All fields is required";

    return errors;
  }
};

const FormThree = ({ nextSlide, prevSlide }) => {
  const [formThreeValue, setFormThreeValue] = useRecoilState(formThreeState);

  const formik = useFormik({
    initialValues: {
      nama_produksi: "",
      alamat_produksi: "",
      no_hp_produksi: "",
      provinsi_produksi: "",
      nama_produser: "",
      no_hp_produser: "",
    },
    validate,
    onSubmit: async (values) => {
      if (!formik.errors.all) {
        nextSlide();
        setFormThreeValue(values);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-16 bg-nav">
      <div className="flex flex-col w-3/5">
        <h1 className="text-4xl text-center text-white bg-gradient-to-r text-gradient from-first via-middle to-last">
          FORM SUBMISSION
        </h1>
        <Header title="Production House Data" index={3} />
      </div>
      <div className="flex-shrink-0 w-6/12 mt-8">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nama_produksi}
              name="nama_produksi"
              variation="submission"
              label="Nama"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.alamat_produksi}
              name="alamat_produksi"
              variation="submission"
              label="Alamat Lengkap"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.no_hp_produksi}
              name="no_hp_produksi"
              placeholder="'081214840080"
              variation="submission"
              label="Nomor Telepon"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.provinsi_produksi}
              name="provinsi_produksi"
              variation="submission"
              label="Provinsi"
            />
          </div>
        </form>
      </div>
      <div className="flex flex-col w-3/5">
        <Header title="Producer Data" index={3} type="hide" />
      </div>
      <div className="flex-shrink-0 w-6/12 mt-8">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="flex flex-row items-start justify-between mt-2 text-white font-poppins">
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nama_produser}
              name="nama_produser"
              variation="submission"
              label="Nama Lengkap"
            />
            <InputField
              type="text"
              onChange={formik.handleChange}
              value={formik.values.no_hp_produser}
              name="no_hp_produser"
              placeholder="'081214840080"
              variation="submission"
              label="Nomor Telepon"
            />
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

export default FormThree;
