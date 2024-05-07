import React from "react";
import Course from "./course";

export default function SearchResults() {
  return (
    <div className="flex flex-col gap-2 overflow-scroll h-full">
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
}
