import React, { useEffect, useState } from "react";
import axios from "axios";

const Submission = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/submission")
      .then((res) => {
        setUrl(res.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });

    setUsername(localStorage.getItem("username"));
  }, []);

  return (
    <div>
      <p>Submission</p>

      <form
        action={"/api/submit/" + username}
        method="POST"
        encType="multipart/form-data"
      >
        <div>
          <input type="file" name="file" />
        </div>
        <div>
          <button>Upload File</button>
        </div>
      </form>

      <a href={url}>Login to Google Drive</a>
    </div>
  );
};

export default Submission;
