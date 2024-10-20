import React from "react";
import TextField from "@/components/reuseableComponent/TextField";
import Dropdown from "../../../components/reuseableComponent/Dropdown";
import { personalField } from "@/constants";

const PersonalForm = ({ data, onUpdateData }) => {
  console.log(data);

  const handleInputChange = (index, value) => {
    const updatedData = { ...data, [index]: value };
    console.log("updatedData", updatedData);
    onUpdateData(updatedData);
  };

  return (
    <>
      <div className="grid my-4 grid-cols-2">
        {personalField?.map((item) => (
          <div key={item?.id} className="mx-8">
            {item?.type === "dropdown" ? (
              <Dropdown
                data={item?.data}
                title={item?.title}
                onInputChange={(values) => handleInputChange(item?.id, values)}
                value={data[item?.id]}
              />
            ) : (
              <TextField
                title={item?.title}
                type={item?.type}
                onInputChange={(values) => handleInputChange(item?.id, values)}
                input={data[item?.id]}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PersonalForm;
