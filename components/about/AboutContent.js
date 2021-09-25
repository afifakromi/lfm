import React from "react";
import Image from "next/image";

const AboutContent = () => {
  return (
    <div className="flex flex-row w-full">
      <div>
        <Image src="/img/logo-xl.png" width={400} height={400} alt="Logo" />
      </div>
      <div className="w-3/4 px-16 py-8 ">
        <h1 className="text-6xl text-customArchive">Ganesha Film Festival</h1>
        <p className="mt-4 text-customArchive">
          Ganesha Film Festival (Ganffest) adalah festival film dua tahunan
          dengan skala nasional yang dilaksanakan oleh Liga Film Mahasiswa ITB.
          Diselenggarakan di Bandung sejak tahun 2008, boleh dibilang Ganffest
          merupakan salah satu festival film mahasiswa tertua di Indonesia.
        </p>
        <p className="mt-4 text-customArchive">
          Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu
          98 film pendek serta 4 video art. Sekarang, Ganffest telah berkembang
          mejadi salah satu festival film pembuka, dikarenakan diadakan pada
          awal tahun, dengan serapan submisi lebih dari 300 film dengan sebaran
          dari berbagai kota di Indonesia.
        </p>
        <p className="mt-4 text-customArchive">
          Sebagai pelaku ekosistem perfilman, Ganffest berupaya untuk memberikan
          ruang eksibisi serta stimulus bagi produksi film pendek di Indonesia.
          Adapun sebagai misi kebudayaan, Ganffest juga berharap memberikan
          ruang hiburan alternatif bagi masyarakat umum sehingga lebih
          mengetahui film-film pendek produksi anak bangsa.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
