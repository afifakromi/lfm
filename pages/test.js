import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const test = () => {
  const options = [
    { value: "one", label: "One" },
    { value: "two", label: "Two", className: "myOptionClassName" },
    {
      type: "group",
      name: "group1",
      items: [
        { value: "three", label: "Three", className: "myOptionClassName" },
        { value: "four", label: "Four" },
      ],
    },
    {
      type: "group",
      name: "group2",
      items: [
        { value: "five", label: "Five" },
        { value: "six", label: "Six" },
      ],
    },
  ];
  const defaultOption = options[0];

  return (
    <div>
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Select an option"
      />
    </div>
  );
};

export default test;
