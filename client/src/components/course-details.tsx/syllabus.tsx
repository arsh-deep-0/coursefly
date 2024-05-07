"use client";
import React, { useEffect, useState } from "react";
import Accordian, { AccordianItem } from "./accordian";

export default function Syllabus() {
  const [selected, setSelected] = useState(null);
  useEffect(() => {}, []);
  return (
    <div className="flex-col gap-4">
      <span className="text-blue font-semibold">Course-Content:</span>

      <Accordian className="rounded-md gray-border mt-4  bg-white" value={1}>
        <AccordianItem value={1} trigger={"Week 1"}>
          Hiii
        </AccordianItem>
        <AccordianItem value={2} trigger={"Week 2"}>
          Hiii
        </AccordianItem>
      </Accordian>
    </div>
  );
}
