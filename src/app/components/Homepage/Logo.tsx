import Image from "next/image";

export default function Partnerlogo() {
  return (
    <div className="bg-white flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-3 gap-y-6 sm:max-w-xl sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Logo 1 */}
          <div className="col-span-1 flex justify-center lg:col-span-1">
            <Image
              alt="Transistor"
              src="https://gdi.globus.co.ao/images/logo/logo-2.svg"
              width={158}
              height={48}
              className="max-h-20 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          {/* Logo 2 */}
          <div className="col-span-1 flex justify-center lg:col-span-1">
            <Image
              alt="Reform"
              src="/IRS_logo.png"
              width={158}
              height={48}
              className="max-h-12 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}