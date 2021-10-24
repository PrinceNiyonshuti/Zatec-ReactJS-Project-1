import React from "react";

function Footer() {
  return (
    <div className="bg-gray-100 shadow">
      <div className="flex flex-wrap p-6">
        <div className="flex flex-wrap justify-center mb-4 w-full">
          <div className="w-full  sm:w-1/2 md:w-1/2 lg:w-1/4 px-8 ">
            <ul>
              <li>
                <a className="text-xl py-4" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="text-xl py-4" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-xl py-4" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-8 ">
            <ul>
              <li>
                <a className="text-xl py-4" href="#africa">
                  Africa
                </a>
              </li>
              <li>
                <a className="text-xl py-4" href="#america">
                  America
                </a>
              </li>
              <li>
                <a className="text-xl py-4" href="#europe">
                  Europe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-2 pl-6 text-center">
        <h2 className="font-bold text-xl">© Zatec 2021</h2>
      </div>
    </div>
  );
}
export default Footer;
