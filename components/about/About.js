import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full px-32 py-20 bg-nav">
      {/* Ganesha Film Festival */}
      <div className="flex flex-row items-center w-full ">
        <div>
          <Image src="/img/ga.svg" width={400} height={380} alt="Logo" />
        </div>
        <div className="w-3/4 ml-8 ">
          <h1 className="text-6xl text-customCrem">Ganesha Film Festival</h1>
          <p className="mt-4 ">
            Ganesha Film Festival (Ganffest) adalah festival film dua tahunan
            dengan skala nasional yang dilaksanakan oleh Liga Film Mahasiswa
            ITB. Diselenggarakan di Bandung sejak tahun 2008, boleh dibilang
            Ganffest merupakan salah satu festival film mahasiswa tertua di
            Indonesia.
          </p>
          <p className="mt-4 ">
            Pada awalnya, Ganffest hanya memiliki program kompetisi yang mengadu
            98 film pendek serta 4 video art. Sekarang, Ganffest telah
            berkembang mejadi salah satu festival film pembuka, dikarenakan
            diadakan pada awal tahun, dengan serapan submisi lebih dari 300 film
            dengan sebaran dari berbagai kota di Indonesia.
          </p>
          <p className="mt-4 ">
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
          <h1 className="text-6xl text-customCrem">LFM ITB</h1>
          <p className="mt-4 ">
            Berdiri pada 21 April 1960, Liga Film Mahasiswa (LFM) adalah Unit
            Kegiatan Mahasiswa yang bergerak di bidang media baik film beserta
            kajiannya hingga fotografi beserta eksibisinya.
          </p>
          <p className="mt-4 ">
            Sebagai salah satu Unit Kegiatan Mahasiswa tertua di ITB, 
            LFM ITB telah memilki peranan penting baik skala kampus dengan 
            keterlibatannya sebagai pusat dokumentasi sosial kegiatan kampus ITB 
            hingga skala Kota Bandung dengan adanya Bioskop Kampus yang secara 
            konsisten dijalankan sejak pertama kali menerima hibah proyektor dari 
            Kedutaan Belanda.
          </p>
          <p className="mt-4">
            Hingga saat ini, LFM ITB terus berusaha untuk memberikan dampak baik 
            untuk anggotanya maupun lingkungan sekitar melalui program-programnya 
            seperti Ganesha Film Festival.
          </p>
        </div>
        <div>
          <Image src="/img/lfm-putih.png" width={500} height={230} alt="Logo" />
        </div>
      </div>
      {/* Germinal */}
      <div className="flex flex-row items-center w-full mt-8 ">
        <div>
          <Image src="/img/vistantum.svg" width={400} height={300} alt="Logo" />
        </div>
        <div className="w-3/4 ml-8 ">
          <h1 className="text-6xl text-customCrem">
            Ganesha Film Festival 2022
          </h1>
          <p className="mt-4">
            Dalam kondisi yang mewajibkan untuk mengurangi kontak fisik, teknologi 
            yang terus berkembang mulai dipakai secara rutin dalam keseharian. Kehadiran 
            teknologi baru yang membantu keseharian manusia, terkadang belum diterima 
            secara penuh tentang bagaimana cara kerjanya dan tak jarang menjadi hal 
            yang di luar nalar.
          </p>
          <p className="mt-4 ">
            Ganesha Film Festival tahun ini mengangkat Vis Tantum sebagai perspektif 
            baru mengenai teknologi, yang telah menjadi kawan kita sehari-hari namun 
            tak sepenuhnya kita kenali, yang manusia cipta namun cara kerjanya tak 
            semua bisa dicerna.
          </p>
          <p className="mt-4 ">
            Sebenarnya Vis Tantum sendiri merupakan terminologi lain dari kuantum, 
            di mana seperti teorinya yang memajukan peradaban manusia, namun masih 
            belum bisa diterima banyak orang. Vis Tantum menjadi sesuatu yang baru, 
            tidak jelas, bahkan tak jarang di luar nalar, namun keberadaannya mampu 
            meningkatkan derajat hidup manusia ke tingkat yang lebih tinggi lagi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
