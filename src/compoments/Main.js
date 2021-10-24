import React from "react";
import PlanesList from "./List/PlanesList";

function Main() {
  return (
    <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-3/4 lg:my-px lg:px-px lg:w-3/4 xl:my-px xl:px-px xl:w-3/4">
      <div>
        <div className="flex-grow flex flex-col">
          <div className="flex-grow">
            <div className=" py-8 mx-auto px-5">
              <div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <h2 className="text-lg">
                      Welcome To Zatec Jets Shoow Room
                    </h2>
                  </div>
                </div>
                <PlanesList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
