import React, { useState } from "react";
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
import { useRouter } from "next/router";
import axios from "axios";
import { serverURL } from "../../authentication/server-config";

const validate = (values) => {
  const errors = {};

  // if (!values.internal || !values.kurator) {
  //   errors.all = "All fields is required";

  //   return errors;
  // }
};

const FormFour = ({ prevSlide }) => {
  const router = useRouter();
  const getFormOneVal = useRecoilValue(getFormOneState);
  const getFormTwoVal = useRecoilValue(getFormTwoState);
  const getFormThreeVal = useRecoilValue(getFormThreeState);

  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      internal: "",
      kurator: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/fadli/google_sheets/EbweNerMgiYQXqgq?tabId=LFM_Database",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [
                getFormOneVal.judul_film,
                getFormOneVal.tahun,
                getFormOneVal.kota,
                getFormOneVal.durasi,
                getFormOneVal.bahasa,
                getFormOneVal.festival,
                getFormOneVal.penghargaan,
                getFormOneVal.link,
                getFormOneVal.cover,
                getFormOneVal.sinopsis,
                getFormOneVal.suara,

                getFormTwoVal.nama,
                getFormTwoVal.gender,
                getFormTwoVal.no_hp,
                getFormTwoVal.email,
                getFormTwoVal.alamat,
                getFormTwoVal.kota,
                getFormTwoVal.provinsi,
                getFormTwoVal.biografi,
                getFormTwoVal.foto,

                getFormThreeVal.nama_produksi,
                getFormThreeVal.no_hp_produksi,
                getFormThreeVal.alamat_produksi,
                getFormThreeVal.provinsi_produksi,
                getFormThreeVal.nama_produser,
                getFormThreeVal.no_hp_produser,

                values.internal[0],
                values.kurator[0],
              ],
            ]),
          }
        );

        let res = await response.json();

        if (res.message === "Successfully Inserted") {
          axios
            .get(serverURL + "/send-email/" + localStorage.getItem("email"))
            .then((res) => console.log(res));
          setSuccess(true);
          setTimeout(() => {
            router.push("/");
          }, 1000);
        }
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
        <Header title="Agreement" index={4} />
      </div>

      <div className="flex-shrink-0 w-6/12 mt-8">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <h1 className="text-4xl text-customCrem">Mandatory</h1>
          <div className="flex flex-row items-center justify-center w-full px-2 py-4 mt-4 rounded-lg bg-customArchive">
            <p className="w-10/12 text-black">
              Karya anda boleh ditayangkan baik melalui OTT maupun secara luring
              dalam kegiatan pemutaran Ganesha Film Festival.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center w-full px-2 py-4 mt-4 rounded-lg bg-customArchive">
            <p className="w-10/12 text-black">
              Karya anda boleh ditayangkan baik melalui OTT maupun secara luring
              dalam kegiatan pemutaran Ganesha Film Festival.
            </p>
          </div>

          <h1 className="mt-8 text-4xl text-customCrem">Optional</h1>
          <InputAgreement
            text="Karya Anda boleh ditayangkan di kalangan internal Liga Film Mahasiswa ITB."
            optionsOne="internal"
            onChange={formik.handleChange}
            name="internal"
            valueOne="v"
            type="checkbox"
          />
          <InputAgreement
            text="Karya Anda dapat dipinjam oleh pihak ketiga (kurator, media, mahasiswa, dsb) untuk jangka waktu singkat untuk keperluan preview dan riset. Kami mendata peminjaman ini dan akan memastikan karya tersebut kembali ke Arsip Ganesha Film Festival setelah pemutaran. Setiap peminjam harus mengisi formulir yang menyatakan tidak akan membuat duplikat karya. Catatan: Kami tidak bisa mencegah duplikasi karya terjadi."
            optionsOne="kurator"
            onChange={formik.handleChange}
            name="kurator"
            valueOne="v"
            type="checkbox"
          />

          {success ? (
            <FeedBackMsg text="Thanks for Submitting" error={false} />
          ) : null}
          {formik.errors.all ? (
            <FeedBackMsg text={formik.errors.all} error={true} />
          ) : null}
          <div className="flex flex-row justify-between w-full mt-6">
            <BtnSlide type="normal" next={false} onClick={prevSlide} />
            <BtnSlide type="submit" next={true} onClick={formik.handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormFour;
