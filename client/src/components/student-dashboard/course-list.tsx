import React from "react";
import Course from "../landing-page/course";


export default function CourseList() {
  return (
    <div className="flex flex-col gap-2 overflow-scroll h-full">
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
}
