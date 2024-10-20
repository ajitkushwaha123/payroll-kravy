import React from "react";
import Image from "next/image";

const DocumentForm = () => {
  return (
    <div>
      <div className="flex px-8 py-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Upload Appointment Letter
          </label>
          <Image
            width={"500"}
            height={200}
            alt="document"
            src="/drop-image.png"
          />
        </div>

        <div className="Upload ml-10 Salary Slips">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Upload Salary Slips
          </label>
          <Image
            width={500}
            height={100}
            alt="document"
            src="/drop-image.png"
          />
        </div>
      </div>

      <div className="flex px-8 py-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Upload Reliving Letter
          </label>
          <Image
            width={"500"}
            height={200}
            alt="document"
            src="/drop-image.png"
          />
        </div>

        <div className="Upload ml-10 Salary Slips">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Upload Experience Letter
          </label>
          <Image
            width={500}
            height={100}
            alt="document"
            src="/drop-image.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentForm;
