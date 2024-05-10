"use client";
import { decreaseCourseLikes, decreaseLikes, fetchcourse, increaseCourseLikes, increaseLikes } from "@/lib/features/currentCourse/currentCourseSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { CourseType } from "../types/CourseType";
import Image from "next/image"

export default function OtherDetails() {
  const dispatch = useDispatch<AppDispatch>()
  const courseDetails: CourseType | null = useSelector(
    (state: RootState) => state.currentCourse.course
  ) as CourseType | null;


 
  const [isLiked ,setIsLiked] = useState(false)
  const likesCount :number = useSelector(
    (state: RootState) => state.currentCourse.likes
  )
  const courseID :string = useSelector(
    (state: RootState) => state.currentCourse.courseID
  )
  

  const like = ()=>{
    if(isLiked){
      
  
      dispatch(decreaseCourseLikes(courseID))
      setIsLiked(false)
    }else{
     
      dispatch(increaseCourseLikes(courseID))
      setIsLiked(true)
    }
  }

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
          <div className={`${isLiked?'bg-blue text-white':'bg-white'} gray-border px-2 rounded-full gap-2 flex`}
          onClick={like}>
          <Image src={"/icons/Like.svg"} alt={" "} width={16} height={16}></Image>
            <span className="">{likesCount}</span>
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
