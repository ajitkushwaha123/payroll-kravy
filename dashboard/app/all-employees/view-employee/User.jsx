"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Icon from '@/helper/Icon'

const User = ({onEditUpdate}) => {

  const [edit , setEdit] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setEdit(true);
    onEditUpdate(true);
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="">
          <Image src={"/user.png"} alt="user" width={100} height={100} />
        </div>
        <div className="ml-6 flex flex-col justify-start text-start">
          <h3 className="text-xl font-semibold font-poppins">
            Brooklyn Simmons
          </h3>
          <p className="flex justify-start items-center">
            <Icon name="BriefcaseBusiness" />
            <span className="text-gray-500 py-1 ml-3">Project Manager</span>
          </p>
          <p className="flex justify-start items-center">
            <Icon name="Mail" />
            <span className="ml-3 text-gray-400">brooklyn.s@example.com</span>
          </p>
        </div>
      </div>

      <div>
        <button
          onClick={handleUpdate}
          className="bg-primary text-white px-4 py-2 rounded-md "
        >
          {edit === true ? (
            <div>
              {/* <Icon name="Pencil" size={15} /> */}
              <span className="text-md font-medium ml-2">Update Profile</span>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <Icon name="Pencil" size={15} />
              <span className="text-md font-medium ml-2">Edit Profile</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default User
