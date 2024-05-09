"use client";
import { fetchcourse } from "@/lib/features/currentCourse/currentCourseSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/lib/store";
import { useSearchParams } from "next/navigation";
import { CourseType } from "../types/CourseType";
import { Span } from "next/dist/trace";

export default function Overview() {
  const searchParams = useSearchParams();
  const courseID = searchParams.get("courseID") || "";
  const courseDetails: CourseType | null = useSelector(
    (state: RootState) => state.currentCourse.course
  ) as CourseType | null;

  console.log("cd", courseDetails);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchCourseData = async () => {
      dispatch(fetchcourse(courseID));
    };
    fetchCourseData();
  }, [courseID, dispatch]);

  return (
    <>
      {courseDetails && (
        <div className="w-full flex justify-between relative">
          <div className="flex flex-col gap-2 md:gap-4 md:max-w-[50%] lg:max-w-[60%]">
            <div className="bg-white rounded-md p-2 md:hidden">
              <img
                className="rounded-md"
                src={courseDetails.thumbnail}
                alt=""
              />
            </div>
            <span className="font-semibold text-xl w-full  md:text-2xl">
              {courseDetails.name}
            </span>
            <div className="bg-white gray-border  h-6 w-28 rounded-full flex justify-center items-center">
              <span className=" text-sm">{courseDetails.instructor}</span>
            </div>
            <span className="">{courseDetails.description}</span>
          </div>
          <div className="bg-white rounded-md p-2 hidden md:flex max-w-[50%] lg:max-w-[40%] gray-border absolute right-0 top-0">
            <img className="rounded-md" src={courseDetails.thumbnail} alt="" />
          </div>
        </div>
      )}
    </>
  );
}
