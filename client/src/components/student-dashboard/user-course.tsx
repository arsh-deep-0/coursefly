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
  progress: number;
  startDate: Date;
};

export default function UserCourse(props: props) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [course, setCourse] = useState<CourseType | null>(null);
  const [dueDate, setDueDate] = useState("");

  const duration = course?.duration || 1;
  const completion = props.progress;
  useEffect(() => {
    const fetchCourse = async () => {
      const courseRes = await axios.get(`/api/courses/getCourse/${props.id}`);
      console.log("coures:", courseRes);
      if (courseRes) {
        setCourse(courseRes.data.data);
        console.log("course:", course);
      }
    };
    fetchCourse();
  }, [props]);

  const openCourse = () => {
    dispatch(setCurrentCourse(props));
    router.push(`/course-details?courseID=${props.id}`);
  };

  useEffect(() => {
    const calculateDueDate = () => {
      const startDateObj = new Date(props.startDate);
      const dueDateObj = new Date(
        startDateObj.getTime() + duration * 7 * 24 * 60 * 60 * 1000
      );

      const day = dueDateObj.getDate();
      const monthIndex = dueDateObj.getMonth();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const formattedDueDate = `${day}${getOrdinalSuffix(day)} ${
        monthNames[monthIndex]
      }`;

      setDueDate(formattedDueDate);
    };
    const getOrdinalSuffix = (day: number) => {
      if (day >= 11 && day <= 13) {
        return "th";
      }
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    calculateDueDate();
  }, [props.startDate, duration]);

  return (
    <div
      className="relative w-full p-4 bg-white flex flex-col gap-2 rounded-md gray-border md:min-w-96 md:max-w-96 "
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
      <div className="flex gap-2 items-center  justify-between">
        <div className="flex gap-2 items-center h-2   rounded-full gray-border overflow-hidden flex-grow">
          <div
            className={`h-full bg-blue`}
            style={{ width: completion + "%" }}
          ></div>
        </div>
        <span className="text-sm font-semibold text-blue">
          {completion}% Done
        </span>
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
            <span>Due: {dueDate}</span>
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
              width={16} 
              height={16} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
