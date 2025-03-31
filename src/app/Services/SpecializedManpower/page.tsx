"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function SM() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const background = document.querySelector('.parallax-background');
      const content = document.querySelector('.parallax-content');
      
      if (background && content) {
        background.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        content.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      {/* Full-screen image with dark overlay */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Background image with parallax */}
        <div className="parallax-background absolute inset-0 flex items-center justify-center">
          <Image
            alt="Background"
            src="https://images.pexels.com/photos/6754758/pexels-photo-6754758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Centered content with parallax */}
        <div 
          className="parallax-content absolute inset-0 flex flex-col items-center justify-center z-20 text-center"
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        >
          <div className="transform transition-all duration-700 ease-out flex flex-col items-center">
            <Image
              alt="Logo"
              src="/white_secondary.png"
              width={200}
              height={200}
              className="w-auto h-24 md:h-32 lg:h-40 object-contain mb-4"
              priority
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white px-4">
              Maintenance Services
            </h1>
          </div>
        </div>

        {/* Centered breadcrumb navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white text-center w-full">
          <p className="text-sm inline-flex items-center justify-center space-x-2">
            <Link href="/" className="hover:bg-green-700 p-0.5">
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/Services" className="hover:bg-green-700 p-0.5">
              Services
            </Link>
            <span>&gt;</span>
            <span className="p-1">Maintenance Services</span>
          </p>
        </div>
      </div>

      {/* details section would go here */}
      {/* <ServiceContent/> */}
    </div>
  );
}