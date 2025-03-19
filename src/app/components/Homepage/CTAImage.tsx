import Image from "next/image";

export default function HomeCTA() {
  return (
    <div className="relative overflow-hidden pt-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Image
          alt="App screenshot"
          src="/Images/Homepage.jpg"
          width={1432}
          height={1442}
          className="mb-[-12%] rounded-xl ring-1 shadow-2xl ring-white/10"
        />
        <div aria-hidden="true" className="relative">
          <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-gray-900 pt-[7%]" />
        </div>
      </div>
    </div>
  );
}
