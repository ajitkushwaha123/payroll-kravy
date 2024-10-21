"use client";
import React, { useState } from "react";
import Icon from "@/helper/Icon";
import Profile from "./Profile";
import {
  attendance,
  attendanceColumn,
  attendanceStatusOption,
  projectStatusOptions,
  projectColumn,
  projectData,
  leaveStatusOptions,
  leaveColumn,
  leaveData,
} from "@/constants";
import SimpleTable from "../../../TableComponent/SimpleTable";

const VerticalTab = ({ editable = false }) => {
  const verticalTabs = [
    { title: "Profile", icon: "User" },
    { title: "Attendance", icon: "CalendarCheck2" },
    { title: "Projects", icon: "FolderClosed" },
    { title: "Leave", icon: "FileUser" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex p-5">
      <div className="w-[20%] border-2 border-gray-100 rounded-t-2xl">
        {verticalTabs?.map((tab, index) => {
          return (
            <div key={index}>
              <p
                onClick={() => setActiveTab(index)}
                className={`flex justify-start rounded-md cursor-pointer ${activeTab === index ? "bg-primary text-white" : ""} py-3 px-8 items-center`}
              >
                <Icon name={tab.icon} />
                <span className="ml-3"> {tab.title} </span>
              </p>
            </div>
          );
        })}
      </div>

      <div className="w-[80%]">
        {activeTab === 0 ? (
          <Profile editable={editable} />
        ) : activeTab === 1 ? (
          <div className="mx-8">
            <SimpleTable
              columns={attendanceColumn}
              data={attendance}
              statusOptions={attendanceStatusOption}
            />
          </div>
        ) : activeTab === 2 ? (
          <div className="mx-8">
            <SimpleTable
              columns={projectColumn}
              data={projectData}
              statusOptions={projectStatusOptions}
            />
          </div>
        ) : (
          <div className="mx-8">
            <SimpleTable
              columns={leaveColumn}
              data={leaveData}
              statusOptions={leaveStatusOptions}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalTab;
