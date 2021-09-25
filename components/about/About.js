import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full px-32 py-20 bg-customArchive">
      {/* Ganesha Film Festival */}
      <div className="flex flex-row items-center w-full ">
        <div>
          <Image src="/img/logo-xl.png" width={400} height={380} alt="Logo" />
        </div>
        <div className="w-3/4 ml-8 ">
          <h1 className="text-6xl text-customArchive">Ganesha Film Festival</h1>
          <p className="mt-4 text-customArchive">
            Ganesha Film Festival (Ganffest) adalah festival film dua tahunan
            dengan skala nasional yang dilaksanakan oleh Liga Film Mahasiswa
            ITB. Diselenggarakan di Bandung sejak tahun 2008, boleh dibilang
            Ganffest merupakan salah satu festival film mahasiswa tertua di
            Indonesia.
          </p>
          <p className="mt-4 text-customArchive">
            Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu
            98 film pendek serta 4 video art. Sekarang, Ganffest telah
            berkembang mejadi salah satu festival film pembuka, dikarenakan
            diadakan pada awal tahun, dengan serapan submisi lebih dari 300 film
            dengan sebaran dari berbagai kota di Indonesia.
          </p>
          <p className="mt-4 text-customArchive">
            Sebagai pelaku ekosistem perfilman, Ganffest berupaya untuk
            memberikan ruang eksibisi serta stimulus bagi produksi film pendek
            di Indonesia. Adapun sebagai misi kebudayaan, Ganffest juga berharap
            memberikan ruang hiburan alternatif bagi masyarakat umum sehingga
            lebih mengetahui film-film pendek produksi anak bangsa.
          </p>
        </div>
      </div>
      {/* LFM ITB */}
      <div className="flex flex-row items-center w-full mt-8 ">
        <div className="w-3/4 mr-8">
          <h1 className="text-6xl text-customArchive">LFM ITB</h1>
          <p className="mt-4 text-customArchive">
            Berdiri pada 21 April 1960, Liga Film Mahasiswa (LFM) adalah Unit
            Kegiatan Mahasiswa yang bergerak di bidang media baik film beserta
            kajiannya hingga fotografi beserta eksibisinya.
          </p>
          <p className="mt-4 text-customArchive">
            Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu
            98 film pendek serta 4 video art. Sekarang, Ganffest telah
            berkembang mejadi salah satu festival film pembuka, dikarenakan
            diadakan pada awal tahun, dengan serapan submisi lebih dari 300 film
            dengan sebaran dari berbagai kota di Indonesia.
          </p>
          <p className="mt-4 text-customArchive">
            Sebagai pelaku ekosistem perfilman, Ganffest berupaya untuk
            memberikan ruang eksibisi serta stimulus bagi produksi film pendek
            di Indonesia. Adapun sebagai misi kebudayaan, Ganffest juga berharap
            memberikan ruang hiburan alternatif bagi masyarakat umum sehingga
            lebih mengetahui film-film pendek produksi anak bangsa.
          </p>
        </div>
        <div>
          <Image src="/img/lfm-xl.png" width={500} height={230} alt="Logo" />
        </div>
      </div>
      {/* Germinal */}
      <div className="flex flex-row items-center w-full mt-8 ">
        <div>
          <Image
            src="/img/germinal-xl.png"
            width={400}
            height={300}
            alt="Logo"
          />
        </div>
        <div className="w-3/4 ml-8 ">
          <h1 className="text-6xl text-customArchive">
            Ganesha Film Festival 2021
          </h1>
          <p className="mt-4 text-customArchive">
            Percampuran teknologi dengan berbagai isu seperti sosial, budaya,
            ekonomi, dan politik menjadi kian nampak apabila dipandang secara
            seksama sepanjang dua tahun ke belakang baik dengan bentuk yang
            individualistik atau berlingkup kecil hingga yang melibatkan massa
            serta hajat hidup orang banyak. Kehadiran dari isu isu tersebut
            belum mencapai kondisi tunak, ia masih dalam tahap berkembang,
            Germinal (berkenaan dengan tingkat pemulaan perkembangan) merupakan
            refleksi kembali atas relasi manusia dengan perkembangan zaman
            tersebut.
          </p>
          <p className="mt-4 text-customArchive">
            Relasi antar bidang yang terbentuk pun menciptakan makna konotatif
            bahwa Germinal merupakan gambaran dunia yang tidak ajeg serta terus
            berkembang. Pembacaan ini menjadi penting lantaran ketidakterpisahan
            antara manusia dengan perkembangan zaman serta relasi dan fenomena
            yang telah atau mungkin terjadi yang dirasa menarik untuk
            dibicarakan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
