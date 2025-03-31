import Image from "next/image";
import Link from "next/link";
import Service from "../components/ServiceContent/Services";

export default function Contact() {
  return (
    <>
      <div className="relative py-10">
        {/* Full-screen image with dark overlay */}
        <div className="relative h-[95vh] w-full overflow-hidden">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Background image */}
          <Image
            alt="Background"
            src="https://images.pexels.com/photos/6754758/pexels-photo-6754758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your image path
            width={1920}
            height={1080}
            className="size-full object-cover"
          />

          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Image
              alt="Logo"
              src="/white_secondary.png" // Replace with your logo path
              width={200}
              height={200}
              className="w-auto h-32 object-contain" // Adjust size as needed
            />
          </div>

          {/* Page map (optional) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white text-center">
            <p className="text-sm">
              <Link href="/" className="hover:bg-green-700 p-1">
                Home
              </Link>{" "}
              &gt; Services
            </p>
          </div>
        </div>

        {/* details section */}
        <Service />
      </div>
    </>
  );
}
