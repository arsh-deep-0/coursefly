"use client";
import React, { useEffect, useState } from "react";
import Accordian, { AccordianItem } from "./accordian";
import { CourseType } from "../types/CourseType";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function Syllabus() {
  const courseDetails: CourseType | null = useSelector(
    (state: RootState) => state.currentCourse.course
  ) as CourseType | null;

  return (
    <div className="flex-col gap-4">
      <span className="text-blue font-semibold">Course-Content:</span>

      <Accordian className="rounded-md gray-border mt-4  bg-white" value={0}>
        {courseDetails?.syllabus?.map((weeklySyllabus, index) => (
          <AccordianItem
            key={index}
            value={index + 1}
            trigger={`Week ${index + 1}`}
          >
            {weeklySyllabus}
          </AccordianItem>
        ))}

        {/* <AccordianItem value={2} trigger={"Week 2"}>
          Hiii
        </AccordianItem> */}
      </Accordian>
    </div>
  );
}
