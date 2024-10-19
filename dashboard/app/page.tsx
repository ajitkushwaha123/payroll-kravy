"use client";
import AttendanceChart from "@/charts/AttendanceChart";
import Stats from "@/components/common/Stats";
import { statsData } from "@/constants/index";
import RecentOrders from "@/components/RecentOrders";
import ChartTemplate from "@/components/common/ChartTemplate";
import EmployeeTable from "@/TableComponent/EmployeeTable";


export default function Home() {
  return (
    <main>
      <div className="flex w-full">
        {statsData.map((data, index) => (
          <div
            className={`w-[25%] ${index !== statsData.length - 1 ? "ml-7" : "mx-7"}`}
          >
            <Stats
              key={index}
              title={data.title}
              amount={data.amount}
              orders={data.orders}
              percentage={data.percentage}
              icon={data.icon}
              bgColor={data.bgColor}
              lastUpdated={data.lastUpdated}
            />
          </div>
        ))}
      </div>

      <div className="flex w-[100%] justify-start items-start">
        <div className="w-[64%]">
          <div className="p-5 my-4 rounded-xl mx-7 bg-white">
            <ChartTemplate
              title={"Attendace Overview"}
              graph={<AttendanceChart />}
            />
          </div>
        </div>
        <div className="w-[36%] mt-4 rounded-xl mr-7 bg-white">
          <RecentOrders />
        </div>
      </div>

      <div className="w-[100%] my-4 flex mx-7">
        <div className="w-[60%]">
          <EmployeeTable />
        </div>
        <div className="w-[40%] ml-7"></div>
      </div>
    </main>
  );
}
