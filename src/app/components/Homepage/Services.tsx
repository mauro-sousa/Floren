import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  // LockClosedIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const features = [
  // {
  //   name: "Rental Solutions",
  //   description:
  //     "A diverse fleet of rental equipment, flexible agreements, logistics support, and adherence to international safety standards for efficient deployment and retrieval of cranes, containers, and bins.",
  //   href: "/Services",
  //   icon: LockClosedIcon,
  // },
  {
    name: "Maintenance Services",
    description:
      "We execute precise calibration, rigorous certification, and thorough functional testing of critical safety instruments, ensuring optimal reliability and regulatory compliance across assets.",
    href: "/Services/Maintenance",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Specialized Manpower Services",
    description:
      "We supply highly skilled, certified, and experienced technical personnel with proven track records, tailored specifically for reliable support in demanding Oil & Gas industry operations.",
    href: "/Services/SpecializedManpower",
    icon: ArrowPathIcon,
  },
  {
    name: "Engineering & Project Management",
    description:
      "We offer expert engineering design, robust construction oversight, and precise project management, ensuring successful delivery and seamless commissioning of complex energy sector projects.",
    href: "/Services/ProjectManagement",
    icon: ArrowPathIcon,
  },
  // {
  //   name: "Supply Solutions",
  //   description:
  //     "Provision of high-quality instruments, consumables, spare parts, and integrated supply chain management to ensure timely delivery and compliance with industry standards.",
  //   href: "/Services",
  //   icon: ArrowPathIcon,
  // },
  {
    name: "Operational Asset Management",
    description:
      "Our strategic management services maximize operational efficiency, enhance safety standards, and optimize profitability, aligning underperforming assets with international best practices.",
    href: "/Services/OperationalAsset",
    icon: ArrowPathIcon,
  },

];

export default function ServicesIntro() {
  return (
    <div className="bg-gray-900 py-16 sm:py-16 px-14">
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
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
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
                    <Link
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
                    </Link>
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
