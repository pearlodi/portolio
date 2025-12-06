"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


// ✅ ONLY CHANGE: image + link together
const images = [
  {
    image: "/images/aya.png",
    link: "https://aya.com",
  },
  {
    image: "/images/toks.png",
    link: "https://toks.com",
  },
  {
    image: "/images/aedion.png",
    link: "https://aedion.com",
  },
  {
    image: "/images/zeta.png",
    link: "https://zeta.com",
  },
  {
    image: "/images/ayaincuba.png",
    link: "https://ayaincuba.com",
  },
  {
    image: "/images/abittos.png",
    link: "https://abittos.com",
  },
  {
    image: "/images/sehembz.png",
    link: "https://sehembz.com",
  },
  {
    image: "/images/ayaahq.png",
    link: "https://ayaahq.com",
  },
  {
    image: "/images/ferrys.png",
    link: "https://ferrys.com",
  },
];

export function ImageCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-3xl fade-carousel"
    >
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem key={index} className="basis-full">
            {/* ✅ group added here for hover */}
            <div className="p-1 group">
              <Card className="!p-0 rounded-[20px] relative overflow-hidden">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={(item.image)}
                    alt={`carousel-img-${index}`}
                    width={450}
                    height={450}
                    className="object-contain rounded-[20px] w-full "
                  />
                </CardContent>

                {/* ✅ hover overlay → link */}
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute  hidden h-[75vh] 2xl:h-[800px] group-hover:flex
                   justify-center w-full items-center
                    backdrop-blur-xs bg-primary/15 rounded-[20px]"
                >
                  <span className="flex justify-center items-center flex-col">
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
                    <p className="mt-2 text-white">
                    Visit site

                    </p>
                  </span>
                </Link>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* ✅ untouched */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
