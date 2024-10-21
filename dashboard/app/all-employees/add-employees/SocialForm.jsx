import React from "react";
import TextField from "@/components/reuseableComponent/TextField";
import { socialField } from "@/constants";

const SocialForm = ({data , onUpdateData , editable=true}) => {

  const handleInputChange = (index, value) => {
    const updatedData = data;
    updatedData[index] = value;
    onUpdateData(updatedData);
  }

  return (
    <>
      <div className="grid my-4 grid-cols-2">
        {socialField?.map((item, index) => {
          return (
            <div className="mx-8">
              {item?.type === "dropdown" ? (
                <Dropdown
                  data={item?.data}
                  title={item?.title}
                  onInputChange={(values) => {
                    handleInputChange(item?.id, values);
                  }}
                  value={data[item?.id]}
                  editable={editable}
                />
              ) : (
                <TextField
                  key={index}
                  title={item?.title}
                  type={item?.type}
                  onInputChange={(values) => {
                    handleInputChange(item?.id, values);
                  }}
                  input={data[item?.id]}
                  editable={editable}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SocialForm;
