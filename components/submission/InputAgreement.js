import React, { useState, useEffect } from "react";

const InputAgreement = ({
  text,
  name,
  optionsOne,
  onChange,
  valueOne,
  type = "radio",
}) => {
  return (
    <div className="flex flex-row items-center justify-center w-full px-2 py-4 mt-4 rounded-lg bg-customArchive">
      <input
        type={type == "checkbox" ? "checkbox" : "radio"}
        name={name}
        id={optionsOne}
        value={valueOne}
        onChange={onChange}
        className="w-6 h-6 mr-4 "
      />
      <p className="w-10/12 text-black">{text}</p>
    </div>
  );
};

export default InputAgreement;
