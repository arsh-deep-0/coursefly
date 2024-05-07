import React from "react";
import { MdAccessTime } from "react-icons/md";

export default function Course() {
  return (
    <div className="relative w-full p-4 bg-white flex flex-col gap-2 rounded-md gray-border">
      <img
        className="w-full rounded-md gray-border"
        src="/course-images/c5.jpg"
        alt=""
      />
      <span className="font-semibold text-lg">
        Introduction to React Native
      </span>
      <div className="flex gap-2 items-center">
        <span className="text-2xl text-blue font-bold">$99</span>
        <span className="line-through">$199</span>
      </div>
      <div className="bg-white gray-border absolute inset-6 h-6 w-28 rounded-full flex justify-center items-center">
        <span className=" text-sm">Alex Grant</span>
      </div>
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
          <div className="bg-white gray-border px-2 rounded-full bg-blue">
            <span className="text-white">Learn More</span>
          </div>
        </div>
        <div className="h-full">
          <img className="h-4 mr-2" src="/icons/save.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
