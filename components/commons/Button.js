import React from "react";

const Button = ({ text, width }) => {
  return (
    <button
      type="submit"
      className={
        "bg-gradient-to-r from-first via-middle to-last text-center cursor-pointer rounded-lg p-3 mt-8 mb-4 hover:shadow-white"
      }
    >
      <b>{text}</b>
      <style jsx>
        {`
          button {
            border: none;
            color: white;
            text-decoration: none;
            font-size: 16px;
            width: ${width};
          }

          button:hover {
            background-color: #14385c;
          }
        `}
      </style>
    </button>
  );
};

export default Button;
