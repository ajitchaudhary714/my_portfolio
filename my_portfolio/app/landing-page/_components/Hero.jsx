import React from "react";

function Hero() {
  return (
    <div className=" bg-gradient-to-br from-green-600 via-green-900 to-green-900">
      <main className="max-w-6xl mx-auto px-4  pt-20 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Boost Your Team's
          <br />
          Productivity with <span className="text-green-400">CloudWorks</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Streamline your projects and enhance collaboration with our all-in-one
          project management solution
        </p>

        <button className="bg-green-500 text-white text-lg px-8 py-3 rounded-md hover:bg-green-600 transition-colors">
          Start Free Trial
        </button>
      </main>
    </div>
  );
}

export default Hero;
