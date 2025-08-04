"use client"
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
    <section className="pt-20 min-h-screen flex flex-col relative overflow-hidden">
      {/* Image Carousel Background */}
<div className="absolute inset-x-0 top-0 h-[calc(100vh_-_160px)] z-0">
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
      <div className="bg-transparent max-w-7xl mx-auto px-6 lg:px-8 flex-1 flex flex-col relative z-10 w-full rounded-b-xl shadow-lg"> {/* Added bg-white, rounded-b-xl and shadow-lg */}
        {/* Main Content */}
        <div className="text-center pt-16 pb-8">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-serif font-normal text-white leading-tight mb-6">
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

        {/* Artistic Illustration */}
        <div className="flex-1 relative">
          <svg viewBox="0 0 1400 700" className="w-full h-full" style={{ minHeight: "500px" }}>
            {/* Sky Background - Make this transparent if you want carousel behind it */}
            {/* If you remove this rect, the carousel will be visible through the sky */}
            <rect width="1400" height="500" fill="transparent" /> {/* Changed to transparent */}

            {/* Clouds - Hand drawn style */}
            <g opacity="0.7">
              {/* Left cloud cluster */}
              <path
                d="M150,120 Q180,100 220,110 Q250,95 280,110 Q300,100 320,115 Q340,105 360,120 Q380,110 400,125 Q420,115 440,130 Q460,120 480,135 Q500,125 520,140 Q540,130 560,145 Q580,135 600,150 Q620,140 640,155 Q660,145 680,160 Q700,150 720,165 Q740,155 760,170 Q780,160 800,175 Q820,165 840,180 Q860,170 880,185 Q900,175 920,190 Q940,180 960,195 Q980,185 1000,200 Q1020,190 1040,205 Q1060,195 1080,210 Q1100,200 1120,215 Q1140,205 1160,220 Q1180,210 1200,225 Q1220,215 1240,230 Q1260,220 1280,235 Q1300,225 1320,240 Q1340,230 1360,245 Q1380,235 1400,250 L1400,300 Q1380,285 1360,295 Q1340,280 1320,290 Q1300,275 1280,285 Q1260,270 1240,280 Q1220,265 1200,275 Q1180,260 1160,270 Q1140,255 1120,265 Q1100,250 1080,260 Q1060,245 1040,255 Q1020,240 1000,250 Q980,235 960,245 Q940,230 920,240 Q900,225 880,235 Q860,220 840,230 Q820,215 800,225 Q780,210 760,220 Q740,205 720,215 Q700,200 680,210 Q660,195 640,205 Q620,190 600,200 Q580,185 560,195 Q540,180 520,190 Q500,175 480,185 Q460,170 440,180 Q420,165 400,175 Q380,160 360,170 Q340,155 320,165 Q300,150 280,160 Q250,145 220,160 Q180,150 150,170 Z"
                fill="white"
                stroke="#e2e8f0"
                strokeWidth="1"
              />

              {/* Right cloud cluster */}
              <path
                d="M800,80 Q830,60 870,70 Q900,55 930,70 Q950,60 970,75 Q990,65 1010,80 Q1030,70 1050,85 Q1070,75 1090,90 Q1110,80 1130,95 Q1150,85 1170,100 Q1190,90 1210,105 Q1230,95 1250,110 Q1270,100 1290,115 Q1310,105 1330,120 Q1350,110 1370,125 L1370,180 Q1350,165 1330,175 Q1310,160 1290,170 Q1270,155 1250,165 Q1230,150 1210,160 Q1190,145 1170,155 Q1150,140 1130,150 Q1110,135 1090,145 Q1070,130 1050,140 Q1030,125 1010,135 Q990,120 970,130 Q950,115 930,125 Q900,110 870,125 Q830,115 800,135 Z"
                fill="white"
                stroke="#e2e8f0"
                strokeWidth="1"
              />

              {/* Small cloud */}
              <ellipse cx="1100" cy="150" rx="60" ry="25" fill="white" stroke="#e2e8f0" strokeWidth="1" />
              <ellipse cx="1120" cy="145" rx="40" ry="18" fill="white" stroke="#e2e8f0" strokeWidth="1" />
            </g>

            {/* Mountains/Hills - Hand drawn style */}
            <path
              d="M0,400 Q100,350 200,370 Q300,340 400,360 Q500,330 600,350 Q700,320 800,340 Q900,310 1000,330 Q1100,300 1200,320 Q1300,290 1400,310 L1400,500 L0,500 Z"
              fill="#f1f5f9"
              stroke="#e2e8f0"
              strokeWidth="2"
            />

            {/* Wind Turbines - Hand drawn style */}
            <g>
              {/* Turbine 1 */}
              <g transform="translate(250,280)">
                <line x1="0" y1="0" x2="0" y2="120" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                <circle cx="0" cy="0" r="5" fill="#374151" />
                {/* Blades */}
                <path
                  d="M0,0 Q-30,-20 -35,-5 Q-30,10 0,0"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0,0 Q20,-25 25,-10 Q20,5 0,0"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0,0 Q5,30 20,25 Q35,20 0,0"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>

              {/* Turbine 2 */}
              <g transform="translate(400,260)">
                <line x1="0" y1="0" x2="0" y2="140" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                <circle cx="0" cy="0" r="5" fill="#374151" />
                {/* Blades */}
                <path
                  d="M0,0 Q-25,-30 -30,-15 Q-25,0 0,0"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0,0 Q25,-20 30,-5 Q25,10 0,0"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0,0 Q10,25 25,20 Q40,15 0,0"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>

              {/* Turbine 3 */}
              <g transform="translate(550,270)">
                <line x1="0" y1="0" x2="0" y2="130" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                <circle cx="0" cy="0" r="5" fill="#374151" />
                {/* Blades */}
                <path
                  d="M0,0 Q-20,-35 -25,-20 Q-20,-5 0,0"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0,0 Q30,-15 35,0 Q30,15 0,0"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0,0 Q0,35 15,30 Q30,25 0,0"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </g>

            {/* Trees - Hand drawn organic style */}
            <g>
              {/* Left tree cluster */}
              <g transform="translate(80,320)">
                <path d="M0,0 L0,80" stroke="#4a5568" strokeWidth="4" strokeLinecap="round" />
                <path
                  d="M-20,-10 Q-25,-40 -15,-50 Q0,-60 15,-50 Q25,-40 20,-10 Q15,0 0,5 Q-15,0 -20,-10 Z"
                  fill="#065f46"
                  stroke="#064e3b"
                  strokeWidth="1"
                />
                <path
                  d="M-15,-25 Q-20,-50 -10,-60 Q0,-70 10,-60 Q20,-50 15,-25 Q10,-15 0,-10 Q-10,-15 -15,-25 Z"
                  fill="#047857"
                  stroke="#064e3b"
                  strokeWidth="1"
                />
              </g>

              <g transform="translate(120,330)">
                <path d="M0,0 L0,70" stroke="#4a5568" strokeWidth="3" strokeLinecap="round" />
                <path
                  d="M-15,-5 Q-20,-30 -10,-40 Q0,-50 10,-40 Q20,-30 15,-5 Q10,5 0,10 Q-10,5 -15,-5 Z"
                  fill="#065f46"
                  stroke="#064e3b"
                  strokeWidth="1"
                />
              </g>

              {/* Right tree cluster */}
              <g transform="translate(1200,310)">
                <path d="M0,0 L0,90" stroke="#4a5568" strokeWidth="4" strokeLinecap="round" />
                <path
                  d="M-25,-15 Q-30,-45 -20,-55 Q0,-65 20,-55 Q30,-45 25,-15 Q20,-5 0,0 Q-20,-5 -25,-15 Z"
                  fill="#065f46"
                  stroke="#064e3b"
                  strokeWidth="1"
                />
                <path
                  d="M-20,-30 Q-25,-55 -15,-65 Q0,-75 15,-65 Q25,-55 20,-30 Q15,-20 0,-15 Q-15,-20 -20,-30 Z"
                  fill="#047857"
                  stroke="#064e3b"
                  strokeWidth="1"
                />
              </g>

              <g transform="translate(1280,325)">
                <path d="M0,0 L0,75" stroke="#4a5568" strokeWidth="3" strokeLinecap="round" />
                <path
                  d="M-18,-8 Q-23,-35 -13,-45 Q0,-55 13,-45 Q23,-35 18,-8 Q13,2 0,7 Q-13,2 -18,-8 Z"
                  fill="#065f46"
                  stroke="#064e3b"
                  strokeWidth="1"
                />
              </g>

              <g transform="translate(1320,340)">
                <path d="M0,0 L0,60" stroke="#4a5568" strokeWidth="3" strokeLinecap="round" />
                <path
                  d="M-12,-5 Q-17,-25 -7,-35 Q0,-45 7,-35 Q17,-25 12,-5 Q7,5 0,10 Q-7,5 -12,-5 Z"
                  fill="#065f46"
                  stroke="#064e3b"
                  strokeWidth="1"
                />
              </g>
            </g>

            {/* Solar Panel Farm - Hand drawn */}
            <g transform="translate(750,350)">
              <rect x="0" y="0" width="50" height="25" fill="#1f2937" stroke="#374151" strokeWidth="1" rx="2" />
              <rect x="55" y="0" width="50" height="25" fill="#1f2937" stroke="#374151" strokeWidth="1" rx="2" />
              <rect x="110" y="0" width="50" height="25" fill="#1f2937" stroke="#374151" strokeWidth="1" rx="2" />
              <rect x="165" y="0" width="50" height="25" fill="#1f2937" stroke="#374151" strokeWidth="1" rx="2" />

              {/* Grid lines */}
              <g stroke="#4b5563" strokeWidth="0.5">
                <line x1="16" y1="0" x2="16" y2="25" />
                <line x1="33" y1="0" x2="33" y2="25" />
                <line x1="71" y1="0" x2="71" y2="25" />
                <line x1="88" y1="0" x2="88" y2="25" />
                <line x1="126" y1="0" x2="126" y2="25" />
                <line x1="143" y1="0" x2="143" y2="25" />
                <line x1="181" y1="0" x2="181" y2="25" />
                <line x1="198" y1="0" x2="198" y2="25" />
              </g>
            </g>

            {/* Hot Air Balloon - Colored accent like in reference */}
            <g transform="translate(600,150)">
              <ellipse cx="0" cy="0" rx="35" ry="45" fill="#dc2626" stroke="#b91c1c" strokeWidth="2" />
              <ellipse cx="0" cy="-5" rx="30" ry="35" fill="#ef4444" />
              <path d="M-25,35 Q-20,45 -10,50 Q0,55 10,50 Q20,45 25,35" stroke="#8b5cf6" strokeWidth="2" fill="none" />
              <rect x="-8" y="50" width="16" height="12" fill="#8b4513" stroke="#654321" strokeWidth="1" />
              <line x1="-25" y1="35" x2="-8" y2="50" stroke="#4a5568" strokeWidth="1" />
              <line x1="25" y1="35" x2="8" y2="50" stroke="#4a5568" strokeWidth="1" />
              <line x1="-15" y1="40" x2="-4" y2="50" stroke="#4a5568" strokeWidth="1" />
              <line x1="15" y1="40" x2="4" y2="50" stroke="#4a5568" strokeWidth="1" />
            </g>

            {/* Electric Vehicle - Hand drawn */}
            <g transform="translate(450,380)">
              <path
                d="M0,0 Q5,-5 15,-5 L65,-5 Q75,-5 80,0 L80,20 Q75,25 65,25 L15,25 Q5,25 0,20 Z"
                fill="#10b981"
                stroke="#059669"
                strokeWidth="1"
              />
              <circle cx="15" cy="30" r="8" fill="#374151" stroke="#1f2937" strokeWidth="1" />
              <circle cx="65" cy="30" r="8" fill="#374151" stroke="#1f2937" strokeWidth="1" />
              <rect x="8" y="2" width="12" height="8" fill="white" opacity="0.8" stroke="#d1d5db" strokeWidth="0.5" />
              <rect x="25" y="2" width="12" height="8" fill="white" opacity="0.8" stroke="#d1d5db" strokeWidth="0.5" />
              <rect x="42" y="2" width="12" height="8" fill="white" opacity="0.8" stroke="#d1d5db" strokeWidth="0.5" />
              {/* Lightning bolt */}
              <path d="M60,15 L65,10 L62,15 L67,20 L62,15 Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.5" />
            </g>

            {/* Organic ground line */}
            <path
              d="M0,400 Q200,390 400,395 Q600,385 800,390 Q1000,380 1200,385 Q1300,380 1400,385"
              stroke="#d1d5db"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,4"
            />

            {/* Foreground rolling hills */}
            <path
              d="M0,500 Q200,480 400,485 Q600,475 800,480 Q1000,470 1200,475 Q1300,470 1400,475 L1400,700 L0,700 Z"
              fill="white"
              stroke="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}