import Image from "next/image";
import HomeCTA from "./components/Homepage/CTAImage";
import Logo from "./components/Homepage/Logo";

export default function Home() {
  return (
    <>
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center">
          <Image
            src={"/primary_secondary.png"}
            height={200}
            width={200}
            alt="Logo Image"
            className="object-center h-auto w-80"
          />
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
          Trusted Partner for Businesses and Investors around the Globe.
        </h2>
        <p className="mt-8 text-base font-normal text-pretty text-gray-600 sm:text-xl">
          We are a vibrant, qualified Team , we represent a brighter future,
          fostering advancements that meet the evolving demands of our clients.
        </p>
      </div>
      <Logo/>
    </div>
    <HomeCTA/>
    </>
  );
}
