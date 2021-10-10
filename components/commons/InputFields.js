import React, { useState } from "react";
import Image from "next/image";

function InputField({
  type,
  name,
  placeholder,
  onChange,
  value,
  width,
  variation,
  label,
}) {
  const [hide, setHide] = useState(false);

  function handleHide() {
    setHide(!hide);
  }

  return (
    <div
      className={
        "relative " + (variation === "submission" ? "w-5/12" : "w-full")
      }
    >
      {variation === "submission" ? <label>{label}</label> : null}
      <input
        type={hide ? "text" : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={
          "relative w-full text-black p-2 my-2 border-2 rounded-lg border-customGrey focus:shadow-lg focus:outline-none " +
          (variation === "submission" ? "bg-nav" : "bg-white")
        }
      />
      {name == "password" ? (
        <div className="absolute right-2 top-5">
          <Image
            onClick={() => handleHide()}
            width={20}
            height={20}
            alt="Show"
            src="/img/eye.svg"
            className="absolute cursor-pointer hover:opacity-60"
          />
        </div>
      ) : null}
      <style jsx>
        {`
          ::-webkit-input-placeholder {
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
