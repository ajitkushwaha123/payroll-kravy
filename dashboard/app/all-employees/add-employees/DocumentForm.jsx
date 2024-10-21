import React from "react";
import Image from "next/image";
import Icon from "@/helper/Icon";

const DocumentForm = ({ data }) => {
  console.log("data", data);

  return (
    <div>
      <div className="flex px-8 py-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Upload Appointment Letter
          </label>
          {data?.appointmentLetter ? (
            <div className="w-[400] flex justify-between items-center p-5 border-2 rounded-lg border-gray-100">
              <p>{data?.appointmentLetter}</p>
              <p className="flex justify-center items-center">
                <Icon name="Eye" />
                <span className="ml-3">
                  <Icon name="Download" />
                </span>
              </p>
            </div>
          ) : (
            <Image
              width={"500"}
              height={200}
              alt="document"
              src="/drop-image.png"
            />
          )}
        </div>

        <div className="Upload ml-10 Salary Slips">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Upload Offer Letter
          </label>
          {data?.offerLetter ? (
            <div className="w-[400] flex justify-between items-center p-5 border-2 rounded-lg border-gray-100">
              <p>{data?.offerLetter}</p>
              <p className="flex justify-center items-center">
                <Icon name="Eye" />
                <span className="ml-3">
                  <Icon name="Download" />
                </span>
              </p>
            </div>
          ) : (
            <Image
              width={"500"}
              height={200}
              alt="document"
              src="/drop-image.png"
            />
          )}
        </div>
      </div>

      <div className="flex px-8 py-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Upload Reliving Letter
          </label>
          {data?.relievingLetter ? (
            <div className="w-[400] flex justify-between items-center p-5 border-2 rounded-lg border-gray-100">
              <p>{data?.relievingLetter}</p>
              <p className="flex justify-center items-center">
                <Icon name="Eye" />
                <span className="ml-3">
                  <Icon name="Download" />
                </span>
              </p>
            </div>
          ) : (
            <Image
              width={"500"}
              height={200}
              alt="document"
              src="/drop-image.png"
            />
          )}
        </div>

        <div className="Upload ml-10 Salary Slips">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Upload Experience Letter
          </label>
          {data?.experinceLetter ? (
            <div className="w-[400] flex justify-between items-center p-5 border-2 rounded-lg border-gray-100">
              <p>{data?.experinceLetter}</p>
              <p className="flex justify-center items-center">
                <Icon name="Eye" />
                <span className="ml-3">
                  <Icon name="Download" />
                </span>
              </p>
            </div>
          ) : (
            <Image
              width={"500"}
              height={200}
              alt="document"
              src="/drop-image.png"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentForm;
