"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Page() {
  return (
    <div className=" bg-gradient-to-b from-black to-gray-900">
      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center py-20 text-white">
        <h1 className="mb-8 text-3xl font-bold text-center">
          Start Your Free Trial Today
        </h1>
        <button className="bg-green-600 hover:bg-green-700 text-white  py-2 rounded-lg px-8">
          Register
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-green-800/80 text-white/90 py-8">
        <div className="container mx-auto px-4">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-white">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="hover:text-white">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center space-x-8 mb-6">
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Features
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm">
            © {new Date().getFullYear()} CloudWings.com Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}
