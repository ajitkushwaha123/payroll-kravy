"use client";
import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
import PersonalForm from "./PersonalForm";
import ProfessionalForm from "./ProfessionalFrom";
import DocumentForm from "./DocumentForm";
import SocialForm from "./SocialForm";
import { useFormik } from "formik";

const Page = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      maritalStatus: "",
      gender: "",
      nationality: "",
      employeeId: "",
      username: "",
      employeeType: "",
      department: "",
      designation: "",
      workingDays: "",
      joiningDate: "",
      jobType: "",
      reportingManager: "",
      officeLocation: "",
      appointmentLetter: "",
      offerLetter: "",
      experinceLetter: "",
      relievingLetter: "",
      instagram: "",
      linkedin: "",
      twitter: "",
      github: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem("employeeData");
    if (savedData) {
      formik.setValues(JSON.parse(savedData));
    }
  }, []);

  const handleFormUpdate = (field, value) => {
    formik.setFieldValue(field, value);
    console.log("final", formik.values);
  };

  const saveData = (e) => {
    e.preventDefault();
    localStorage.setItem("employeeData", JSON.stringify(formik.values));
    alert("Data Saved");
  };

  return (
    <div className="rounded-md mx-8 pb-5 mb-10 bg-white">
      <div className="border-b-2 mt-2 px-5 border-gray-100">
        <Tabs active={currentTab} />
      </div>
      <div>
        {currentTab === 0 ? (
          <PersonalForm data={formik.values} onUpdateData={handleFormUpdate} />
        ) : currentTab === 1 ? (
          <ProfessionalForm
            data={formik.values}
            onUpdateData={handleFormUpdate}
          />
        ) : currentTab === 2 ? (
          <DocumentForm data={formik.values} onUpdateData={handleFormUpdate} />
        ) : (
          <SocialForm data={formik.values} onUpdateData={handleFormUpdate} />
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
              saveData(e);
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

export default Page;
