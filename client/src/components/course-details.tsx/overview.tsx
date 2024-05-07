import React from "react";

export default function Overview() {
  return (
    <>
      <div className="bg-white rounded-md p-2">
        <img className="rounded-md" src="/course-images/c5.jpg" alt="" />
      </div>
      <span className="font-semibold text-xl w-full">
        Introduction to React Native
      </span>
      <div className="bg-white gray-border  h-6 w-28 rounded-full flex justify-center items-center">
        <span className=" text-sm">Alex Grant</span>
      </div>
      <span className="">
        Learn the basics of React Native development and build your first mobile
        app!
      </span>
    </>
  );
}
