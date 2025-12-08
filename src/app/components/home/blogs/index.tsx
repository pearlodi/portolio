"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";


const blogs = [
  {
    id: 1,
    title: "Animate on scoll",
    excerpt:
      "Crafting Dynamic Web Experiences with Animate on Scroll (AOS) for React and Vue ",
    image: "/images/articles/aos.png",
    link:"https://hackmd.io/@df7sz_q6Qq-knDEpnb3K_Q/Sk26-Fynp"
  },
  {
    id: 2,
    title: "The HTML-JSX fusion",
    excerpt:
      "JavaScript Extensible Markup Language (JSX) is the fusion point where HTML's structure collides with JavaScript's dynamic capabilities.",
      image: "/images/articles/html.jpg",
      link:"https://dev.to/pearlodi/the-html-jsx-fusion-1dmc"

  },
  {
    id: 3,
    title: "REACT HOOKS",
    excerpt:
      "Now, think of React Hooks as special tools that make it easier to do certain things with these components. Before Hooks, doing some stuf",
      image: "/images/articles/hooks.png",
    link:"https://dev.to/pearlodi/react-hooks-hal"

  },
  {
    id: 4,
    title: "React Components",
    excerpt:
      "In React, components are like building blocks of a webpage. They are small, reusable pieces of code that handle specific tasks. Each com",
      image: "/images/articles/components.png",
    link:"https://dev.to/pearlodi/react-components-3oa2"

  },
  {
    id: 5,
    title: "Browser Fingerprinting:",
    excerpt:
      "Think of browser fingerprinting as cookies, but on steriods – it's like the upgraded, super version! While cookies are the old school way of tracking you, browser fingerprinting takes it to a whole new level by creating a unique fingerprint based on all sorts of details about your browser and device",
      image: "/images/articles/fingerprinting.jpg",
    link:"https://hackmd.io/@df7sz_q6Qq-knDEpnb3K_Q/S1f1pjChp"

  }
];

const BlogCarousel = () => {
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    setCurrent(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <div id="articles" className="bg-softGray w-full">
    <div className="container  ">
    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2 className="dark:text-[#080e29]">Articles</h2>
              <p className="text-xl text-[#c726a4]">( 05 )</p>
            </div>
    <div className="mx-auto   w-full pb-10">
      {/* Carousel */}
      <Carousel setApi={setCarouselApi}>
        <CarouselContent>
          {blogs.map((blog) => (
            <CarouselItem
              key={blog.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080e29]">
                <div className="relative h-[190px] w-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-white/60 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <a href={blog.link}>
                  <p className="flex justify-end mt-3 self-end w-full text-[white] font-medium">Read more</p>
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {blogs.map((_, index) => (
          <button
            key={index}
            onClick={() => carouselApi?.scrollTo(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              current === index
                ? "w-6 bg-[#c726a4]"
                : "bg-[#c726a461] cursor-pointer"
            )}
          />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default BlogCarousel;
