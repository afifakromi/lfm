import nextConnect from "next-connect";

let globalUsername = "";

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get((req, res) => {
  const { username } = req.query;
  globalUsername = username;

  res.json({ username: globalUsername });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export { globalUsername };
