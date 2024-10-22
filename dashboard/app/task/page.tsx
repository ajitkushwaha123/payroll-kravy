import React from 'react';
import GeneralTable from "../../TableComponent/GeneralTable";
import { myTaskData, myTaskColumn, myTaskOptions } from "../../constants";
import Kanban from "./Kanban";

const page = () => {
  return (
    <div className='mx-8 mb-6'>
      {/* <GeneralTable
        users={myTaskData}
        columns={myTaskColumn}
        statusOptions={myTaskOptions}
        btnText={"Add Task"}
        btnLink={"/all-employees/add-employees"}
        search={true}
        tab={true}
      /> */}

      <Kanban />
    </div>
  );
}

export default page
