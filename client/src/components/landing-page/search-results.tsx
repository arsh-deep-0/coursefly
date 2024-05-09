"use client";
import React, { useEffect, useState } from "react";
import Course from "./course";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { fetchcourses } from "@/lib/features/search-results/searchResultsSlice";
import { CourseType } from "../types/CourseType";

const SearchResults: React.FC = () => {
  const allCourses: Array<CourseType> = useSelector(
    (state: RootState) => state.SearchResults.courses
  );
  const searchTerm = useSelector(
    (state: RootState) => state.SearchResults.searchTerm
  );
  const sortBy = useSelector((state: RootState) => state.SearchResults.sortBy);

  const [searchResults, setSearchResults] =
    useState<Array<CourseType>>(allCourses);

  console.log("sr", searchResults);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchcourses() as any);
  }, [dispatch]);

  useEffect(() => {
    if (allCourses.length > 0 && searchTerm) {
      const searchTermLowerCase = searchTerm.toLowerCase();

      const filteredCourses = allCourses.filter((course) => {
        const courseNameLowerCase = course.name.toLowerCase();
        const instructorLowerCase = course.instructor.toLowerCase();
        const descriptionLowerCase = course.description.toLowerCase();

        return (
          courseNameLowerCase.includes(searchTermLowerCase) ||
          instructorLowerCase.includes(searchTermLowerCase) ||
          descriptionLowerCase.includes(searchTermLowerCase)
        );
      });

      setSearchResults(filteredCourses);
    } else {
      setSearchResults(allCourses);
    }
  }, [allCourses, searchTerm]);

  useEffect(() => {
    if (sortBy === "PRICE") {
      setSearchResults(
        [...searchResults].sort((a, b) => a.discountedPrice - b.discountedPrice)
      );
    } else {
      setSearchResults(allCourses);
    }
  }, [sortBy]);

  console.log("searchResults: ", searchResults);

  return (
    <div className="flex flex-col gap-2 overflow-scroll h-full md:flex-row md:w-full md:max-w-full md:px-4 md:overflow-x-scroll  md:overflow-y-hidden ">
      {searchResults &&
        searchResults.map((result: CourseType) => (
          <Course key={result._id} id={result._id} />
        ))}
    </div>
  );
};

export default SearchResults;
