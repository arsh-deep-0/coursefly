"use client";
import CircularProgress from "@mui/joy/CircularProgress";

export default function CircularProgressBarDiv() {
  return (
    <div className="flex-grow flex justify-center items-center flex-col">
      <CircularProgress className=" text-blue text-lg font-semibold poppins "
        size="lg"
        color="primary"
        determinate
        variant="outlined"
        value={66.67}
      >
        2 / 3
      </CircularProgress>

      <span className="text-center text-sm ">Courses <br /> Completed</span>
    </div>
  );
}
