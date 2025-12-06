"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { X } from "lucide-react";


const projects = [
  {
    image: "/images/aya.png",
    title: "Aya Hackathons",
    link: "https://labs.ayahq.com/",
    company: "Aya Labs",
    description:
      "Aya Hackathons is a platform that hosts real-time hackathons and collaborative challenges, helping teams turn ideas into impact. It offers a dynamic hub for participants to explore projects, connect with peers, and engage in competitions that foster innovation and creativity.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Shadcn", "Zustand","Redux"],
    gallery: ["/images/projects/aya1.png", "/images/projects/aya2.png", "/images/projects/aya3.png","/images/projects/aya4.png","/images/projects/aya5.png"],
  },
  {
    image: "/images/toks.png",
    title: "ToksNet Africa",
    company: "Toks Net",
    link: "https://toks.net.ng/", // replace with actual link if available
    description:
      "ToksNet Africa is the official website for Toks Net, presenting the company’s services, projects, and vision. The site provides an informative and polished overview of the brand for visitors and potential clients.",
    tech: ["TypeScript", "Shadcn UI", "Nextjs","Tailwind"],
    gallery: ["/images/projects/toks1.png", "/images/projects/toks2.png", "/images/projects/toks3.png", "/images/projects/toks4.png", "/images/projects/toks5.png"],
  },
  

  {
    image: "/images/aedion.png",
    title: "AedionAI",
    company: "Aedion",
    link: "https://aedionai-website-y0cl.onrender.com/",
    description:
      "AedionAI is a health companion that provides AI-powered scans and real-time chat to deliver instant health insights. It helps users monitor symptoms, understand warning signs, and track daily health behaviors. The platform also includes a mobile app built with React Native for on-the-go access.",
    tech: ["TypeScript", "Shadcn UI", "Nextjs","Tailwind","Apollo client", "Graphql"],
    gallery: ["/images/projects/aedion1.png", "/images/projects/aedion2.png", "/images/projects/aedion3.png", "/images/projects/aedion4.png", "/images/projects/aedion5.png"],

  },
  
  {
    image: "/images/zeta.png",
    title: "Zeta Brent Education",
    company: "Zeta",
    link: "https://zetabrenteducation.com",
    description:
      "Zeta Brent Education helps students find their dream schools abroad. From admissions to accommodation, the platform supports students in exploring opportunities, connecting with counselors, and accessing over 300 schools. Trusted by more than 1,000 students, it simplifies the journey to academic success.",
    tech: ["React","Shadcn","Tailwind"],
    gallery: ["/images/projects/zeta1.png", "/images/projects/zeta2.png", "/images/projects/zeta3.png", "/images/projects/zeta4.png", "/images/projects/zeta5.png"],
  },
  
  {
    image: "/images/ayaincuba.png",
    title: "AyaHQ",
    company: "Aya Labs",
    link: "https://ayahq.com", 
    description:
      "AyaHQ is part of the Aya Hackathons ecosystem, focused on fostering innovation, supporting startups, and connecting organizations. The platform helps grow talent, strengthen tech communities, and provide resources for builders to turn ideas into impactful projects.",
      tech: ["Nextjs","Shadcn","Tailwind","Typescript","Redux"],

    gallery: ["/images/projects/hq1.png", "/images/projects/hq2.png", "/images/projects/hq3.png", "/images/projects/hq4.png", "/images/projects/hq5.png"],
  }
,  
  {
    image: "/images/abittos.png",
    title: "Abittos",
    company: "Abittos Global Services",
    link: "https://abittoglobal.com/", 
    description:
      "Abittos Global Services provides world-class solutions and expert support to clients across industries. The platform showcases their services and expertise, delivering a polished and professional online presence for the company.",
    tech: ["Javacript","HTML","CSS"],
    gallery: ["/images/projects/abitto1.png", "/images/projects/abitto2.png", "/images/projects/abitto3.png", "/images/projects/abitto4.png", "/images/projects/abitto5.png"],
  },
  {
    image: "/images/sehembz.png",
    title: "Sehembz",
    company: "Toks net",
    link: "https://sehembztravels.com/", 
    description:
      "Sehembz is a one-stop travel platform offering tour packages, flight bookings, visa assistance, private jet hire, and more. It helps users explore destinations, plan trips, and create unforgettable travel experiences across 32 cities, trusted by thousands of travelers globally.",
    tech: ["Nextjs","typescript","Shadcn","Tailwind","Apollo client", "Graphql","Zod",],
    gallery: ["/images/projects/sehembz1.png", "/images/projects/sehembz2.png", "/images/projects/sehembz3.png", "/images/projects/sehembz4.png", "/images/projects/sehembz5.png"],

  },
  {
    image: "/images/ayaahq.png",
    title: "Ayah Incubation",
    company: "Aya Labs",
    link: "https://incubation.ayahq.com/", 
    description:
      "Ayah HQ is a subset of Aya Hackathons focused on empowering Africa’s next generation of on-chain pioneers. The platform provides guidance, community support, and practical tools to help innovators scale, experiment, and turn blockchain ideas into tangible projects.",
      tech: ["Nextjs","Shadcn","Tailwind","Typescript","Redux"],

    gallery: ["/images/projects/incub1.png", "/images/projects/incub2.png", "/images/projects/incub3.png", "/images/projects/incub4.png", "/images/projects/incub5.png"],

  },
  {
    image: "/images/ferrys.png",
    title: "Ferry's",
    company: "Abitto Global Services",
    link: "https://ferrys.com", 
    description:
      "Ferry's provides reliable and secure boat journeys across Africa’s waters, helping travelers explore destinations safely and conveniently. The platform showcases schedules, deals, and services while highlighting customer satisfaction and trust.",
    tech:  ["Javacript","HTML","CSS"],
    gallery: ["/images/projects/ferry1.png", "/images/projects/ferry2.png", "/images/projects/ferry3.png", "/images/projects/ferry4.png", "/images/projects/ferry5.png"],
  }
  
];

const LatestWork = () => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2 className="dark:text-[#080e29]">Latest Works</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>

            {/* ------ GRID REMAINS THE SAME ------ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {projects.map((value, index) => (
                <div key={index} className="group flex flex-col gap-3 xl:gap-6">
                  <div className="relative">
                    <Image
                      src={value.image}
                      alt={value.title}
                      width={570}
                      height={414}
                      className="rounded-lg w-full max-h-[350px] h-full object-cover object-top"
                    />

                    {/* Hover Button */}
                    <button
                      onClick={() => setSelected(value)}
                      className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 hidden group-hover:flex w-full h-full rounded-lg"
                    >
                      <span className="flex justify-center items-center p-5 w-full">
                        <svg
                          width="65"
                          height="64"
                          viewBox="0 0 65 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.333374"
                            width="64"
                            height="64"
                            rx="32"
                            fill="#FE4300"
                          />
                          <path
                            d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                            stroke="#FFFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-col gap-0 xl:gap-2">
                    <div className="flex items-center justify-between">
                      <button onClick={() => setSelected(value)}>
                        <h5 className="text-[#080e29] font-bold">
                          {value.title}
                        </h5>
                      </button>
                      <a
  href={value.link} // your external link here
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer"
>
  <div className="flex items-center">
    <p className="font-medium text-[#080e29]">Visit</p>
    {/* Your content inside */}
    <Image
      src={("/images/icon/right-arrow-icon.svg")}
      alt="arrow"
      width={30}
      height={30}
    />
  </div>
</a>

                    </div>
                    <p className="text-[#080e29]"> Company: {value.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------- MODAL ---------------------- */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-[800px] bg-softGray max-h-[90vh] overflow-y-auto">
          <DialogClose className="flex w-full justify-between cursor-pointer">
            <div />
            <X color="black" />
          </DialogClose>
          {selected && (
            <div className="flex flex-col gap-4">
              <DialogHeader>
                <DialogTitle className="text-[#080e29] text-left text-2xl">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>

              {/* DESCRIPTION */}
              <p className="text-[#080e29] w- text-sm leading-relaxed">
                {selected.description}
              </p>

              {/* TECH STACK */}
              <div>
                <h5 className="font-semibold mb-2 text-[#080e29]">
                  Tech Stack & libraries
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((item: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 font-medium  bg-orange-100 text-orange-600 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* GALLERY — SHADCN CAROUSEL */}
              <div className="relative ">
                <Carousel
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent className="-ml-4">
                    {selected.gallery.map((g: string, i: number) => (
                      <CarouselItem key={i} className="pl-4 basis-2/3">
                        <div className="w-full  bg-gray-100 h-[300px] rounded-lg overflow-scroll">
                          <Image
                            src={g}
                            alt={`${selected.title} screenshot ${i + 1}`}
                            width={700}
                            height={400}
                            className="w-full h-full   "
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="b text-white bg-[#ff4400] hover:bg-orange-600 border-none -left-0" />
                  <CarouselNext className="bg-orange-500 text-white hover:bg-orange-600 border-none -right-0" />
                </Carousel>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LatestWork;
