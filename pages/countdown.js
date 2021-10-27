// import React, { useState, useEffect } from "react";
// import Countdown from "react-countdown";
// import Navbar from "../components/commons/Navbar";
// import Footer from "../components/commons/Footer";
// import Layout from "../components/commons/Layout";

// const countdown = () => {
//   const [komunitas, setKomunitas] = useState(true);
//   const [entry, setEntry] = useState(false);
//   const [timeline, setTimeline] = useState(false);

//   useEffect(() => {
//     console.log(komunitas);
//   }, [komunitas]);

//   return (
//     <Layout title="Countdown" auth={false}>
//       <Navbar />
//       <div className=" bg-nav w-full py-20 pb-80 flex flex-col items-center justify-center">
//         <p className="text-6xl mb-4 font-montserrat">COUNTDOWN</p>
//         <Countdown
//           className="text-6xl bg-gradient-to-r text-gradient from-first via-middle to-last"
//           date={Date.now() + 1000000000}
//         />
//         <p className="mt-8 text-xl">Hari Menuju Main Event Ganffest</p>

//         <div className="w-1/2 mt-20 flex flex-col justify-center">
//           <h1 className="text-6xl text-customCrem font-montserrat">Timeline</h1>
//           <p className="text-3xl mt-16 font-montserrat text-customPink">
//             11 Oktober 2021
//           </p>
//           <p className="text-3xl font-montserrat text-customPink ml-28">-</p>
//           <p className="text-3xl font-montserrat text-customPink">
//             17 Desember 2021
//           </p>
//           <div className="w-full mt-16 flex flex-row items-center">
//             <div
//               className="w-16 h-16 relative rounded-full bg-customFirst cursor-pointer"
//               onMouseOver={() => setKomunitas(true)}
//               onMouseLeave={() => setKomunitas(false)}
//             >
//               <div
//                 className={
//                   "absolute w-80 h-56 p-4 flex text-center flex-col bg-white top-20 rounded-xl -left-32"
//                 }
//                 style={{ display: komunitas ? "flex" : "none" }}
//               >
//                 <p className="text-2xl text-customPink">Keliling Komunitas</p>
//                 <p className=" text-customPink font-montserrat">
//                   7-13 November 2021
//                 </p>
//                 <p className="text-sm text-black mt-4">
//                   Keliling komunitas adalah kegiatan yang berupa mengunjungi
//                   komunitas-komunitas non perfilman yang bertujuan untuk
//                   memasyarakatkan film alternatif dan juga memperkenalkan GFF
//                   2022.
//                 </p>
//               </div>
//             </div>
//             <hr className="w-5/12 border-0 h-1 bg-gradient-to-r from-first to-middle" />
//             <div
//               className="w-16 h-16 relative rounded-full bg-customMiddle cursor-pointer"
//               onMouseOver={() => setTimeline(true)}
//               onMouseLeave={() => setTimeline(false)}
//             >
//               <div
//                 className={
//                   "absolute w-80 h-56 p-4 flex text-center flex-col bg-white top-20 rounded-xl -left-32"
//                 }
//                 style={{ display: timeline ? "flex" : "none" }}
//               >
//                 <p className="text-2xl text-customPink">Keliling Komunitas</p>
//                 <p className=" text-customPink font-montserrat">
//                   7-13 November 2021
//                 </p>
//                 <p className="text-sm text-black mt-4">
//                   Keliling komunitas adalah kegiatan yang berupa mengunjungi
//                   komunitas-komunitas non perfilman yang bertujuan untuk
//                   memasyarakatkan film alternatif dan juga memperkenalkan GFF
//                   2022.
//                 </p>
//               </div>
//             </div>
//             <hr className="w-5/12 border-0 h-1 bg-gradient-to-r from-middle to-last" />
//             <div
//               className="w-16 h-16 relative rounded-full bg-customLast cursor-pointer"
//               onMouseOver={() => setEntry(true)}
//               onMouseLeave={() => setEntry(false)}
//             >
//               <div
//                 className={
//                   "absolute w-80 h-56 p-4 flex text-center flex-col bg-white top-20 rounded-xl -left-32"
//                 }
//                 style={{ display: entry ? "flex" : "none" }}
//               >
//                 <p className="text-2xl text-customPink">Keliling Komunitas</p>
//                 <p className=" text-customPink font-montserrat">
//                   7-13 November 2021
//                 </p>
//                 <p className="text-sm text-black mt-4">
//                   Keliling komunitas adalah kegiatan yang berupa mengunjungi
//                   komunitas-komunitas non perfilman yang bertujuan untuk
//                   memasyarakatkan film alternatif dan juga memperkenalkan GFF
//                   2022.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </Layout>
//   );
// };

// export default countdown;

import React from "react";

const countdown = () => {
  return (
    <div>
      <p>TEST</p>
    </div>
  );
};

export default countdown;
