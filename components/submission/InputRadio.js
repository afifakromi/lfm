import React from "react";

const InputRadio = () => {
  return (
    <div className="flex flex-col w-5/12">
      <label>Audio</label>
      <div className="flex flex-row justify-between mt-5">
        <div>
          <input type="radio" className="w-6 h-6 mr-4" />
          <label>Bersuara</label>
        </div>
        <div>
          <input type="radio" className="w-6 h-6 mr-4" />
          <label>Tidak Bersuara</label>
        </div>
      </div>
    </div>
  );
};

export default InputRadio;
