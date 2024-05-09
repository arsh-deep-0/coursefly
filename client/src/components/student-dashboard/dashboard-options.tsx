"use client";
import { AppDispatch, RootState } from "@/lib/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCondition } from "@/lib/features/user-courses/userCoursesSlice";

export default function DashboardOptions() {
  const dispatch = useDispatch<AppDispatch>();
  const condition = useSelector(
    (state: RootState) => state.userCourses.condition
  );

  return (
    <div className="flex justify-start gap-2 w-full pb-2 font-light flex-wrap ">
      <div
        className={`${
          condition == "ALL" ? "bg-blue text-white" : "bg-white text-black"
        }  text-sm px-2 gray-border rounded-full cursor-pointer`}
        onClick={()=>{dispatch(setCondition("ALL"))}}
      >
        <span>All Courses</span>
      </div>

      <div
        className={`${
          condition == "COMPLETED" ? "bg-blue text-white" : "bg-white text-black"
        }  text-sm px-2 gray-border rounded-full  cursor-pointer`}
        onClick={()=>{dispatch(setCondition("COMPLETED"))}}
      >
        <span>Completed</span>
      </div>
      <div
        className={`${
          condition == "INPROGRESS" ? "bg-blue text-white" : "bg-white"
        }  text-sm px-2 gray-border rounded-full  cursor-pointer`}
        onClick={()=>{dispatch(setCondition("INPROGRESS"))}}
      >
        <span>In Progress</span>
      </div>
      <div
        className={`${
          condition == "NOTSTARTED" ? "bg-blue text-white" : "bg-white text-black"
        }  text-sm px-2 gray-border rounded-full  cursor-pointer`}
        onClick={()=>{dispatch(setCondition("NOTSTARTED"))}}
      >
        <span>Not Started</span>
      </div>
    </div>
  );
}
