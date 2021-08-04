import React, { useState } from "react";
import Image from "next/image";

function InputField({ type, name, placeholder, onChange, value, width }) {
  const [hide, setHide] = useState(false);

  function handleHide() {
    setHide(!hide);
  }

  return (
    <div>
      <input
        type={hide ? "text" : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {name == "password" ? (
        <Image
          onClick={() => handleHide()}
          style={{ marginTop: "1rem" }}
          width={20}
          height={20}
          alt="Show"
          src="/img/password_eye.png"
        />
      ) : null}
      <style jsx>
        {`
          input {
            padding: 0.8rem;
            width: ${width};
            border-radius: 0.5rem;
            border: 2px solid #20639b;
            margin-top: 1rem;
          }

          input:focus {
            box-shadow: 0 0 4px 2px #20639b;
            outline: none;
          }

          img {
            position: absolute;
            right: 10px;
            top: 10px;
          }

          img:hover {
            opacity: 0.5;
            cursor: pointer;
          }

          div {
            width: 100%;
            position: relative;
          }

          ::-webkit-input-placeholder {
            color: black;
            opacity: 0.5;
            font-size: 1rem;
            vertical-align: center;
          }
        `}
      </style>
    </div>
  );
}

export default InputField;
