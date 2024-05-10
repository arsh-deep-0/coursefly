import { setSortBy } from "@/lib/features/search-results/searchResultsSlice";
import { AppDispatch, RootState } from "@/lib/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchOptions() {
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector(
    (state: RootState) => state.SearchResults.searchTerm
  );
  const sortBy = useSelector((state: RootState) => state.SearchResults.sortBy);
  return (
    <div className="flex justify-between w-full pb-2 font-light max-w-full md:justify-start gap-2">
      <div
        className={`
          bg-blue text-white  text-sm px-2 gray-border rounded-full max-w-56 md:text-base md:max-w-72`}
      >
        <p className="max-w-56  overflow-hidden  text-ellipsis whitespace-nowrap cursor-pointer">
          {searchTerm == ""
            ? "All Courses"
            : `Showing results for: ${searchTerm}`}
        </p>
      </div>

      <div
        className={`${
          sortBy == "PRICE" ? "bg-blue text-white" : "bg-white text-black"
        }  text-sm px-2 gray-border rounded-full md:text-base md:max-w-72 cursor-pointer`}
        onClick={() => {
          sortBy == "PRICE"
            ? dispatch(setSortBy("NONE"))
            : dispatch(setSortBy("PRICE"));
        }}
      >
        <span>Sort By Price</span>
      </div>
    </div>
  );
}
