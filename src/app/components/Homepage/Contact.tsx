"use client";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null); // Store the token

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any, event: any) => {
    event.preventDefault();
    if (!isVerified || !recaptchaToken) {
      alert(
        "Please verify that you are not a robot. / Verifique se você não é um robô."
      );
      return;
    }
    setIsLoading(true); // Start loading

    const templateParams = {
      fullname: data?.fullname,
      email: data?.email,
      message: data?.message,
      entity: data?.entity,
      phone: data?.phone,
      purpose: data?.purpose,
      "g-recaptcha-response": recaptchaToken, // Include reCAPTCHA token
    };
    console.log(templateParams);

    emailjs
      .send(
        "service_li5opsn",
        "template_mcvir0j",
        templateParams,
        "KYRAk-Kw00yYqlNBH"
      )
      .then(
        function (response) {
          setIsLoading(false);
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Inquiry sent successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
              background: "#16a34a", // green-600
            },
          });
          event.target.reset();
        },
        function (error) {
          setIsLoading(false);
          console.log("FAILED...", error);
          toast.error(
            "Submission failed. Please try again or contact geral@florentek.co.ao",
            {
              position: "top-center",
              autoClose: 8000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              style: {
                background: "#dc2626", // red-600
              },
            }
          );
        }
      );
  };

  const form = useRef<HTMLFormElement>(null);

  return (
    <>
        {/* Contact form and details section */}
        <div className="relative py-10">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-green-50" />
          </div>
          <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            {/* left side */}
            <div className="bg-green-50 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="mx-auto max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Get in touch
                </h2>
                <h3 className="text-gray-800">
                  Whether you have a question about our services, need
                  assistance with a project, or want to explore collaboration
                  opportunities, our team is here to help.
                </h3>
                <p className="mt-3 text-base/6 text-green-900">
                  FLORENTEK Engineering stands ready to deliver reliable,
                  efficient, and sustainable solutions tailored to the evolving
                  needs of the global energy industry.
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

            {/* Contact form */}
            <div className="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12 shadow-lg">
              <div className="mx-auto max-w-lg lg:max-w-none">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  ref={form}
                  className="grid grid-cols-1 gap-y-6"
                >
                  {/* Full name */}
                  <div>
                    <label htmlFor="full-name" className="sr-only">
                      Full name
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      placeholder="Full Name"
                      autoComplete="name"
                      {...register("fullname", { required: true })}
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-green-500 focus:ring-green-500"
                    />
                    {errors.fullname && (
                      <p className="mt-1 text-sm text-red-600">
                        Please enter your name
                      </p>
                    )}
                  </div>

                  {/* Entity */}
                  <div>
                    <label htmlFor="Entity" className="sr-only">
                      Organization
                    </label>
                    <input
                      id="Entity"
                      type="text"
                      placeholder="Organization Name"
                      autoComplete="organization"
                      {...register("entity", { required: true })}
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-green-500 focus:ring-green-500"
                    />
                    {errors.entity && (
                      <p className="mt-1 text-sm text-red-600">
                        Please enter your organization
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Business Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Corporate Email Address"
                      autoComplete="email"
                      {...register("email", { required: true })}
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-green-500 focus:ring-green-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        Please enter a business email address
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Direct Line
                    </label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="Direct Phone Line"
                      autoComplete="tel"
                      {...register("phone", { required: true })}
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-green-500 focus:ring-green-500"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        Please insert a valid phone number
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Inquiry Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Nature of Your Business Inquiry"
                      {...register("message", { required: true })}
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-green-500 focus:ring-green-500"
                      defaultValue={""}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        Please Write an Inquiry
                      </p>
                    )}
                  </div>

                  {/* Purpose of Communication */}
                  <div className="mx-0 mb-1 sm:mb-3">
                    <label className="block pb-1 text-xs uppercase tracking-wider text-gray-700">
                      Purpose of Communication *
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        {
                          id: "executive",
                          value: "Executive Inquiry",
                          description:
                            "High-level business discussions and strategic inquiries",
                        },
                        {
                          id: "technical",
                          value: "Technical Consultation",
                          description:
                            "Product specifications and technical support",
                        },
                        {
                          id: "partnership",
                          value: "Partnership Proposal",
                          description: "Business collaboration opportunities",
                        },
                        {
                          id: "procurement",
                          value: "Procurement Inquiry",
                          description: "Purchasing and supply chain questions",
                        },
                      ].map((option) => (
                        <div key={option.id} className="flex items-start">
                          <input
                            id={option.id}
                            type="radio"
                            value={option.value}
                            {...register("purpose", { required: true })}
                            className="h-4 w-4 mt-1 cursor-pointer text-green-600 focus:ring-green-500"
                          />
                          <label
                            htmlFor={option.id}
                            className="ml-2 text-sm text-gray-700"
                          >
                            <span className="font-medium">{option.value}</span>
                            {/* <p className="text-xs text-gray-500 mt-1">
                              {option.description}
                            </p> */}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.purpose && (
                      <p className="mt-1 text-sm text-red-600">
                        Please select a purpose
                      </p>
                    )}
                  </div>

                  {/* Button */}
                  <div>
                    {/* reCAPTCHA component */}
                    <ReCAPTCHA
                      sitekey={"6LeINgYrAAAAAI3UfkOg-AZw1F3VgWeOPRCABuN5"}
                      onChange={(value) => {
                        setVerified(true);
                        setRecaptchaToken(value); // Save the reCAPTCHA token
                      }}
                      className="py-2"
                      data-size="invisible"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`inline-flex justify-center items-center rounded-md border border-transparent px-6 py-2 text-base font-medium text-white shadow-xs focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none transform transition-all duration-300 hover:scale-105 active:scale-95 ${
                        isLoading
                          ? "bg-green-700 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
    </>
  );
}
