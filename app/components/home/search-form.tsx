import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";


export default function SearchForm() {
  return (
    <form className="flex mt-3 gap-2">
      <input type="text" className="border-2 border-[#ddd] rounded-md p-1" placeholder="Search"/>

      <button className="border-2 border-[#ddd] bg-[#e7e7e7] duration-400 hover:bg-white rounded-md px-2">
        <FaMagnifyingGlass></FaMagnifyingGlass>
      </button>
    </form>
  );
}
