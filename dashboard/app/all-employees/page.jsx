import React from 'react'
import GeneralTable from '../../TableComponent/GeneralTable'
import { users, columns, statusOptions } from '@/constants'

const AllEmployees = () => {
  return (
    <div>
      <div className="mx-8 mb-8">
        <GeneralTable
          users={users}
          columns={columns}
          statusOptions={statusOptions}
          btnText={"Add New Employee"}
          btnLink={"/all-employees/add-employees"}
          search={true}
        />
      </div>
    </div>
  );
}

export default AllEmployees


