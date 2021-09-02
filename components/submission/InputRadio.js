import React from "react";

const InputRadio = ({ label, optionsOne, optionsTwo }) => {
  return (
    <div className="flex flex-col w-5/12">
      <label>{label}</label>
      <div className="flex flex-row justify-between mt-5">
        <div>
          <input
            type="radio"
            name={optionsOne}
            id={optionsOne}
            className="w-6 h-6 mr-4"
          />
          <label>{optionsOne}</label>
        </div>
        <div>
          <input
            type="radio"
            name={optionsTwo}
            id={optionsTwo}
            className="w-6 h-6 mr-4"
          />
          <label>{optionsTwo}</label>
        </div>
      </div>
    </div>
  );
};

export default InputRadio;
