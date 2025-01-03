import Image from "next/image";
import Link from "next/link";

import { Button } from "../components/elements/Button";
import HeroCarousel from "../components/HeroCarousel";
import { NAV_LINKS } from "../utils/contants";

import britishAmericanTobacco from "../../../public/assets/britishAmericanTobacco.webp";
import enterpriseBank from "../../../public/assets/enterpriseBank.webp";
import royalCeramic from "../../../public/assets/royalCeramic.webp";
import rackCenter from "../../../public/assets/rackCenter.webp";
import mobileOil from "../../../public/assets/mobileOil.webp";
import service1 from "../../../public/assets/service1.webp";
import service2 from "../../../public/assets/service2.webp";
import service3 from "../../../public/assets/service3.webp";
import feature1 from "../../../public/assets/feature1.webp";
import feature2 from "../../../public/assets/feature2.webp";
import mission from "../../../public/assets/mission.webp";
import nipco from "../../../public/assets/nipco.webp";
import kopek from "../../../public/assets/kopek.webp";
import story from "../../../public/assets/story.webp";
import chat from "../../../public/assets/chat.webp";

export default function Home() {
  const SERVICE = [
    {
      name: "Building & Civil Engineering Construction",
      id: "1",
      img: service3,
    },
    {
      name: "Construction Management",
      id: "2",
      img: service1,
    },
    {
      name: "Interior Design",
      id: "",
      img: service2,
    },
  ];

  const METHODS = [
    {
      title: "Design-Build Approach",
      description:
        "When our clients need a streamlined and efficient construction process, we offer a design-build approach. This method consolidates the design and construction phases under a single contract, simplifying project management and reducing potential conflicts.",
    },
    {
      title: "Tailored Project Teams",
      description:
        "We assemble highly skilled and experienced teams for each project, ensuring optimal results. Our network of professionals allows us to select the right experts to meet specific project requirements.",
    },
    {
      title: "Consultancy Services",
      description:
        "Comprehensive Consultancy Services Our consultancy services cover both pre-contract and post-contract stages. We provide essential services like budgeting, scheduling and value engineering.",
    },
  ];

  const FEATURED_WORK = [
    {
      name: "Construction of Enterprise Bank Head Office V.I.",
      id: "1",
      img: feature1,
      label: [{ location: "V.I, Lagos", year: "2013" }],
    },
    {
      name: "Combined Projects for Nipco Plc. Offices.",
      id: "2",
      img: feature2,
      label: [
        { location: "Wuse II Abuja", year: "2012" },
        { location: "Apapa, Phase I Lagos", year: "2015" },
      ],
    },
  ];

  const PARTNERS = [
    {
      partner: "Nipco Plc.",
      img: nipco,
    },
    {
      partner: "Royal Ceramic",
      img: royalCeramic,
    },
    {
      partner: "British American Tobacco",
      img: britishAmericanTobacco,
    },
    {
      partner: "Rack Center",
      img: rackCenter,
    },
    {
      partner: "11PLC (formerly Mobil Oil Nig. Plc)",
      img: mobileOil,
    },
    {
      partner: "Enterprise Bank (now Heritage Bank)",
      img: enterpriseBank,
    },
    {
      partner: "Kopek Nig.",
      img: kopek,
    },
  ];

  return (
    <div>
      <section className="flex flex-col lg:flex-row lg:h-[840px] w-full relative">
        <div className="lg:w-[60%] overflow-hidden h-[579px] lg:h-full">
          <HeroCarousel />
        </div>
        <div className=" bg-primary lg:w-[40%] px-6 sm:px-20 min-h-[273px] lg:h-full pt-6 lg:pt-0">
          <div className="flex lg:hidden items-center gap-2 flex-wrap xs:flex-none">
            {NAV_LINKS.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={`#${link.link}`}
                  className="text-black px-2 py-1 sm:px-4 sm:py-2 border border-black text-sm sm:text-base"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
          <div className="z-[1] relative lg:w-[338px] text-black lg:mt-[600px]">
            <h2 className="mt-5 md:text-[32px] leading-[29.76px] md:leading-[39.68px] text-[24px] lg:text-auto">
              Project Intelligence and Quality Services Limited - Since 2011.
            </h2>
            <Button
              size="md"
              as="link"
              href="http://wa.link/i5recx"
              target="_blank"
              className="border mt-6 sm:mt-10 relative z-10"
              variant="outline"
            >
              CHAT WITH US
            </Button>
          </div>
        </div>
        <div className="px-6 sm:px-20 w-full absolute bottom-[273px] py-10 lg:py-0 lg:bottom-auto z-[2] lg:translate-x-[-50%] lg:left-[50%] flex justify-between items-end">
          <div className="w-[575px] lg:mt-[520px] text-white">
            <p className="text-xs px-3 py-[7px] backdrop-blur-md bg-black/10 w-fit">
              CONSTRUCTION X ENGINEERING
            </p>
            <h1 className="mt-5 text-[34px] md:text-[40px] leading-[42.16px] md:leading-[49.6px]">
              Redefining The Projection of Construction in Nigeria, One Project
              at a Time
            </h1>
            <Button
              size="md"
              as="link"
              href="http://wa.link/i5recx"
              target="_blank"
              className="border border-white text-white mt-8"
              variant="outline"
            >
              CHAT WITH US
            </Button>
          </div>
        </div>
      </section>
      <section className="flex py-20 sm:py-32 px-6 lg:px-0">
        <div className="text-left w-[650px] mx-auto">
          <h2 className="text-[24px] leading-[29.76px] lg:text-[32px]">
            Taking Construction to New Heights.
          </h2>
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
        <h2 className="pl-6 md:pl-20 text-[24px] leading-[29.76px] lg:text-[32px]">
          Our Services Include:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:max-h-[465px] md:h-[465px] gap-2 px-2 mt-6">
          {SERVICE.map((service) => {
            return (
              <div
                key={service.id}
                className="relative p-7 h-[375px] md:h-full"
              >
                <h3 className="z-[2] text-[24px] leading-[29.76px] lg:text-[32px] absolute bottom-7 left-7 text-white  max-w-[403px] mt-auto">
                  {service.name}
                </h3>
                <Image
                  src={service.img}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="w-[100%]"
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="sm:py-36 py-10 container">
        <div className="lg:w-[965px] lg:ml-auto">
          <h2 className="text-[24px] leading-[29.76px] lg:text-[32px]">
            Our Unique Methods.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6">
            {METHODS.map((methods) => {
              return (
                <div key={methods.title} className="flex justify-between">
                  <div className="">
                    <h3 className="text-[17px]">{methods.title}</h3>
                    <p className="text-[15px] mt-2">{methods.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="" id="work">
        <h2 className="pl-6 md:pl-20 text-[24px] leading-[29.76px] lg:text-[32px]">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-h-[465px] h-[465px] gap-16 sm:gap-2 px-2 mt-6">
          {FEATURED_WORK.map((service) => {
            return (
              <div key={service.id}>
                <div className="relative p-7 h-full">
                  <h3 className="z-[2] text-[24px] leading-[29.76px] lg:text-[32px] absolute bottom-7 left-3 lg:left-7 lg:pr-0 text-white lg:max-w-[427px] mt-auto">
                    {service.name}
                  </h3>
                  <Image
                    src={service.img}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="w-[100%]"
                  />
                </div>
                <div className="flex justify-between flex-wrap">
                  {service.label.map((label) => {
                    return (
                      <div
                        className="flex items-center gap-2 mt-4"
                        key={label.location}
                      >
                        <p className="bg-black/10 text-[13px] text-black px-3 py-1">
                          {label.location}
                        </p>
                        <p className="bg-black/10 text-[13px] text-black px-3 py-1">
                          {label.year}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="px-6 lg:px-20 py-36" id="expertise">
        <h2 className="text-[32px]">Proud to work with</h2>
        {PARTNERS.map((partner) => {
          return (
            <div
              key={partner.partner}
              className="flex justify-between h-[90px] items-center w-full overflow-hidden group"
            >
              <h3 className="text-[17px]">{partner.partner}</h3>
              <div className="w-[200px] relative h-full translate-x-[200px] group-hover:translate-x-0 transition-transform duration-300">
                <Image
                  src={partner.img}
                  alt={partner.partner}
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
            </div>
          );
        })}
      </section>
      <section className="px-6 lg:px-20 md:flex gap-10 xl:gap-32" id="about">
        <Image
          alt="story"
          src={story}
          className="lg:w-[599px] lg:min-w-[599px] lg:max-h-[433.5px] h-auto object-cover"
        />
        <div className="xl:pr-20 mt-10 md:mt-0">
          <h2 className="text-[24px] leading-[29.76px] lg:text-[32px]">The Project I-Q Story</h2>
          <div className="mt-6">
            <p>
              In the heart of Nigeria, a vision took shape. A vision to redefine
              construction standards, to deliver projects that not only met
              expectations but exceeded them. In 2011, Project I-Q Services
              Limited was born.
              <br />
              <br />
              From humble beginnings, Project I-Q rapidly established itself as
              a force to be reckoned with. Our commitment to quality,
              innovation, and client satisfaction has been the cornerstone of
              our success. We&apos;ve transformed landscapes, built iconic
              structures, and delivered countless projects that have left a
              lasting impact.
            </p>
            <Button variant="outline" size="md" className="mt-8 w-full sm:w-auto">
              ABOUT US
            </Button>
          </div>
        </div>
      </section>
      <section className="px-6 lg:px-20 flex flex-col-reverse md:flex-row gap-10 lg:gap-32 py-6 sm:py-36 items-center">
        <div className="xl:pl-20">
          <div className="mt-6">
            <p className="text-[24px] lg:w-[410px]">
              Our mission is to be a leading construction company in Nigeria,
              committed to providing exceptional building and civil engineering
              services.
            </p>
          </div>
        </div>
        <div className="h-[428px] w-full lg:min-w-[400px] relative lg:w-full">
          <Image alt="story" src={mission} fill className="object-cover" />
        </div>
      </section>
      <section className="px-6 lg:px-20 overflow-hidden pb-6 sm:pb-36 pt-6 sm:pt-12" id="contact">
        <div className="grid md:grid-cols-2 md:h-[536px]">
          <div className="w-full relative h-[290px] md:h-full">
            <Image alt="story" src={chat} fill className="object-cover" />
          </div>
          <div className="p-6 md:p-20 bg-primary text-black leading-[52.08px]">
            <h2 className="text-[32px] leading-[39.68px] lg:leading-normal lg:text-[42px]">
              Ready To Chat? <br />
              Start Your Journey.
            </h2>
            <Button
              as="link"
              href="http://wa.link/i5recx"
              target="_blank"
              variant="outline"
              className="mt-8"
            >
              CHAT WITH US
            </Button>
            <svg
              width="209"
              height="199"
              viewBox="0 0 209 199"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-auto mt-8"
            >
              <path
                d="M76.5 0V44H137L43.5 137.5V67H0V198.5H43.5L166 76V132H209V0H76.5Z"
                fill="#050505"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
