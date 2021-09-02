import React from "react";

const InputRadio = ({
  label,
  name,
  optionsOne,
  optionsTwo,
  onChange,
  valueOne,
  valueTwo,
}) => {
  return (
    <div className="flex flex-col w-5/12">
      <label>{label}</label>
      <div className="flex flex-row justify-between mt-5">
        <div className="flex flex-row items-center">
          <input
            type="radio"
            name={name}
            id={optionsOne}
            value={valueOne}
            onChange={onChange}
            className="w-6 h-6 mr-4"
          />
          <label>{optionsOne}</label>
        </div>
        <div className="flex flex-row items-center">
          <input
            type="radio"
            name={name}
            id={optionsTwo}
            value={valueTwo}
            onChange={onChange}
            className="w-6 h-6 mr-4"
          />
          <label>{optionsTwo}</label>
        </div>
      </div>
    </div>
  );
};

export default InputRadio;
