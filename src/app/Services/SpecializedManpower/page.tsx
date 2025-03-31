"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Adaptable Personnel:",
    description:
      "Access to flexible professionals who adjust to your operational needs",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Safety-Compliant Teams:",
    description:
    "Workforce fully compliant with industry safety standards and regulations",
    icon: LockClosedIcon,
  },
  {
    name: "Performance-Driven Experts:",
    description:
    "Highly motivated specialists focused on delivering optimal results",
    icon: ArrowPathIcon,
  },
  {
    name: "Operational Efficiency Boost:",
    description:
    "Streamlined processes that maximize your operational output",
    icon: FingerPrintIcon,
  },
  {
    name: "Productivity Enhancement:",
    description:
    "Solutions designed to increase your overall productivity levels",
    icon: Cog6ToothIcon,
  },
  {
    name: "Strategic Capability Development:",
    description:
    "Support that strengthens your long-term strategic positioning",
    icon: ServerIcon,
  },
  {
    name: "Sustained Success Assurance:",
    description:
    "Partnership focused on continuous improvement and lasting results",
    icon: ServerIcon,
  },
];

export default function SM() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      {/* Full-screen image with dark overlay */}
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Background image */}
        <Image
          alt="Background"
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              Specialized Manpower Services
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
            <span className="p-1">Specialized Manpower Services</span>
          </p>
        </div>
      </div>

      {/* details section would go here */}
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
            Services by Skilled Professionals
          </h2>
          <p className="mx-auto mt-6 max-w-5xl text-lg/7 text-pretty text-gray-600">
            FLORENTEK&apos;s Specialized Manpower Services are precisely
            structured to address the dynamic and rigorous needs of the Oil &
            Gas industry. We provide skilled professionals and cohesive teams
            tailored to your specific requirements, ensuring optimal alignment
            with short-term, medium-term, or long-term project durations.
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
            src="https://images.pexels.com/photos/6146696/pexels-photo-6146696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="size-full object-cover"
          />

          {/* Logo tag image */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <p
              className="w-auto h-42 object-contain p-5 text-7xl font-semibold text-white" // Adjust size as needed
            >
              Diverse Talent Pool
            </p>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-16 xl:pl-16">
            <p className="mt-6 text-base/7 text-gray-50">
              Our diverse talent pool comprises experienced individuals and
              teams proficient in technical, non-technical, administrative,
              engineering, managerial, and various specialized roles. Each
              professional is carefully selected for their international
              experience, relevant industry certifications, and impeccable
              performance history.
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
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base/7 text-green-500">Skilled & Diverse</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-pretty text-white sm:text-5xl">
              Choosing FLORENTEK. Why?
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Choosing FLORENTEK guarantees access to adaptable,
              safety-compliant, and performance-driven personnel, enhancing your
              operational efficiency, productivity, and strategic capabilities
              for sustained success.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt className="inline font-semibold text-green-500">
                  {/* <feature.icon
                    aria-hidden="true"
                    className="absolute top-1 left-1 size-5 text-indigo-500"
                  /> */}
                  {feature.name}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
