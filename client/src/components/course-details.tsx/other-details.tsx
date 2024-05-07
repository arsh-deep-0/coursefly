import React from "react";
import { MdAccessTime } from "react-icons/md";

export default function OtherDetails() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-center gap-2 text-sm">
          <div className="bg-white gray-border px-2 rounded-full flex items-center gap-1">
            <span>
              <MdAccessTime />
            </span>
            <span>8 weeks</span>
          </div>
          <div className="bg-white gray-border px-2 rounded-full">
            <span className="text-green-500">Open</span>
          </div>
          <div className="bg-white gray-border px-2 rounded-full ">
            <span className="">Online</span>
          </div>
          <div className="bg-white gray-border px-2 rounded-full ">
            <span className="">121</span>
          </div>
        </div>
      </div>
      <div className="flex  flex-col">
        <span className="text-blue font-semibold">Schedule:</span>
        <span className=""> Tuesdays and Thursdays,<br /> 6:00 PM - 8:00PM</span>
      </div>
      <div className="flex flex-col">
        <span className="text-blue font-semibold">Pre-requisites:</span>
        <ol className="">
          <li>Basic JavaScript Knowledge</li>
          <li>Familiarity with React</li>
        </ol>
      </div>
    </div>
  );
}
