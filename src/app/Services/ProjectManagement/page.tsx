"use client";
import Image from "next/image";
import Link from "next/link";

export default function PM() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      {/* Full-screen image with dark overlay */}
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Background image */}
        <Image
          alt="Background"
          src="https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          className="object-cover"
          priority
        />

        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
          <div className="flex flex-col items-center">
            <Image
              alt="Logo"
              src="/white_secondary.png"
              width={200}
              height={200}
              className="w-auto h-24 md:h-32 lg:h-40 object-contain mb-4"
              priority
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-white px-4">
              Engineering & Project Management
            </h1>
          </div>
        </div>

        {/* Breadcrumb navigation */}
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
            <span className="p-1">Engineering & Project Management</span>
          </p>
        </div>
      </div>

      {/* details section would go here */}
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
            Tailored solutions
          </h2>
          <p className="mx-auto mt-6 max-w-5xl text-lg/7 text-pretty text-gray-600">
            FLORENTEK Engineering & Project Management services provide tailored
            solutions for the Oil & Gas industry. Our PMI-certified and
            experienced team delivers precise engineering design, effective
            construction oversight, and disciplined project management.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="mailto:geral@florentek.co.ao"
              className="inline-flex items-center rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-700/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group relative overflow-hidden"
            >
              {/* Default text */}
              <span className="inline-block transition-all duration-300 group-hover:opacity-0">
                Get Started
              </span>

              {/* Hover text */}
              <span className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                Email
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-green-700">
        <div className="relative h-80 overflow-hidden bg-green-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Background image */}
          <Image
            alt="technician"
            width={1920}
            height={1920}
            src="https://images.pexels.com/photos/15961091/pexels-photo-15961091/free-photo-of-platform-with-helipad-on-sea.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="size-full object-cover"
          />

          {/* Logo tag image */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <p
              className="w-auto h-42 object-contain p-5 text-7xl font-semibold text-white" // Adjust size as needed
            >
              Multi-million Dollar Projects
            </p>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-16 xl:pl-16">
            <p className="mt-6 text-base/7 text-gray-50">
              Our professionals have successfully managed and overseen
              multi-million dollar projects, ensuring timely execution, safety,
              and budget adherence. We implement industry-standard
              methodologies, maintaining strict regulatory compliance and
              operational excellence.
            </p>
            <div className="mt-8">
              <a
                href="tel:+(244) 924 667 014"
                className="inline-flex items-center rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group relative overflow-hidden"
              >
                {/* Default text */}
                <span className="inline-block transition-all duration-300 group-hover:opacity-0">
                  Get Started
                </span>

                {/* Hover text */}
                <span className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Call us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why us */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content - Left Side */}
            <div className="lg:w-1/2">
              <h2 className="text-base/7 text-green-500">Why?</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-pretty text-white sm:text-5xl">
                Choose FLORENTEK
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Choose FLORENTEK for reliable, expert-driven engineering and
                project management, designed to secure project success and
                operational efficiency.
              </p>
            </div>

            {/* Bullseye Image - Right Side */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src="https://images.pexels.com/photos/1424745/pexels-photo-1424745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your actual image path
                alt="Target illustration"
                width={400}
                height={400}
                className="w-full h-auto max-w-md object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
