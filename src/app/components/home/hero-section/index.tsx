"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { ImageCarousel } from "./Carousel";

const index = () => {
  return (
    <div>
      <section className="relative  hero-section mx-auto w-full overflow-hidden h-[75vh] 2xl:h-[800px]">
        <div className="2xl:flex items-center justify-center  ">
          <div className="sm:px-24 px-7">
            <div className="lg:flex mt-10 grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 2xl:flex items-center">
              <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
                <div>
                  <div className="borders resume-btn liquid text-[black] dark:bg-transparent w-fit px-12 dark:text-white rounded-full py-4">
                    Download PDF Resume
                  </div>
                  <div className="flex  mt-12 items-center gap-8">
                    <h1>I'm Pearl</h1>

                    <div className="wave">
                      <Image
                        src={("/images/home/banner/wave-icon.svg")}
                        alt="wave-icon"
                        width={62}
                        height={62}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="text-3xl lg:text-[45px] font-semibold">
                    <Typewriter
                      words={[
                        "Frontend Developer",
                        "Mobile Developer",
                        "Technical Writer",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </div>
                </div>
                <p className="font-normal w-[90%] text-black dark:text-white max-w-md xl:max-w-xl">
                  I enjoy blending creativity and code to build clean,
                  functional software experiences focused on performance,
                  usability, and clarity.
                </p>
              </div>
              {/* <Image
            src={("/images/home/banner/banner-img.png")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          /> */}
            </div>
          </div>
          <div className="hidden 2xl:hidden absolute right-0 top-0  h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
            <ImageCarousel />
          </div>
          <div className="hidden 2xl:block   h-[600px]">
            <ImageCarousel />
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
