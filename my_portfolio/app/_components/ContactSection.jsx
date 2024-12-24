// import React from "react";
// import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/Card";

// const ContactSection = () => {
//   return (
//     <section className="relative py-20  overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
//         <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
//       </div>

//       <div className="relative max-w-6xl mx-auto px-6 sm:px-10 md:px-16 ">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 bg-clip-text text-transparent mb-6">
//             Let's Connect
//           </h2>
//           <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mb-6" />
//           <p className="text-gray-300 max-w-xl mx-auto text-lg">
//             Ready to start a conversation? Reach out through any of these
//             channels
//           </p>
//         </div>

//         {/* Contact Cards Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Location Card */}
//           <Card className="group bg-gray-900/40 border-purple-500/20 hover:border-purple-500/40 backdrop-blur-sm transition-all duration-500">
//             <CardContent className="p-8">
//               <div className="mb-6 relative">
//                 <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
//                 <div className="relative bg-gray-900 rounded-full p-4 w-16 h-16 flex items-center justify-center">
//                   <MapPin className="h-8 w-8 text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
//                 Our Location
//               </h3>
//               <div className="space-y-2 text-gray-300">
//                 <p className="text-lg">Lucknow</p>
//                 <p>Uttar Pradesh, India</p>
//                 <div className="pt-4">
//                   <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm">
//                     View on map <ExternalLink className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Phone Card */}
//           <Card className="group bg-gray-900/40 border-purple-500/20 hover:border-purple-500/40 backdrop-blur-sm transition-all duration-500">
//             <CardContent className="p-8">
//               <div className="mb-6 relative">
//                 <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
//                 <div className="relative bg-gray-900 rounded-full p-4 w-16 h-16 flex items-center justify-center">
//                   <Phone className="h-8 w-8 text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
//                 Phone
//               </h3>
//               <div className="space-y-2 text-gray-300">
//                 <p className="text-lg">Mobile Number:</p>
//                 <p className="text-purple-400 hover:text-purple-300 transition-colors">
//                   +91 9026029479
//                 </p>
//                 <div className="pt-4">
//                   <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm">
//                     Save contact <ExternalLink className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Email Card */}
//           <Card className="group bg-gray-900/40 border-purple-500/20 hover:border-purple-500/40 backdrop-blur-sm transition-all duration-500">
//             <CardContent className="p-8">
//               <div className="mb-6 relative">
//                 <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
//                 <div className="relative bg-gray-900 rounded-full p-4 w-16 h-16 flex items-center justify-center">
//                   <Mail className="h-8 w-8 text-purple-400" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
//                 Email
//               </h3>
//               <div className="space-y-2 text-gray-300">
//                 <p className="text-lg">Personal Email:</p>
//                 <p className="text-purple-400 hover:text-purple-300 transition-colors break-all">
//                   ajitchaudhary714@gmail.com
//                 </p>
//                 <div className="pt-4">
//                   <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm">
//                     Send email <ExternalLink className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Youtube, Instagram, Phone, Mail, MapPin } from "lucide-react";

// const PortfolioPage = () => {
//   return (
//     <div className="relative min-h-screen">
//       {/* Full-screen background image with overlay */}
//       <div className="absolute inset-0">
//         <Image
//           src="/ajit2.jpg"
//           alt="Background"
//           fill
//           className="object-cover "
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-950/70 to-black/70"></div>
//       </div>

//       {/* Content */}
//       <div className="relative container max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-72 h-screen flex flex-col lg:flex-row items-center">
//         {/* Left Contact Section */}
//         <div className="lg:w-1/2 text-white space-y-8 backdrop-blur-sm bg-black/20 p-8 rounded-lg">
//           <div className="space-y-4">
//             <h1 className="text-4xl md:text-6xl font-bold">Rajeev Mehta</h1>
//             <h2 className="text-2xl md:text-3xl font-semibold">
//               Graphic Designer/Storyteller
//             </h2>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-4">
//               <Phone className="w-6 h-6" />
//               <span className="text-lg">+91 98765 43210</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <Mail className="w-6 h-6" />
//               <span className="text-lg">contact@rajeevmehta.com</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <MapPin className="w-6 h-6" />
//               <span className="text-lg">Mumbai, Maharashtra</span>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="flex flex-wrap gap-4 pt-4">
//             <Link
//               href="#"
//               className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
//             >
//               <Youtube className="w-5 h-5" />
//               <span>Youtube</span>
//               <span className="text-sm">(568k+)</span>
//             </Link>

//             <Link
//               href="#"
//               className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
//             >
//               <Instagram className="w-5 h-5" />
//               <span>Instagram</span>
//               <span className="text-sm">(116k+)</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioPage;
import React from "react";
import { Youtube, Instagram, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

function ContactSection() {
  return (
    <>
      <section
        className="relative bg-gradient-to-b from-black via-purple-950 to-black  "
        aria-labelledby="join-heading"
      >
        <div
          className="hidden absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:block"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto bg-gradient-to-b  from-black via-purple-950 to-black  md:bg-blue-900 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4  lg:bg-transparent">
              <div
                className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden"
                aria-hidden="true"
              />
              <div className="max-w-md mx-auto  sm:max-w-3xl sm:px-6 lg:max-w-none ">
                <div className="aspect-w-10  aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:py-10 lg:aspect-w-1">
                  <img
                    className="object-contain rounded-t-3xl md:rounded-3xl shadow-2xl"
                    src="/verma.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative md:bg-blue-800 bg-gradient-to-b from-black via-purple-950 to-black  lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div
                className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-blue-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-blue-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative px-4 text-white    lg:max-w-none lg:col-start-4 lg:col-span-6">
                <div className="space-y-4 py-8 md:py-0 px-8 md:px-0">
                  {" "}
                  <div className="space-y-4  md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold">
                      Ajit Verma
                    </h1>
                    <h2 className="text-xl whitespace-nowrap md:text-2xl font-semibold">
                      Frontend Developer/UX & UI Designer
                    </h2>
                  </div>
                  {/* Contact Information */}
                  <div className="space-y-6   text-center md:text-left">
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6" />
                      <span className="text-lg">+91 9026029479</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6" />
                      <span className="text-lg">
                        ajitchaudhary714@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6" />
                      <span className="text-lg">Lucknow, Uttar Pradesh</span>
                    </div>
                  </div>
                  {/* Social Links */}
                  {/* <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                      <span>Youtube</span>
                      <span className="text-sm">(568k+)</span>
                    </Link>

                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>Instagram</span>
                      <span className="text-sm">(116k+)</span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default ContactSection;
