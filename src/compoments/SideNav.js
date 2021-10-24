import React from "react";

function SideNav() {
  return (
    <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-px xl:-mx-px">
      <div className="h-48 bg-blue-700 my-1 px-2 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/4 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
        Side nav data
      </div>

      <div className="h-48 bg-red-700 my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-3/4 lg:my-px lg:px-px lg:w-3/4 xl:my-px xl:px-px xl:w-3/4">
        Main data
      </div>
    </div>
  );
}
export default SideNav;
