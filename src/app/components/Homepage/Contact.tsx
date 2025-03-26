import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="relative py-10">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-green-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-green-50 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <h3 className="text-gray-800">
              Whether you have a question about our services, need assistance
              with a project, or want to explore collaboration opportunities,
              our team is here to help.
            </h3>
            <p className="mt-3 text-base/6 text-green-900">
              FLORENTEK Engineering stands ready to deliver reliable, efficient,
              and sustainable solutions tailored to the evolving needs of the
              global energy industry.
            </p>
            <dl className="mt-8 text-base text-gray-700">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>Condomínio Dolce Vita, Via S8,</p>
                  <p>Bloco 2D, R/C, Talatona</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-700"
                  />
                  <span className="ml-3">+(244) 924 667 014</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-gray-700"
                  />
                  <span className="ml-3">geral@florentek.co.ao</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-green-800">
              Looking for careers?{" "}
              <a
                href="https://parvagas.vercel.app/"
                className="font-medium text-gray-700 underline"
              >
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12 shadow-lg">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  placeholder="Full name"
                  autoComplete="name"
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-green-500 focus:ring-green-500"
                  defaultValue={""}
                />
              </div>

              <div className="mx-0 mb-1 sm:mb-3">
                <span className="pb-1 text-xs uppercase tracking-wider">
                  What is the reason for your contact?
                </span>
                <div className="flex flex-wrap gap-4">
                  {/* Radio Group - all inputs should share the same name */}
                  {[
                    {
                      id: "general",
                      value: "General inquiries",
                      defaultChecked: true,
                    },
                    { id: "technical", value: "Technical help" },
                    { id: "proposals", value: "Proposals" },
                    { id: "others", value: "Others" },
                  ].map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        id={option.id}
                        type="radio"
                        name="contactType" // Same name for all radio buttons
                        value={option.value}
                        defaultChecked={option.defaultChecked}
                        className="h-4 w-4 cursor-pointer text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={option.id}
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        {option.value}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-6 py-2 text-base font-medium text-white shadow-xs hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-hidden transform transition-all duration-300 hover:scale-105 active:scale-95 active:animate-pulse"
                >
                  Send Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
