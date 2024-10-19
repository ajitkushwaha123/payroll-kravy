"use client";
import { Avatar } from "@nextui-org/avatar";
import React, { useState } from "react";
import Icon from "@/helper/Icon";

const GeneralTable = () => {
  const [input, setInput] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Select Status");

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "Employee Name", uid: "name", sortable: true },
    { name: "Department", uid: "department", sortable: true },
    { name: "Designation", uid: "designation", sortable: true },
    { name: "Job Type", uid: "jobType" },
    { name: "Status", uid: "status", sortable: true },
    { name: "Actions", uid: "actions" },
  ];

  const statusOptions = [
    { name: "Permanent", uid: "permanent", color: "primary" },
    { name: "Intern", uid: "intern", color: "success" },
    { name: "Notice Period", uid: "notice-period", color: "danger" },
  ];

  const filteredData = users.filter((user) => {
    return (
      (input === "" || user.name.toLowerCase().includes(input.toLowerCase())) ||
      (user.status === selectedStatus)
    );
  });

  const handleChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <div className="flex bg-white rounded-xl flex-col">
      <div className="flex justify-between py-4 px-5 items-center">
        <div className="flex justify-center w-[400px] rounded-md px-2 items-center border-2">
          <input
            onChange={(e) => setInput(e.target.value)}
            className="pl-10 ml-3 py-2 outline-none"
            type="text"
          />
          <button
            onClick={() => {
              searchFunction();
            }}
            className="px-3 border-2 rounded-md text-primary"
          >
            Search
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button className="text-md font-medium border-primary text-primary rounded-md border-2">
            <select
              value={selectedStatus}
              onChange={(e) => handleChange(e)}
              className="rounded-md border-primary px-4 py-2"
            >
              {statusOptions.map((status) => (
                <option key={status.uid} value={status.uid}>
                  {status.name}
                </option>
              ))}
            </select>
          </button>
          <button className="bg-primary ml-5 flex justify-center items-center text-white px-4 py-2 rounded-md text-md font-medium">
            <Icon name="CirclePlus" />
            <span className="ml-3 text-md">Add New Employee</span>
          </button>
        </div>
      </div>

      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((column) => {
                    return (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {column.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((person) => (
                  <tr key={person.email}>
                    {columns.map((item) => {
                      return (
                        <td
                          key={item.uid}
                          className="px-6 whitespace-nowrap text-sm text-gray-500"
                        >
                          {item.uid === "status" ? (
                            statusOptions.map((status) => {
                              if (status.uid === person[item.uid]) {
                                return (
                                  <span
                                    className={`inline-flex text-xs leading-5 font-semibold rounded-md px-3 py-1  bg-${status.color}-100 text-${status.color}-800`}
                                  >
                                    {status.name}
                                  </span>
                                );
                              }

                              return null;
                            })
                          ) : item.uid === "actions" ? (
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-center">
                                <span className="mr-2">
                                  <Icon name="Trash2" />
                                </span>
                                <span className="mr-2">
                                  <Icon name="Pencil" />
                                </span>
                                <span>
                                  <Icon name="Eye" />
                                </span>
                              </div>
                            </td>
                          ) : item.uid === "name" ? (
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <Avatar
                                    isBordered
                                    color="default"
                                    src={person.avatar}
                                  />
                                </div>

                                <div className="ml-4">
                                  <div className="text-sm ml-7 font-medium text-gray-900">
                                    {person.name}
                                  </div>
                                  <div className="text-sm ml-7 text-gray-500">
                                    {person.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                          ) : (
                            <div>{person[item.uid]}</div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralTable;

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "permanent",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
    department: "Executive",
    designation: "Chief Executive Officer",
    jobType: "in-office",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "intern",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
    department: "Engineering",
    designation: "Technical Lead",
    jobType: "remote",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "permanent",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
    department: "Engineering",
    designation: "Senior Developer",
    jobType: "hybrid",
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    team: "Marketing",
    status: "notice-period",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
    department: "Marketing",
    designation: "Campaign Manager",
    jobType: "in-office",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "S. Manager",
    team: "Sales",
    status: "permanent",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
    department: "Sales",
    designation: "Sales Manager",
    jobType: "remote",
  },
  {
    id: 6,
    name: "Brian Kim",
    role: "P. Manager",
    team: "Management",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "brian.kim@example.com",
    status: "permanent",
    department: "Project Management",
    designation: "Project Manager",
    jobType: "hybrid",
  },
  {
    id: 7,
    name: "Michael Hunt",
    role: "Designer",
    team: "Design",
    status: "intern",
    age: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    email: "michael.hunt@example.com",
    department: "Creative",
    designation: "Graphic Designer",
    jobType: "remote",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    role: "HR Manager",
    team: "HR",
    status: "permanent",
    age: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    email: "samantha.brooks@example.com",
    department: "Human Resources",
    designation: "Human Resources Manager",
    jobType: "in-office",
  },
  {
    id: 9,
    name: "Frank Harrison",
    role: "F. Manager",
    team: "Finance",
    status: "notice-period",
    age: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "frank.harrison@example.com",
    department: "Finance",
    designation: "Finance Manager",
    jobType: "hybrid",
  },
  {
    id: 10,
    name: "Emma Adams",
    role: "Ops Manager",
    team: "Operations",
    status: "permanent",
    age: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "emma.adams@example.com",
    department: "Operations",
    designation: "Operations Manager",
    jobType: "in-office",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    role: "Jr. Dev",
    team: "Development",
    status: "permanent",
    age: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "brandon.stevens@example.com",
    department: "Engineering",
    designation: "Junior Developer",
    jobType: "remote",
  },
  {
    id: 12,
    name: "Megan Richards",
    role: "P. Manager",
    team: "Product",
    status: "intern",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "megan.richards@example.com",
    department: "Product",
    designation: "Product Manager",
    jobType: "hybrid",
  },
  {
    id: 13,
    name: "Oliver Scott",
    role: "S. Manager",
    team: "Security",
    status: "permanent",
    age: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "oliver.scott@example.com",
    department: "Security",
    designation: "Security Manager",
    jobType: "in-office",
  },
  {
    id: 14,
    name: "Grace Allen",
    role: "M. Specialist",
    team: "Marketing",
    status: "permanent",
    age: "30",
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "grace.allen@example.com",
    department: "Marketing",
    designation: "Marketing Specialist",
    jobType: "remote",
  },
  {
    id: 15,
    name: "Noah Carter",
    role: "IT Specialist",
    team: "I. Technology",
    status: "intern",
    age: "31",
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "noah.carter@example.com",
    department: "Information Technology",
    designation: "IT Specialist",
    jobType: "hybrid",
  },
  {
    id: 16,
    name: "Ava Perez",
    role: "Manager",
    team: "Sales",
    status: "permanent",
    age: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "ava.perez@example.com",
    department: "Sales",
    designation: "Sales Manager",
    jobType: "in-office",
  },
  {
    id: 17,
    name: "Liam Johnson",
    role: "Data Analyst",
    team: "Analysis",
    status: "permanent",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=33",
    email: "liam.johnson@example.com",
    department: "Data Analysis",
    designation: "Data Analyst",
    jobType: "remote",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    role: "QA Analyst",
    team: "Testing",
    status: "permanent",
    age: "27",
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "sophia.taylor@example.com",
    department: "Quality Assurance",
    designation: "QA Analyst",
    jobType: "hybrid",
  },
  {
    id: 19,
    name: "Lucas Harris",
    role: "Administrator",
    team: "Information Technology",
    status: "intern",
    age: "32",
    avatar: "https://i.pravatar.cc/150?img=50",
    email: "lucas.harris@example.com",
    department: "Information Technology",
    designation: "System Administrator",
    jobType: "in-office",
  },
  {
    id: 20,
    name: "Mia Robinson",
    role: "Coordinator",
    team: "Operations",
    status: "permanent",
    age: "26",
    avatar: "https://i.pravatar.cc/150?img=45",
    email: "mia.robinson@example.com",
    department: "Operations",
    designation: "Operations Coordinator",
    jobType: "remote",
  },
];
