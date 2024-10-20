"use client";
import React from "react";
import TextField from "@/components/reuseableComponent/TextField";
import Dropdown from "../../../components/reuseableComponent/Dropdown";
import { professionalField } from "@/constants";

const ProfessionalForm = ({ data, onUpdateData }) => {
  const handleInputChange = (index, value) => {
    const updatedData = { ...data, [index]: value };
    console.log("updatedData", updatedData);
    onUpdateData(updatedData);
  };

  return (
    <>
      <div className="grid my-4 grid-cols-2">
        {professionalField?.map((item) => (
          <div key={item?.id} className="mx-8">
            {item?.type === "dropdown" ? (
              <Dropdown
                data={item?.data}
                title={item?.title}
                value={data[item?.id]}
                onInputChange={(values) => handleInputChange(item?.id, values)}
              />
            ) : (
              <TextField
                title={item?.title}
                type={item?.type}
                input={data[item?.id]}
                onInputChange={(values) => handleInputChange(item?.id, values)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfessionalForm;
