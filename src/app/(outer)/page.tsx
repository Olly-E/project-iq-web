import { Button } from "../components/elements/Button";
import HeroCarousel from "../components/HeroCarousel";

import service1 from "../../../public/assets/service1.webp";
import service2 from "../../../public/assets/service2.webp";
import service3 from "../../../public/assets/service3.webp";
import Image from "next/image";

export default function Home() {
  const SERVICE = [
    {
      name: "Building & Civil Engineering Construction",
      id: "1",
      img: service1,
    },
    {
      name: "Construction Management",
      id: "2",
      img: service2,
    },
    {
      name: "Interior Design",
      id: "",
      img: service3,
    },
  ];
  return (
    <div>
      <section className="flex h-[840px] w-full relative">
        <div className="w-[60%]">
          <HeroCarousel />
        </div>
        <div className=" bg-primary w-[40%] pl-20">
          <div className="w-[338px] text-black mt-[600px]">
            <h2 className="mt-5">
              Project Intelligence and Quality Services Limited - Since 2011.
            </h2>
            <Button size="md" className="border mt-10" variant="outline">
              CHAT WITH US
            </Button>
          </div>
        </div>
        <div className="px-20 w-full absolute z-[2] translate-x-[-50%] left-[50%] flex justify-between items-end">
          <div className="w-[575px] mt-[520px] text-white">
            <p className="text-xs px-3 py-[7px] backdrop-blur-md bg-black/10 w-fit">
              CONSTRUCTION X ENGINEERING
            </p>
            <h1 className="mt-5">
              Redefining The Projection of Construction in Nigeria, One Project
              at a Time
            </h1>
            <Button
              size="md"
              className="border border-white text-white mt-8"
              variant="outline"
            >
              CHAT WITH US
            </Button>
          </div>
        </div>
      </section>
      <section className="flex py-36">
        <div className="text-left w-[650px] mx-auto">
          <h2 className="text-[32px]">Taking Construction to New Heights.</h2>
          <p className="mt-4">
            Project Intelligence and Quality Services Limited is a leading
            Nigerian construction company committed to delivering exceptional
            building and civil engineering solutions. Established in 2011,
            we&apos;ve been actively contributing to the construction industry,
            delivering high-quality projects and and prioritizing client
            satisfaction
          </p>
        </div>
      </section>
      <section className="">
        <h2 className="pl-20">Our Services Include:</h2>
        <div className="grid grid-cols-3 max-h-[465px] h-[465px] gap-2 px-2 mt-10">
          {SERVICE.map((service) => {
            return (
              <div key={service.id} className="relative p-7 h-full">
                <h3 className="z-[2] text-[32px] absolute bottom-7 left-7 text-white  max-w-[403px] mt-auto">
                  {service.name}
                </h3>
                <Image
                  src={service.img}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
