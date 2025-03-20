// import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import MissionMain from "../components/AboutContent/MissionCore";

export default function Contact() {
  return (
    <>
      <div className="relative py-10">
        {/* Full-screen image with dark overlay */}
        <div className="relative h-[95vh] w-full overflow-hidden">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Background image */}
          <Image
            alt="Background"
            src="/Images/About.webp" // Replace with your image path
            width={1920}
            height={1080}
            className="size-full object-cover"
          />

          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Image
              alt="Logo"
              src="/white_secondary.png" // Replace with your logo path
              width={200}
              height={200}
              className="w-auto h-32 object-contain" // Adjust size as needed
            />
          </div>

          {/* Page map (optional) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white text-center">
            <p className="text-sm">
              <Link href="/" className="hover:bg-green-700 p-1">
                Home
              </Link>{" "}
              &gt; Who We Are
            </p>
          </div>
        </div>

        {/* details section */}
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-medium text-green-600">
                    Engineering a better Tomorrow
                  </h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Cutting-edge Services and Precision
                  </p>
                  <p className="mt-6 text-normal/6 text-left text-green-700">
                    With a vibrant, qualified Team , we represent a brighter
                    future, fostering advancements that meet the evolving
                    demands of our clients.
                  </p>
                  <p className="mt-6 text-lg/7 text-gray-600">
                    FLORENTEK Engineering is a 100% Angolan-owned enterprise
                    built on combined local and international Oil & Gas
                    expertise. We deliver high-quality maintenance, engineering,
                    project management, and operational support services,
                    positioning ourselves as a trusted partner for businesses
                    and investors around the globe.
                  </p>
                  <a
                    href="mailto:geral@florentek.co.ao"
                    className="mt-6 inline-flex items-center rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-700/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group relative overflow-hidden"
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
              <Image
                alt="Product screenshot"
                src="https://images.pexels.com/photos/3802795/pexels-photo-3802795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>

        <MissionMain/>
      </div>
    </>
  );
}
