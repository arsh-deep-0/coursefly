"use client";
import { setCurrentCourse } from "@/lib/features/currentCourse/currentCourseSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { useDispatch } from "react-redux";
import { CourseType } from "../types/CourseType";
import { AppDispatch } from "@/lib/store";
import Image from "next/image";

type props = {
  id: string;
};

export default function Course(props: props) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [course, setCourse] = useState<CourseType | null>(null);
  useEffect(() => {
    const fetchCourse = async () => {
      const courseRes = await axios.get(`/api/courses/getCourse/${props.id}`);
      
      if (courseRes) {
        setCourse(courseRes.data.data);
  
      }
    };
    fetchCourse();
  }, [props]);

  const openCourse = () => {
    dispatch(setCurrentCourse(props));
    router.push(`/course-details?courseID=${props.id}`);
  };

  return (
    <div
      className="relative w-full p-4 bg-white flex flex-col gap-2 rounded-md gray-border md:max-w-96 md:min-w-96"
      onClick={openCourse}
    >
      <Image
        className="w-full rounded-md gray-border"
        src={course?.thumbnail || "/course-images/c5.jpg"}
        alt=""
        width={250}
        height={250}
      />

      <span className="font-semibold text-lg">{course?.name}</span>
      <div className="flex gap-2 items-center">
        <span className="text-2xl text-blue font-bold">
          ${course?.discountedPrice}
        </span>
        <span className="line-through">${course?.price}</span>
      </div>
      <div className="bg-white gray-border absolute inset-6 h-6 w-28 rounded-full flex justify-center items-center">
        <span className=" text-sm">{course?.instructor}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center gap-2 text-sm">
          <div className="bg-white gray-border px-2 rounded-full flex items-center gap-1">
            <span>
              <MdAccessTime />
            </span>
            <span>{course?.duration} weeks</span>
          </div>
          <div className="bg-white gray-border px-2 rounded-full">
            <span className="text-green-500">{course?.enrollmentStatus}</span>
          </div>
          <div className="bg-white gray-border px-2 rounded-full bg-blue">
            <span className="text-white">Learn More</span>
          </div>
        </div>
        <div className="h-full">
          <div className="h-4 mr-2">
            <Image
              src="/icons/save.svg"
              alt=""
              width={16} // Set the width of the image
              height={16} // Set the height of the image
            />
          </div>
        </div>
      </div>
    </div>
  );
}
