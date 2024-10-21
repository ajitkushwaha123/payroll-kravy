"use client";
import React , { useState } from "react";
import User from "./User";
import VerticalTab from "./VerticalTab";

const Page = () => {

  const [edit , setEdit] = useState(false);
  
  const handleUpdate = (val) => {
   setEdit(val);
  }

  return (
    <div className="bg-white mb-8 mx-8 rounded-xl">
      <div className="p-5 p">
        <User onEditUpdate={(val) => handleUpdate(val)}/>
      </div>

      <div className="border-b-2 w-full border-gray-100"></div>

      <div>
        <VerticalTab editable={edit}/>
      </div>
    </div>
  );
};

export default Page;
