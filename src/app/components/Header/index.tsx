"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  // PhoneIcon,
  // PlayCircleIcon,
  // RectangleGroupIcon 
} from "@heroicons/react/20/solid";

const products = [
  {
    title: "Maintenance Services",
    desc: "Precision calibration & compliance",
    link: "/Services/Maintenance",
  },
  {
    title: "Specialized Manpower",
    desc: "Certified technical personnel",
    link: "/Services/SpecializedManpower",
  },
  {
    title: "Engineering & PM",
    desc: "Expert project delivery",
    link: "/Services/ProjectManagement",
  },
  {
    title: "Operational Asset Management",
    desc: "Optimize operational efficiency",
    link: "/Services/OperationalAsset",
  },
];
// const callsToAction = [
//   { title: 'Watch demo', link: '#', icon: PlayCircleIcon },
//   { title: 'Contact sales', link: '#', icon: PhoneIcon },
//   { title: 'View all products', link: '#', icon: RectangleGroupIcon },
// ]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-sm shadow-sm" // Glass-like effect when scrolled
          : "bg-white" // Solid background when not scrolled
      } transition-all duration-300`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src={"/icon_Primary1.png"}
              height={200}
              width={200}
              alt="Logo Image"
              className="object-center h-auto w-20"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-10">

        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ml-auto">
          <Link
            href="/AboutUs"
            className="relative text-sm/6 font-semibold text-gray-900 group"
          >
            About Us
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
          </Link>
          <Popover>
            <PopoverButton className="relative flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 group outline-none">
              Services
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-0 -z-10 bg-white pt-8 ring-1 shadow-lg ring-gray-900/5 transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {products.map((item) => (
                  <div
                    key={item.title}
                    className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50"
                  >
                    <a
                      href={item.link}
                      className="mt-6 block font-semibold text-gray-900 relative group"
                    >
                      {item.title}
                      <span className="absolute inset-0" />
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                    </a>
                    <p className="mt-1 text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
          <Link
            href="/Contact"
            className="text-sm/6 font-semibold text-gray-900 relative group"
          >
            Contact Us
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            >
              →
            </span>
            {/* Hover effect: 3 stripes */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a> */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.title}
                        as="a"
                        href={item.link}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.title}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/AboutUs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/Contact"
                  className="text-sm/6 font-semibold text-gray-900 relative group"
                >
                  Contact Us
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                  >
                    →
                  </span>
                  {/* Hover effect: 3 stripes */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
