import React from "react";

function SideNav() {
  return (
    <div className="my-1 px-2 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/4 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
      <ul className="px-5 py-4">
        <li className=" px-2 border-2 border-black bg-blue-200">
          <a className="text-xl py-4" href="#home">
            Countries
          </a>
        </li>
        <li className=" px-2 border-2 border-black bg-blue-200">
          <a className="text-xl py-4" href="#home">
            America
          </a>
        </li>
        <li className=" px-2 border-2 border-black bg-blue-200">
          <a className="text-xl py-4" href="#home">
            Africa
          </a>
        </li>
        <li className=" px-2 border-2 border-black bg-blue-200">
          <a className="text-xl py-4" href="#home">
            Europe
          </a>
        </li>
        <li className=" px-2 border-2 border-black bg-blue-200">
          <a className="text-xl py-4" href="#home">
            Asia
          </a>
        </li>
      </ul>
    </div>
  );
}
export default SideNav;
