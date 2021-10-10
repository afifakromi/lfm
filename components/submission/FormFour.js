import React, { useEffect, useState } from "react";
import FeedBackMsg from "../commons/FeedBackMsg";
import BtnSlide from "./BtnSlide";
import Header from "./Header";
import { useFormik } from "formik";
import {
  getFormOneState,
  getFormTwoState,
  getFormThreeState,
} from "../../authentication/state";
import InputAgreement from "./InputAgreement";
import { useRecoilValue } from "recoil";

const validate = (values) => {
  const errors = {};

  if (!values.ott || !values.pameran || !values.internal || !values.kurator) {
    errors.all = "All fields is required";

    return errors;
  }
};

const FormFour = () => {
  const getFormOneVal = useRecoilValue(getFormOneState);
  const getFormTwoVal = useRecoilValue(getFormTwoState);
  const getFormThreeVal = useRecoilValue(getFormThreeState);

  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      ott: "",
      pameran: "",
      internal: "",
      kurator: "",
    },
    validate,
    onSubmit: async (values) => {
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
                getFormOneVal.bahasa,
                getFormOneVal.cover,
                getFormOneVal.durasi,
                getFormOneVal.festival,
                getFormOneVal.judul_film,
                getFormOneVal.kota,
                getFormOneVal.link,
                getFormOneVal.penghargaan,
                getFormOneVal.sinopsis,
                getFormOneVal.tahun,
                getFormOneVal.suara,
                getFormTwoVal.alamat,
                getFormTwoVal.biografi,
                getFormTwoVal.email,
                getFormTwoVal.foto,
                getFormTwoVal.kota,
                getFormTwoVal.nama,
                getFormTwoVal.no_hp,
                getFormTwoVal.provinsi,
                getFormTwoVal.gender,
                getFormThreeVal.nama_produksi,
                getFormThreeVal.alamat_produksi,
                getFormThreeVal.no_hp_produksi,
                getFormThreeVal.provinsi_produksi,
                getFormThreeVal.nama_produser,
                getFormThreeVal.no_hp_produser,
                values.ott,
                values.pameran,
                values.internal,
                values.kurator,
              ],
            ]),
          }
        );

        let res = await response.json();

        if (res.message === "Successfully Inserted") {
          setSuccess(true);
        }
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
        <Header title="Agreement" index={4} />
      </div>

      <div className="flex-shrink-0 w-6/12 mt-8">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <h1 className="text-4xl text-customCrem">Mandatory</h1>
          <InputAgreement
            text="Karya anda boleh ditayangkan baik melalui OTT maupun secara luring dalam kegiatan pemutaran Ganesha Film Festival."
            optionsOne="ott"
            onChange={formik.handleChange}
            name="ott"
            valueOne="OTT"
          />
          <InputAgreement
            text="Karya Anda boleh ditayangkan pada acara-acara non-profit seperti pameran, presentasi, diskusi, roadshow dan workshop yang melibatkan Ganesha Film Festival."
            optionsOne="pameran"
            onChange={formik.handleChange}
            name="pameran"
            valueOne="Pameran"
          />

          <h1 className="mt-8 text-4xl text-customCrem">Optional</h1>
          <InputAgreement
            text="Karya Anda boleh ditayangkan di kalangan internal Liga Film Mahasiswa ITB."
            optionsOne="internal"
            onChange={formik.handleChange}
            name="internal"
            valueOne="Internal"
          />
          <InputAgreement
            text="Karya Anda dapat dipinjam oleh pihak ketiga (kurator, media, mahasiswa, dsb) untuk jangka waktu singkat untuk keperluan preview dan riset. Kami mendata peminjaman ini dan akan memastikan karya tersebut kembali ke Arsip Ganesha Film Festival setelah pemutaran. Setiap peminjam harus mengisi formulir yang menyatakan tidak akan membuat duplikat karya. Catatan: Kami tidak bisa mencegah duplikasi karya terjadi."
            optionsOne="kurator"
            onChange={formik.handleChange}
            name="kurator"
            valueOne="Kurator"
          />
          {success ? (
            <FeedBackMsg text="Thanks for Submitting" error={false} />
          ) : null}
          {formik.errors.all ? (
            <FeedBackMsg text={formik.errors.all} error={true} />
          ) : null}
          <div className="flex flex-row justify-end w-full mt-6">
            <BtnSlide type="submit" next={true} onClick={formik.handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormFour;
