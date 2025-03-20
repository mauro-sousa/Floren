import {
  ArrowPathIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Professional Excellence",
    description:
      "Upholding best practices, stringent safety measures, and reliable service delivery.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Innovation & Sustainability",
    description:
      "Embracing modern technologies and sustainable practices to drive progress and environmental stewardship.",
    icon: ArrowPathIcon,
  },
  {
    name: "Integrity & Compliance",
    description:
      "Adhering to international certifications, legal requirements, and ethical standards.",
    icon: LockClosedIcon,
  },
  {
    name: "Talent Development & Empowerment",
    description:
      "Investing in the continuous growth of Angolan engineers and professionals to meet global industry benchmarks.",
    icon: AcademicCapIcon,
  },
];

export default function Example() {
  return (
    <>
      {/* Mission */}
      <div className="flex items-center justify-center p-4 pb-10">
        <div className="mx-auto max-w-3xl lg:mx-0 text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-800 sm:text-5xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg/7 text-gray-800">
            To be the leading hub for technology, innovation, and sustainability
            in Angola, delivering top-tier operational, maintenance, and supply
            solutions that meet international standards.
          </p>
        </div>
      </div>
      {/* // Core Values */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
              <h2 className="text-base/7 font-medium text-green-500">
                Our Compose
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Our values
              </p>
              <p className="mt-6 text-lg/7 text-gray-300">
                At the heart of our mission lies a steadfast commitment to
                values that define our identity and guide our actions. These
                core principles shape our operations, decision-making, and
                long-term vision:
              </p>
            </div>
          </div>
          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-x-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute top-1 left-1 size-5 text-green-500"
                  />
                  {feature.name}
                  <br />
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
