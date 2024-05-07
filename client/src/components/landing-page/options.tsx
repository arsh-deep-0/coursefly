import React from "react";

export default function SearchOptions() {
  return (
    <div className="flex justify-between w-full pb-2 font-light">
      <div className="bg-blue text-white text-sm px-2 gray-border rounded-full">
        <span>All Courses</span>
      </div>

      <div className="bg-white text-sm px-2 gray-border rounded-full">
        <span> Price</span>
      </div>
    </div>
  );
}
