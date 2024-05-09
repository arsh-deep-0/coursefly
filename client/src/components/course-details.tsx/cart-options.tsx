"use client";
import React from "react";
import { CourseType } from "../types/CourseType";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function CartOptions() {
  const courseDetails: CourseType | null = useSelector(
    (state: RootState) => state.currentCourse.course
  ) as CourseType | null;
  return (
    <div className="flex gap-2 items-center">
      <span className="text-2xl text-blue font-bold">
        ${courseDetails?.discountedPrice}
      </span>
      <span className="line-through">${courseDetails?.price}</span>
    </div>
  );
}
