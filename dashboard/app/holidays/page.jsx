"use client";
import React from "react";
import GeneralTable from "@/TableComponent/GeneralTable";
import { holidayData, holidayColumn, holidayOptions } from "@/constants";

const page = () => {
  return (
    <div className="mx-8 bg-white rounded-xl">
      <GeneralTable
        columns={holidayColumn}
        users={holidayData}
        statusOptions={holidayOptions}
        search={true}
        btnLink="/app/holidays/create"
        btnText="Create Holiday"
      />
    </div>
  );
};

export default page;
