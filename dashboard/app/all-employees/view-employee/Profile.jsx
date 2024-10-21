"use client";
import React, { useState } from "react";
import Tabs from "../add-employees/Tabs";
import PersonalForm from "../add-employees/PersonalForm";
import ProfessionalForm from "../add-employees/ProfessionalFrom";
import DocumentForm from "../add-employees/DocumentForm";
import SocialForm from "../add-employees/SocialForm";
import { useFormik } from "formik";

const Profile = ({ editable=false }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const formik = useFormik({
    initialValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      dob: "1990-01-01",
      address: "123 Main St",
      city: "New Delhi",
      state: "Delhi",
      zip: "110001",
      maritalstatus: "married",
      gender: "male",
      nationality: "indian",
      employeeId: "EMP12345",
      username: "johndoe",
      employeeType: "permanent",
      department: "engineering",
      designation: "Software Engineer",
      workingDays: "mondayToFriday",
      joiningDate: "2020-01-15",
      jobType: "inOffice",
      reportingManager: "zoeyLang",
      officeLocation: "losAngeles",
      appointmentLetter: "appointment_letter.pdf",
      offerLetter: "offer_letter.pdf",
      experinceLetter: "experience_letter.pdf",
      relievingLetter: "relieving_letter.pdf",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const data = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    dob: "1990-01-01",
    address: "123 Main St",
    city: "New Delhi",
    state: "Delhi",
    zip: "110001",
    maritalStatus: "married",
    gender: "male",
    nationality: "Indian",
    employeeId: "EMP12345",
    username: "johndoe",
    employeeType: "permanent",
    department: "Engineering",
    designation: "Software Engineer",
    workingDays: "mondayToFriday",
    joiningDate: "2020-01-15",
    jobType: "Permanent",
    reportingManager: "Jane Smith",
    officeLocation: "losAngeles",
    appointmentLetter: "appointment_letter.pdf",
    offerLetter: "offer_letter.pdf",
    experinceLetter: "experience_letter.pdf",
    relievingLetter: "relieving_letter.pdf",
    instagram: "https://instagram.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    github: "https://github.com/johndoe",
  };

  const handleFormUpdate = (field, value) => {
    formik.setFieldValue(field, value);
    console.log("final", formik.values);
  };

  return (
    <div className="rounded-md mx-8 pb-5 mb-10 bg-white">
      <div className="border-b-2 mt-2 px-5 border-gray-100">
        <Tabs active={currentTab} />
      </div>
      <div>
        {currentTab === 0 ? (
          <PersonalForm
            data={formik.values}
            onUpdateData={handleFormUpdate}
            editable={editable}
          />
        ) : currentTab === 1 ? (
          <ProfessionalForm
            data={formik.values}
            onUpdateData={handleFormUpdate}
            editable={editable}
          />
        ) : currentTab === 2 ? (
          <DocumentForm
            data={formik.values}
            onUpdateData={handleFormUpdate}
          />
        ) : (
          <SocialForm
            data={formik.values}
            onUpdateData={handleFormUpdate}
            editable={editable}
          />
        )}
      </div>

      <div className="flex w-full justify-end pr-10 items-center">
        {currentTab !== 0 && (
          <button
            onClick={() => {
              setCurrentTab((prevTab) => prevTab - 1);
            }}
            className="px-4 py-2 text-md rounded-md border-2 border-danger text-danger"
          >
            Back
          </button>
        )}
        {currentTab === 3 ? (
          <button
            onClick={formik.handleSubmit}
            className="text-white bg-primary px-4 py-2 rounded-md border-2 border-primary ml-5 text-md font-bold"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={(e) => {
              setCurrentTab((prevTab) => prevTab + 1);
            }}
            className="text-white bg-primary px-4 py-2 rounded-md border-2 border-primary ml-5 text-md font-bold"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
