import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Rental Solutions",
    description:
      "A diverse fleet of rental equipment, flexible agreements, logistics support, and adherence to international safety standards for efficient deployment and retrieval of cranes, containers, and bins.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Engineering & Project Management",
    description:
      "Comprehensive support in design, construction, commissioning, project planning, execution, and technical advisory to optimize performance and address operational challenges.",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Supply Solutions",
    description:
      "Provision of high-quality instruments, consumables, spare parts, and integrated supply chain management to ensure timely delivery and compliance with industry standards.",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Specialized Manpower Services",
    description:
      "Skilled and certified personnel for Oil & Gas operations, along with training and mentoring programs to develop a competent local workforce.",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Operational Asset Management",
    description:
      "Integrated solutions for asset efficiency, safety, and profitability, including medium-term strategies to manage underperforming assets in line with international standards.",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Maintenance Services",
    description:
      "Testing, calibration, and certification of safety-critical instruments, functional testing of SIS, Fire & Gas compliance, and preventative/corrective maintenance programs, including turnaround services for onshore and offshore facilities to ensure operational reliability and regulatory compliance.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
];

export default function ServicesIntro() {
  return (
    <div className="bg-gray-900 py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-green-400">
            Service Portfolio
          </h2>
          <p className="mt-6 text-lg/6 text-gray-200">
            We provide integrated industrial services, including engineering and
            design of instrumentation, electrical, control, and safety systems.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                  {/* <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-indigo-400"
                  /> */}
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-2">
                    <a
                      href={feature.href}
                      className="text-sm/6 font-semibold text-green-400 group relative inline-block"
                    >
                      Learn more
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                      >
                        →
                      </span>
                      {/* Animated underline */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
