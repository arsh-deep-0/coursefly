"use client";
import React, { useEffect } from "react";
import Course from "../landing-page/course";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { fetchcourses } from "@/lib/features/user-courses/userCoursesSlice";
import { subscriptionType } from "../types/subscriptionType";
import UserCourse from "./user-course";

const CourseList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userCourses: Array<subscriptionType> | [] = useSelector(
    (state: RootState) => state.userCourses.courses
  );
  const user = useSelector((state: RootState) => state.user);


  const condition = useSelector(
    (state: RootState) => state.userCourses.condition
  );
  useEffect(() => {
    dispatch(fetchcourses(user.id) as any);
  }, [dispatch, user.id]);


  const filterCondition = (result: subscriptionType, condition: string) => {
    if (condition === "INPROGRESS") {
      return result.progress > 0 && result.progress<100;
    } else if (condition === "NOTSTARTED") {
      return result.progress == 0;
    }else if (condition === "COMPLETED") {
      return result.progress == 100;
    } else {
      return true;
    }
  };

  return (
    <div className="flex flex-col gap-2 overflow-scroll h-full md:flex-row md:justify-start md:w-full">
      {userCourses &&
        userCourses
          .filter((result: subscriptionType) =>
            filterCondition(result, condition)
          )
          .map((result: subscriptionType) => (
            <UserCourse
              key={result.course}
              id={result.course}
              progress={result.progress}
              startDate={result.startDate}
            />
          ))}
    </div>
  );
};

export default CourseList;
