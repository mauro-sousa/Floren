import Image from "next/image";
import One from "./../Assets/Screen.png";
// import Two from "../../Assets/Screenshot/2.png";
// import Three from "../../Assets/Screenshot/3.png";
// import Four from "../../Assets/Screenshot/4.png";
// import Five from "../../Assets/Screenshot/5.png";
// import Six from "../../Assets/Screenshot/6.png";
// import Seven from "../../Assets/Screenshot/7.png";
// import Eight from "../../Assets/Screenshot/8.png";

export default function Example() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      <li className="relative">
        <div className="group aspect-h-7 aspect-w-10 block w-full  rounded-lg bg-gray-50 focus-within:ring-2 ">
          <Image
            alt=""
            width={900}
            height={900}
            src={One}
            className=" object-cover"
          />
          {/* <Image
            alt=""
            width={900}
            height={900}
            src={Two}
            className=" object-cover"
          />
          <Image
            alt=""
            width={900}
            height={900}
            src={Three}
            className=" object-cover"
          />
          <Image
            alt=""
            width={900}
            height={900}
            src={Four}
            className=" object-cover"
          />
          <Image
            alt=""
            width={900}
            height={900}
            src={Five}
            className=" object-cover"
          />
          <Image
            alt=""
            width={900}
            height={900}
            src={Six}
            className=" object-cover"
          />
          <Image
            alt=""
            width={900}
            height={900}
            src={Seven}
            className=" object-cover"
          />
          <Image
            alt=""
            width={900}
            height={900}
            src={Eight}
            className=" object-cover"
          /> */}
        </div>
      </li>
    </ul>
  );
}
