"use client";
import CircularProgress from "@mui/joy/CircularProgress";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { subscriptionType } from "../types/subscriptionType";

export default function CircularProgressBarDiv() {
  const userCourses: Array<subscriptionType> | [] = useSelector(
    (state: RootState) => state.userCourses.courses
  );

  const completedCoursesCount = userCourses.filter(
    (course) => course.progress === 100
  ).length;

  const totalCoursesCount = userCourses.length;

  return (
    <div className="flex-grow flex justify-center items-center flex-col">
      <CircularProgress
        className=" text-blue text-lg font-semibold poppins "
        size="lg"
        color="primary"
        determinate
        variant="outlined"
        value={completedCoursesCount*100/totalCoursesCount}
      >
        {completedCoursesCount}/ {totalCoursesCount}
      </CircularProgress>

      <span className="text-center text-sm ">
        Courses <br /> Completed
      </span>
    </div>
  );
}
