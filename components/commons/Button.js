import React from "react";

const Button = ({ text, width }) => {
  return (
    <button type="submit">
      <b>{text}</b>
      <style jsx>
        {`
          button {
            background-color: #20639b;
            border: none;
            color: white;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            margin: 2rem 0 1rem 0;
            width: ${width};
            padding: 0.8rem;
            border-radius: 0.5rem;
            cursor: pointer;
            box-shadow: 0 0 4px 2px #20639b;
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
