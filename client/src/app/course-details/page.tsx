import CartOptions from "@/components/course-details.tsx/cart-options";
import OtherDetails from "@/components/course-details.tsx/other-details";
import Overview from "@/components/course-details.tsx/overview";
import Syllabus from "@/components/course-details.tsx/syllabus";
import React, { Suspense } from "react";


export default function Page() {
  return (
    <div className="min-h-screen bg-light-blue flex flex-col  w-full gap-4 poppins text-black p-4 md:px-24 md:py-16">
      <Suspense fallback={<div>Loading...</div>}>
      <Overview />
    </Suspense>
      <CartOptions />
      <OtherDetails />
      <Syllabus/>
    </div>
  );
}
