import React from 'react'
import GeneralTable from "@/TableComponent/GeneralTable";
import {
  usersAttendanceData,
  attendancePageColumn,
  attendanceStatusOption,
} from "@/constants";

const page = () => {
  return (
    <div>
      <div className="mx-8">
        <GeneralTable
          users={usersAttendanceData}
          columns={attendancePageColumn}
          statusOptions={attendanceStatusOption}
          btnText={"Add New Employee"}
          btnLink={"/all-employees/add-employees"}
          search={true}
        />
      </div>
    </div>
  );
}

export default page
