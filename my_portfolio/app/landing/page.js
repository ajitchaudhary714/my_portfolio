import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/ajit2.jpg")', // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        {/* <nav className="bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-white">RAJEEV MEHTA</h1>
                <p className="text-xs text-gray-300">LEARN EARN GROW</p>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  <Link
                    href="/courses"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    COURSES
                  </Link>
                  <Link
                    href="/resources"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    RESOURCES
                  </Link>
                  <Link
                    href="/digital-shop"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    DIGITAL SHOP
                  </Link>
                  <Link
                    href="/contact"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    CONTACT
                  </Link>
                  <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">
                    NEW COURSES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav> */}

        {/* Hero Section */}
        <main className="container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl text-yellow-400 font-medium">
                  Hi, I'm Rajeev Mehta
                </h2>
                <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                  Graphic
                  <br />
                  Designer &
                  <br />
                  Storyteller
                </h1>
              </div>
              <p className="text-xl text-gray-200">
                Transform your ideas into impactful branding with Rajeev Mehta's
                creative touch.
              </p>
              <div className="pt-8 flex gap-4">
                <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                  View Courses
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right Column - Featured Image */}
            <div className="relative hidden md:block">
              <div className="aspect-w-4 aspect-h-5 rounded-3xl overflow-hidden">
                <img
                  src="/your-profile-image.jpg" // Replace with your image path
                  alt="Rajeev Mehta"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
