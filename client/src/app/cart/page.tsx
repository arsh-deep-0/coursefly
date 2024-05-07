import CourseList from "@/components/student-dashboard/course-list";
import DashboardOptions from "@/components/student-dashboard/dashboard-options";
import Greetings from "@/components/student-dashboard/greetings";
import CircularProgressBarDiv from "@/components/student-dashboard/progress-bar";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-light-blue flex flex-col items-center w-full gap-4 poppins text-black p-4">
    
      <div className="font-bold text-lg">1 Course in Cart</div>
     
      <CourseList />
    </div>
    
  );
}
