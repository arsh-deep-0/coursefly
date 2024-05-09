"use client";
import { fetchcourse } from "@/lib/features/currentCourse/currentCourseSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { MdAccessTime } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { CourseType } from "../types/CourseType";

export default function OtherDetails() {
  const courseDetails: CourseType | null = useSelector(
    (state: RootState) => state.currentCourse.course
  ) as CourseType | null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-center gap-2 text-sm">
          <div className="bg-white gray-border px-2 rounded-full flex items-center gap-1">
            <span>
              <MdAccessTime />
            </span>
            <span>{courseDetails?.duration} weeks</span>
          </div>
          <div className="bg-white gray-border px-2 rounded-full">
            <span className="text-green-500">
              {courseDetails?.enrollmentStatus}
            </span>
          </div>
          <div className="bg-white gray-border px-2 rounded-full ">
            <span className="">{courseDetails?.location}</span>
          </div>
          <div className="bg-white gray-border px-2 rounded-full ">
            <span className="">121</span>
          </div>
        </div>
      </div>
      <div className="flex  flex-col">
        <span className="text-blue font-semibold">Schedule:</span>
        <span className=""> {courseDetails?.schedule}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-blue font-semibold">Pre-requisites:</span>
        <ol className="">
        {courseDetails?.prerequisites?.map((prerequisite, index) => (
          <li key={index}>{prerequisite}</li>
        ))}
      </ol>
      </div>
    </div>
  );
}
