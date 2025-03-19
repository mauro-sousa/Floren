import Image from "next/image";

export default function HomeCTA() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 sm:py-16 lg:px-8">
      {/* Image with Dark Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          alt="Instrument"
          width={1920}
          height={1080}
          src="/Instrument.jpeg" // Ensure the image is in the public directory
          className="h-full w-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Content */}
      <div className="mx-auto max-w-2xl text-center py-8">
        <h2 className="text-5xl font-medium tracking-tight text-white sm:text-5xl">
        Uma Equipe Vibrante & Qualificada
        </h2>
        {/* <p className="mt-8 text-lg font-normal text-pretty text-gray-300 sm:text-xl/8">
        Serviços de ponta e precisão redefinem o futuro!
        </p> */}
      </div>
    </div>
  );
}