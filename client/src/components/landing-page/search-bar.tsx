'use client'
import { setSearchTerm } from "@/lib/features/search-results/searchResultsSlice";
import { AppDispatch } from "@/lib/store";
import React from "react";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="w-full flex justify-center md:w-1/2 ">
      <label className="relative block w-full gray-border rounded-full" htmlFor="">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 fill-black"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
        </span>

        <input
          className="bg-white rounded-full px-2 py-1 focus:border-red-500 focus:outline-none focus:ring-0 w-full font-light pl-12 "
          type="search"
          placeholder="find your dream courses..."
          onChange={(e)=>{dispatch(setSearchTerm(e.target.value))}}
        />
      </label>
    </div>
  );
}
