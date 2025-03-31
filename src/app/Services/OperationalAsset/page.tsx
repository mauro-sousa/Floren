import Image from "next/image";
import Link from "next/link";

export default function OA() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      {/* Full-screen image with dark overlay */}
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Background image */}
        <Image
          alt="Background"
          src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              Operational Asset Management
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
            <span className="p-1">Operational Asset Management</span>
          </p>
        </div>
      </div>

      {/* details section would go here */}
      {/* details section would go here */}
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
            Maximizing Asset Value
          </h2>
          <p className="mx-auto mt-6 max-w-5xl text-lg/7 text-pretty text-gray-600">
            FLORENTEK’s Operational Asset Management services are expertly
            tailored for mature field installations in the Oil & Gas sector. We
            specialize in maximizing asset value, improving operational
            efficiency, and rigorously managing safety and compliance.
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

      {/* Why us */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content - Left Side */}
            <div className="lg:w-1/2">
              {/* <h2 className="text-base/7 text-green-500">Why?</h2> */}
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-pretty text-white sm:text-5xl">
                Extend Asset Lifespan
              </h2>
              <p className="mt-6 text-lg/8 text-gray-300">
                Our skilled team implements proven strategies to optimize
                performance, reduce operational expenditures, and extend asset
                lifespan. Leveraging industry-leading practices and experienced
                personnel, we transform mature installations into
                high-performing assets, enhancing profitability and
                sustainability.
              </p>
<div className="mt-12">
<h2 className="mt-2 text-3xl font-bold tracking-tight text-pretty text-green-600 sm:text-3xl">
                Why FLORENTEK?
              </h2>
              <p className="mt-2 text-lg/8 text-gray-300">
                Partner with FLORENTEK for dedicated, value-driven operational
                management, ensuring your mature field assets achieve optimal
                performance and strategic alignment with international
                standards.
              </p>
</div>
            </div>

            {/* Bullseye Image - Right Side */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src="https://images.pexels.com/photos/6048394/pexels-photo-6048394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your actual image path
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
