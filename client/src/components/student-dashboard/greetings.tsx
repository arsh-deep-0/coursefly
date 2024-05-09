'use client'
import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Greetings() {
  const user = useSelector((state:RootState)=>state.user);

  return (
    <div className="max-w-[60%] h-full flex justify-center flex-col md:max-w-full md:w-full md:justify-between">
      <div className="font-semibold text-2xl text-blue ">
        <span className="">Hi </span>
        <span>{user.name}!</span>
      </div>
      <div>
        <span>Let’s kickstart your career journey</span>
      </div>
    </div>
  );
}
