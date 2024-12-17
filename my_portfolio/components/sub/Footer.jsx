import React from "react";
import Link from "next/link";
import { Github, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t">
      <footer className="bg-gray-900 text-white pt-8 pb-16 mx-auto max-w-7xl px-4 sm:px-10 md:px-16">
        <div className="container space-y-4  items-center">
          {/* Copyright and Name */}

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com/yourusername"
              target="_blank"
              className="hover:text-gray-300 transition-colors"
            >
              {" "}
              <Facebook size={24} />
            </Link>
            <Link
              href="https://facebook.com/yourusername"
              target="_blank"
              className="hover:text-gray-300 transition-colors"
            >
              {" "}
              <Instagram size={24} />
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-gray-300 transition-colors"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-gray-300 transition-colors"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              className="hover:text-gray-300 transition-colors"
            >
              <Twitter size={24} />
            </Link>
          </div>
          <p className="">
            This is my portfolio website You can contact me for more
            Information.
          </p>
          {/* Quick Links */}

          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Ajit Verma. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
