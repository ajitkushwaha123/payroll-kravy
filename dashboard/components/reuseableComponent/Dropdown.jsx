"use client";
import React, { useState } from "react";

const Dropdown = ({ title, data, onInputChange , value}) => {
  const [selected, setSelected] = useState("");

  const handleInputChange = (e) => {
    setSelected(e.target.value);
    onInputChange(e.target.value);
  }

  return (
    <div className="mt-4">
      <label
        htmlFor={title}
        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
      >
        {title}
      </label>
      <select
        id={title}
        name={title}
        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
        defaultValue="Canada"
        onChange={(e) => handleInputChange(e)}
      >
        <option value={title}>Select {title}</option>
        {data?.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
