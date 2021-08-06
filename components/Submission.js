import React from "react";
// import { google } from "googleapis";
// import path from "path";
// import fs from "fs";

const Submission = () => {
  async function upload() {
    // try {
    //   const response = await drive.files.create({
    //     requestBody: {
    //       name: "TEST",
    //       mimeType: "/image/jpg",
    //     },
    //     media: {
    //       mimeType: "image/jpg",
    //       body: fs.createReadStream(filePath),
    //     },
    //   });

    //   console.log(response);
    // } catch (e) {
    //   console.log(e.message);
    // }

    console.log(filePath);
  }

  return (
    <div>
      <div
        onClick={() => {
          upload();
        }}
      >
        <p>Hello Submission</p>
      </div>
    </div>
  );
};

// export const getStaticProps = async () => {
//   const CLIENT_ID =
//     "769436284711-lrl7gs9r264nic8sdn8efqgbuh1huj8u.apps.googleusercontent.com";
//   const CLIENT_SECRET = "hui1lPuQRYjcrI-d1w8sP3UV";
//   const REDIRECT_URI = "https://developers.google.com/oauthplayground";
//   const REFRESH_TOKENS =
//     "1//04wBcuIBAr_YUCgYIARAAGAQSNwF-L9IrsRmkmeAyU12Ce85T9WE_x49xWoeGQTujZgrOZvr5ASI3mUc-1xRP2pw4hwCWWMgnrlw";

//   const oauth2Client = new google.auth.OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
//   );

//   oauth2Client.setCredentials({ refresh_token: REFRESH_TOKENS });
//   const drive = google.drive({
//     version: "v3",
//     auth: oauth2Client,
//   });

//   const filePath = path.join(__dirname);
// };

export default Submission;
