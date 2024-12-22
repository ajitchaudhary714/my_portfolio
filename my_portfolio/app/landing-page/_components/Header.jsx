import React from "react";

function Header() {
  return (
    <div>
      {" "}
      <nav className="flex bg-gradient-to-br from-green-900 via-green-700 to-green-900 items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 p-1 rounded">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 7H7v6h6V7z" />
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-white text-xl font-bold">CloudWorks</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-green-400">
            Home
          </a>
          <a href="#" className="text-white hover:text-green-400">
            Features
          </a>
          <a href="#" className="text-white hover:text-green-400">
            Pricing
          </a>
          <a href="#" className="text-white hover:text-green-400">
            About Us
          </a>
        </div>

        <div className="flex space-x-4">
          <button className="text-white hover:text-green-400">Login</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
