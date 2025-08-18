"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/images/sustainability-1.jpg",
    "/images/sustainability-2.jpg",
    "/images/sustainability-3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    // Removed bg-white from here to allow carousel to be seen.
    // The white background for the SVG and content is handled below.
    <section className="pt-20 min-h-screen mb-8 md:mb-12 flex flex-col relative overflow-hidden">
      {/* Image Carousel Background */}
      <div className="absolute inset-x-0 top-0 h-full z-0">
        {/* Background Images */}
        {images.map((image, index) => (
          <Image
            height={1000}
            width={1600}
            quality={80}
            key={image}
            src={image}
            alt={`Sustainability image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content and Artistic Illustration Container */}
      {/* This div now acts as the white background for your content and SVG */}
      <div className="bg-transparent max-w-7xl mx-auto px-6 lg:px-8 flex-1 flex flex-col relative z-10 w-full rounded-b-xl">
        {" "}
        {/* Added bg-white, rounded-b-xl and shadow-lg */}
        {/* Main Content */}
        <div className="text-center pt-16 pb-8">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-serif font-normal text-white leading-tight mb-6">
            A sustainability roadmap
            <br />
            for every business.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Decarbonization is a journey. Navigate it with confidence.
          </p>
          <Button className="bg-teal-500 cursor-pointer text-white hover:bg-teal-600 rounded-full px-8 py-3 text-base font-medium">
            Schedule a consultation
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
