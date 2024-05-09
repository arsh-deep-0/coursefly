"use client";
import HeadingText from "@/components/landing-page/heading-text";
import SearchOptions from "@/components/landing-page/options";
import SearchBar from "@/components/landing-page/search-bar";
import SearchResults from "@/components/landing-page/search-results";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-start gap-2 md:gap-8 p-4 bg-light-blue  poppins  text-black">
      <div className="sticky max-h-[40%] w-full pb-4 flex justify-center flex-col items-center">
        <HeadingText />
        <SearchBar />
      </div>
      <div className="w-full px-2">
        <SearchOptions />
      </div>
      <div className="max-h-[60%]  w-full ">
        <SearchResults />
      </div>
    </main>
  );
}
