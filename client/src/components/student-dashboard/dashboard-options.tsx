import React from "react";

export default function DashboardOptions() {
  return (
    <div className="flex justify-start gap-2 w-full pb-2 font-light flex-wrap ">
      <div className="bg-blue text-white text-sm px-2 gray-border rounded-full  ">
        <span>All Courses</span>
      </div>

      <div className="bg-white text-sm px-2 gray-border rounded-full">
        <span>Completed</span>
      </div>
      <div className="bg-white text-sm px-2 gray-border rounded-full">
        <span>In Progress</span>
      </div>
      <div className="bg-white text-sm px-2 gray-border rounded-full">
        <span>Not Started</span>
      </div>
    </div>
  );
}
