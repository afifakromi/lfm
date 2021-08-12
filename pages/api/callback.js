import nextConnect from "next-connect";
import { oAuth2Client } from "./submission";

const apiRoute = nextConnect({
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get((req, res) => {
  const code = req.query.code;
  if (code) {
    oAuth2Client.getToken(code, function (err, tokens) {
      if (err) {
        res.json({ error: err });
      } else {
        oAuth2Client.setCredentials(tokens);
        res.redirect("/submission");
      }
    });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};

export { oAuth2Client };
