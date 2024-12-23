// import React from "react";
// import Link from "next/link";

// function Hero() {
//   return (
//     <div className="min-h-screen relative">
//       {/* Main Background Image */}
//       <img
//         src="/ajit2.jpg"
//         alt="Rajeev Mehta"
//         className="absolute inset-0 w-full h-[1000px] object-cover"
//       />

//       {/* Split Overlay */}
//       <div className="absolute inset-0 flex">
//         {/* Left side darker overlay */}
//         <div className="w-full md:w-1/2 bg-gray-900/95" />
//         {/* Right side lighter overlay */}
//         <div className="hidden md:block w-1/2 bg-black/20" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 min-h-screen">
//         <div className="container mx-auto h-full">
//           <div className="w-full md:w-1/2 h-full flex items-center">
//             <div className="px-8 md:px-12 py-20 space-y-12">
//               <div className="space-y-8">
//                 <h2 className="text-2xl text-yellow-400 font-medium">
//                   Hi, I'm Rajeev Mehta
//                 </h2>
//                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//                   Graphic
//                   <br />
//                   Designer &
//                   <br />
//                   Storyteller
//                 </h1>
//               </div>
//               <p className="text-xl text-gray-200">
//                 Transform your ideas into impactful branding with Rajeev Mehta's
//                 creative touch.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
//                   View Courses
//                 </button>
//                 <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
//                   Contact Me
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";

import Image from "next/image";

function Hero() {
  return (
    <div>
      {" "}
      <div className="relative pt-24">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="">
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute h-[500px] blur-0 inset-0">
              <Image
                src="/ajit2.jpg"
                alt="Students"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-30  object-contain"
              />
              {/* Overlay content */}
              <div className="absolute top-0 left-0 z-40 inset-0 bg-gradient-to-r from-black to-transparent"></div>
            </div>
            <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-16 md:py-32 sm:px-10 opacity-100 space-y-12">
              <div className="space-y-16  ">
                <h2 className="text-2xl text-yellow-400 font-medium">
                  Hi, I'm Rajeev Mehta
                </h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Graphic
                  <br />
                  Designer &
                  <br />
                  Storyteller
                </h1>

                <p className="text-xl text-gray-200">
                  {" "}
                  Transform your ideas into impactful branding with Rajeev
                  Mehta's creative touch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                    View Courses
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
