import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <h2 className="flex items-center py-4 font-bold text-2xl">
                React Work
              </h2>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                className="py-4 px-5 border-4 border-blue-500 font-semibold "
              >
                Home
              </a>
              <a
                href=""
                className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300"
              >
                About Us
              </a>
              <a
                href=""
                className="py-4 px-2 font-semibold hover:text-blue-500 transition duration-300"
              >
                Contact Us
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none menu-button">
                <svg
                  className="w-6 h-6"
                  x-show="! showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 00 24 24"
                  stroke="currentColor"
                >
                  <path d="m4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <div className="hidden mobile-menu">
              <ul className="">
                <li className="active">
                  <a
                    href="nav.html"
                    className="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact Us"
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
