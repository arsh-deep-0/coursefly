import CourseList from "@/components/student-dashboard/course-list";
import DashboardOptions from "@/components/student-dashboard/dashboard-options";
import Greetings from "@/components/student-dashboard/greetings";
import CircularProgressBarDiv from "@/components/student-dashboard/progress-bar";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-light-blue flex flex-col items-center w-full gap-4 poppins text-black p-4 md:px-24 ">
      <div className="flex justify-between py-8 md:w-full ">
        <Greetings />

        <CircularProgressBarDiv></CircularProgressBarDiv>
      </div>
      <div className="font-bold text-lg">My Courses</div>
      <DashboardOptions/>
      <CourseList />
    </div>
  );
}
