import Image from "next/image";
export default function Mission() {
  return (
    <div className="relative bg-green-700">
      <div className="relative h-80 overflow-hidden bg-green-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Background image */}
        <Image
          alt="technician"
          width={1920}
          height={1920}
          src="/Images/Tech.jpg"
          className="size-full object-cover"
        />

        {/* Logo tag image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Image
            alt="Logo"
            width={200}
            height={200}
            src="/white_secondary.png" // Replace with your logo path
            className="w-auto h-42 object-contain" // Adjust size as needed
          />
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-16 xl:pl-16">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            FUTURE OUTLOOK
          </p>
          <p className="mt-6 text-base/7 text-gray-50">
            FLORENTEK Engineering is dedicated to expanding our portfolio by
            managing oil & gas assets that off er significant potential for
            mid-sized operators. Through continuous innovation, targeted
            training, and strategic collaborations, we aim to advance Angola’s
            energy sector while building strong international partnerships.
          </p>
          <div className="mt-8">
            <a
              href="mailto:geral@florentek.co.ao"
              className="inline-flex items-center rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group relative overflow-hidden"
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
    </div>
  );
}
