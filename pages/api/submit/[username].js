import nextConnect from "next-connect";
import multer from "multer";
import { google } from "googleapis";
import { oAuth2Client as oAuth2ClientCallback } from "../callback";
import fs from "fs";

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

// apiRoute.post((req, res) => {
//   const { username } = req.query;

//   res.json({ username: globalUsername });
// });

function getFolderId(username, drive) {
  return drive.files
    .list({
      q: "mimeType='application/vnd.google-apps.folder' and trashed=false",
      fields: "nextPageToken, files(id, name)",
      spaces: "drive",
    })
    .then((res) => {
      let folder = res.data.files.filter((x) => x.name === username);

      console.log(folder);
      console.log("From up: " + folder[0].id);
      return folder[0].id;
    })
    .catch((e) => {
      console.log(e);
    });
}

apiRoute.post((req, res) => {
  upload(req, res, function (err) {
    // console.log(req.file.path);
    if (err) {
      return res.end("Something went wrong");
    } else {
      const { username } = req.query;
      let rootFolderId = "1muh_5j1jUPPBQecwI3MrP3RVSgFx_UG-";

      const drive = google.drive({
        version: "v3",
        auth: oAuth2ClientCallback,
      });

      let folderMetadata = {
        name: username,
        mimeType: "application/vnd.google-apps.folder",
        parents: [rootFolderId],
      };

      drive.files.create(
        {
          resource: folderMetadata,
          fields: "id",
        },
        (err, file) => {
          if (err) {
            console.error(err);
          }
        }
      );

      // let folderName = username;
      // let result = drive.files
      //   .list({
      //     q: "mimeType='application/vnd.google-apps.folder' and trashed=false",
      //     fields: "nextPageToken, files(id, name)",
      //     spaces: "drive",
      //   })
      //   .catch((e) => console.log("eeee", e));
      // // let folder = result.data.files.filter((x) => x.name === folderName);
      // let folder;

      // result
      //   .then((res) => {
      //     folder = res.data.files.filter((x) => x.name === folderName);
      //     console.log(folder[0].id);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });

      // console.log(folder);

      getFolderId(username, drive)
        .then((result) => {
          console.log("From bottom: ");
          console.log(result);
          const fileMetadata = {
            name: req.file.filename,
            parents: [result],
          };

          const media = {
            mimeType: req.file.mimetype,
            body: fs.createReadStream(req.file.path),
          };

          drive.files.create(
            {
              resource: fileMetadata,
              media: media,
              fields: "id",
            },
            (err, file) => {
              if (err) {
                res.json({ error: err }, 200);
              } else {
                fs.unlinkSync(req.file.path);
                res.redirect("/");
              }
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
