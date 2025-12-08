"use client";
import { getDataPath,  } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const localSkills = [
    { icon: "/images/logo/react.png", name: "React js", rating: 5 },
    { icon: "/images/logo/nextjs.png", name: "Next.js", rating: 5 },
    { icon: "/images/logo/js.png", name: "JavaScript", rating: 5 },
    { icon: "/images/logo/typescript.png", name: "TypeScript", rating: 4 },
    { icon: "/images/logo/vue.png", name: "Vue", rating: 4 },
    { icon: "/images/logo/graphql.png", name: "GraphQL", rating: 4 },

    { icon: "/images/logo/apollo.png", name: "Apollo client", rating: 5 },
    { icon: "/images/logo/nativewind.png", name: "NativeWind", rating: 4 },
    { icon: "/images/logo/reactnative.png", name: "React Native", rating: 5 },
    { icon: "/images/logo/expogo.png", name: "Expo", rating: 5 },

    { icon: "/images/logo/github.png", name: "GitHub", rating: 5 },
    { icon: "/images/logo/shadcn.png", name: "shadcn/ui", rating: 4 },
    { icon: "/images/logo/tailwind.png", name: "Tailwind CSS", rating: 5 },
    { icon: "/images/logo/zustand.jpeg", name: "Zustand", rating: 5 },
    { icon: "/images/logo/redux.png", name: "Redux", rating: 4 },
  ];
  
  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={(
              "/images/home/education-skill/uuu.png"
            )}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2  data-aos="fade-down" className="text-[#c726a4]" > Skills & Stacks</h2>
              <p className="text-xl text-[white]">( 03 )</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
            
              <div className="grid grid-cols-2 xs:grid-cols-5 gap-5 xl:gap-7 w-full">
              {localSkills.map((value, index) => {

                  return (
                    <div
                      key={index}
                      className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
                    >
                      <div  data-aos="zoom-in"  className="flex flex-col items-center gap-5">
                        <Image
                          src={(value?.icon)}
                          alt="icon"
                          width={70}
                          height={70}

                        />
                        <p  data-aos="zoom-in"  className="text-black dark:text-white font-normal">{value?.name}</p>
                      </div>
                      <div  data-aos="zoom-in"  className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="9"
                              height="9"
                              rx="4.5"
                              fill={i < value?.rating ? "#c726a4" : "#C0D8E0"}
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
