"use client";
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import Icon from "@/helper/Icon";

const Kanban = () => {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>
      <div className="bg-white relative group shadow-sm rounded-xl px-5 py-3">
        <div className="text-sm flex justify-between items-center font-medium border-b-2 pb-2 border-dashed">
          <span>1. Develop Login Feature</span>
          <div className="">
            <span className="ml-5 flex justify-center items-center">
              <span className="border-2 hover:text-primary hover:border-primary-200 p-1.5 rounded-md">
                <Icon name="Pencil" size={15} />
              </span>
              <span className="border-2 hover:text-primary ml-2 hover:border-primary-200 rounded-md p-1.5">
                <Icon name="EllipsisVertical" size={18} />
              </span>
            </span>
          </div>
        </div>

        <div className="flex my-4 justify-start items-center">
          <button
            className={`ml-3 justify-center items-center inline-flex text-xs leading-5 font-semibold rounded-md px-3 py-1 bg-success-100 text-success-800`}
          >
            <Icon name="CircleCheckBig" size={16} />{" "}
            <span className="ml-2">Done</span>
          </button>
          <button
            className={`ml-3 flex justify-center items-center text-xs leading-5 font-semibold rounded-md px-3 py-1 bg-success-100 text-success-800`}
          >
            <Icon size={15} name="CalendarCheck2" />
            <span className="ml-2">24 OCT</span>
          </button>
        </div>

        <div className="flex w-full text-gray-400 justify-end">
          <span className="hover:text-primary">
            <Icon name="MessageCircle" />
          </span>
          <span className="ml-2 hover:text-primary">
            <Icon name="FolderTree" />
          </span>
        </div>
      </div>
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <div className="flex">
        <div>
          <Droppable>
            <div className="w-[330px] flex flex-col justify-start items-center bg-[#DCE3E3] h-[500px] rounded-xl my-6">
              <div className="bg-success-400 flex justify-center items-center py-3 text-large mb-2 rounded-t-xl w-full text-white">
                Done / 1
              </div>

              <div className="my-3">{draggableMarkup}</div>
              <div className="my-3">{draggableMarkup}</div>
            </div>
          </Droppable>
        </div>

        <div className="ml-6">
          <Droppable>
            <div className="w-[330px] flex flex-col justify-start items-center bg-[#DCE3E3] h-[500px] rounded-xl my-6">
              <div className="bg-warning-400 flex justify-center items-center py-3 text-large mb-2 rounded-t-xl w-full text-white">
                Working On It / 1
              </div>

              <div className="my-3">{draggableMarkup}</div>
              <div className="my-3">{draggableMarkup}</div>
            </div>
          </Droppable>
        </div>

        <div className="ml-6">
          <Droppable>
            <div className="w-[330px] flex flex-col justify-start items-center bg-[#DCE3E3] h-[500px] rounded-xl my-6">
              <div className="bg-danger-400 flex justify-center items-center py-3 text-large mb-2 rounded-t-xl w-full text-white">
                Stuck On / 1
              </div>

              <div className="my-3">{draggableMarkup}</div>
              <div className="my-3">{draggableMarkup}</div>
            </div>
          </Droppable>
        </div>

        <div className="ml-6">
          <Droppable>
            <div className="w-[330px] flex flex-col justify-start items-center bg-[#DCE3E3] h-[500px] rounded-xl my-6">
              <div className="bg-default-400 flex justify-center items-center py-3 text-large mb-2 rounded-t-xl w-full text-white">
                Not Started Yet / 1
              </div>

              <div className="my-3">{draggableMarkup}</div>
              <div className="my-3">{draggableMarkup}</div>
            </div>
          </Droppable>
        </div>
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
};

export default Kanban;
