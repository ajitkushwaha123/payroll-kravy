import React from 'react'
import GeneralTable from '../../TableComponent/GeneralTable';
import { payrollData , payrollColumn , payrollOptions} from '../../constants';

const page = () => {
  return (
    <div>
      <div className="mx-8">
        <GeneralTable
          users={payrollData}
          columns={payrollColumn}
          statusOptions={payrollOptions}
          btnText={"Export"}
          btnLink={"/all-employees/add-employees"}
          search={true}
        />
      </div>
    </div>
  );
}


export default page
