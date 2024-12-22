"use client";
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const clients = [
  { id: 1, name: "intel", logo: "/placeholder.svg?height=30&width=80" },
  { id: 2, name: "IBM", logo: "/placeholder.svg?height=30&width=80" },
  { id: 3, name: "Dell", logo: "/placeholder.svg?height=30&width=80" },
  { id: 4, name: "AWS", logo: "/placeholder.svg?height=30&width=80" },
  { id: 5, name: "Rackspace", logo: "/placeholder.svg?height=30&width=80" },
  { id: 6, name: "HHHH", logo: "/placeholder.svg?height=30&width=80" },
  { id: 7, name: "U", logo: "/placeholder.svg?height=30&width=80" },
  { id: 8, name: "Coursera", logo: "/placeholder.svg?height=30&width=80" },
];

const testimonials = [
  {
    id: 1,
    company: "IBM",
    logo: "/placeholder.svg?height=40&width=100",
    author: "Jay, Sales Manager",
    text: "CloudWorks has transformed the way our team collaborates. The real-time updates and automated workflows have saved us hours each week. It's the best project management tool we've ever used!",
  },
  {
    id: 2,
    company: "AWS",
    logo: "/placeholder.svg?height=40&width=100",
    author: "Metiz, Account Manager",
    text: "CloudWorks has transformed the way our team collaborates. The real-time updates and automated workflows have saved us hours each week. It's the best project management tool we've ever used!",
  },
  {
    id: 3,
    company: "Coursera",
    logo: "/placeholder.svg?height=40&width=100",
    author: "Kira, Sales Manager",
    text: "CloudWorks has transformed the way our team collaborates. The real-time updates and automated workflows have saved us hours each week. It's the best project management tool we've ever used!",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white py-16">
      {/* Clients Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Our Clients</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center mb-24">
          {clients.map((client) => (
            <div
              key={client.id}
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={80}
                height={30}
                className="grayscale"
              />
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            What Our Clients Say About Us
          </h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-zinc-900 p-6 rounded-lg border border-zinc-800 transition-opacity duration-300 ${
                    index === currentTestimonial ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    width={100}
                    height={40}
                    className="mb-4"
                  />
                  <p className="text-zinc-400 mb-4">{testimonial.author}</p>
                  <p className="text-sm text-zinc-300">"{testimonial.text}"</p>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`w-2 h-2 rounded-full p-0 ${
                    index === currentTestimonial ? "bg-white" : "bg-zinc-700"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
