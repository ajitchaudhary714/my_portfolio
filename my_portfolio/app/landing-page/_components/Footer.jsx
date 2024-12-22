import Link from "next/link";
import { Github, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="flex bg-black  flex-col items-center justify-center pb-20 text-white">
        <h1 className="mb-8 text-3xl font-bold text-center">
          Start Your Free Trial Today
        </h1>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg px-8">
          Register
        </button>
      </section>
      <footer className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-10 md:px-16 flex flex-col md:flex-row justify-between items-center">
          {/* Socials Section */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-lg font-medium">Socials</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-gray-200 text-xl"
                aria-label="Facebook"
              >
                <Facebook />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-200 text-xl"
                aria-label="Twitter"
              >
                <Twitter />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-200 text-xl"
                aria-label="Instagram"
              >
                <Instagram />
              </Link>
              <Link
                href="#"
                className="hover:text-gray-200 text-xl"
                aria-label="Linkedin"
              >
                <Linkedin />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex space-x-6 text-sm">
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link href="/terms" className="hover:text-gray-200">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-gray-200">
              Privacy
            </Link>
            <Link href="/features" className="hover:text-gray-200">
              Features
            </Link>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 text-center py-4 text-xs text-gray-300">
          &copy; 2024 CloudWorks.com, Inc.
        </div>
      </footer>
    </>
  );
};

export default Footer;
