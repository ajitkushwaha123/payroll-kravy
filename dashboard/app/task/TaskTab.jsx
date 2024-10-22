import React from "react";

const tabButton = [
  {
    name: "Table",
    color: "success",
    // icon : "Table"
  },
  {
    name: "Kanban",
    color: "default",
    // icon : "Table"
  },
  {
    name: "Calendar",
    color: "default",
    // icon : "Table"
  },
];

const TaskTab = () => {
  return (
    <div>
      <div>
        {tabButton.map((item, index) => {
          return (
            <button
              key={index}
              className={`ml-3 inline-flex text-xs leading-5 font-semibold rounded-md px-3 py-1  bg-${item.color}-100 text-${item.color}-800`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TaskTab;
