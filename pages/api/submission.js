import nextConnect from "next-connect";
import multer from "multer";
import fs from "fs";
import { google } from "googleapis";
import { oAuth2Client as oAuth2ClientCallback } from "./callback";
import { globalUsername } from "./drive/[username]";

const CLIENT_ID =
  "769436284711-lrl7gs9r264nic8sdn8efqgbuh1huj8u.apps.googleusercontent.com";
const CLIENT_SECRET = "hui1lPuQRYjcrI-d1w8sP3UV";
const REDIRECT_URL = "http://localhost:3000/api/callback";
const REFRESH_TOKENS =
  "1//04wBcuIBAr_YUCgYIARAAGAQSNwF-L9IrsRmkmeAyU12Ce85T9WE_x49xWoeGQTujZgrOZvr5ASI3mUc-1xRP2pw4hwCWWMgnrlw";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

let authed = false;

const SCOPES =
  "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile";

let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./images");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("file");

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get((req, res) => {
  if (!authed) {
    // Generate an OAuth URL and redirect there
    var url = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });

    res.json(
      {
        status: true,
        url: url,
      },
      200
    );
  } else {
    var oauth2 = google.oauth2({
      auth: oAuth2Client,
      version: "v2",
    });
    oauth2.userinfo.get(function (err, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(response.data.name);
        response.json({
          success: true,
          message: {
            name: response.data.name,
            pic: response.data.picture,
            success: false,
          },
        });
      }
    });
  }
});

// apiRoute.post((req, res) => {
//   upload(req, res, function (err) {
//     // console.log(req.file.path);
//     if (err) {
//       return res.end("Something went wrong");
//     } else {
//       let folderId = "1muh_5j1jUPPBQecwI3MrP3RVSgFx_UG-";
//       const drive = google.drive({
//         version: "v3",
//         auth: oAuth2ClientCallback,
//       });

//       let folderMetadata = {
//         name: "akromiafif",
//         mimeType: "application/vnd.google-apps.folder",
//         parents: [folderId],
//       };
//       drive.files.create(
//         {
//           resource: folderMetadata,
//           fields: "id",
//         },
//         function (err, file) {
//           if (err) {
//             // Handle error
//             console.error(err);
//           } else {
//             console.log("Folder Id: ");
//           }
//         }
//       );

//       const fileMetadata = {
//         name: req.file.filename,
//         parents: [folderId],
//       };
//       const media = {
//         mimeType: req.file.mimetype,
//         body: fs.createReadStream(req.file.path),
//       };
//       drive.files.create(
//         {
//           resource: fileMetadata,
//           media: media,
//           fields: "id",
//         },
//         (err, file) => {
//           if (err) {
//             res.json({ error: err }, 200);
//           } else {
//             fs.unlinkSync(req.file.path);
//             res.redirect("/");
//           }
//         }
//       );
//     }
//   });
// });

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export { oAuth2Client };
