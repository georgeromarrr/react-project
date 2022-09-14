import React from "react";

// icons
export const SearchIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-gray-500 dark:text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );
};

const Search = ({ onChange }) => {
  return (
    <div className="container flex mx-auto mt-4 mb-10">
      <form className="w-full">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            onChange={onChange}
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 border placeholder:italic focus:outline-0"
            placeholder="Enter mission"
            required=""
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
