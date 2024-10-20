import React from "react";
import { tab } from "@/constants";
import Icon from "@/helper/Icon";

const Tabs = ({active}) => {
  return (
    <div className="flex">
      {tab?.map((item, index) => {
        return (
          <div className={`flex ${index === 0 ? "ml-0" : "ml-10"} ${active == index ? "text-primary py-4 border-b-4 text-md border-primary font-semibold" : ""} justify-center items-center`} key={index}>
            <Icon name={item?.icon} />
            <h1 className="ml-3">{item?.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
