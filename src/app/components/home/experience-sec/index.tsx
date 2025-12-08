import React from 'react';
const ExperienceSec = () => {
    const experiences = [
      {
        year: "2022",
        title: "Frontend Developer",
        company: "Abitto Global",
        type: "Intern",
        description:
          "Built responsive web interfaces from design files, integrated APIs, and collaborated with designers and backend developers to deliver production-ready features."
      },
      {
        year: "2023",
        title: "Frontend Developer",
        company: "Ownage Fiditech LLC",
        type: "Intern",
        description:
          "Developed and optimized user interfaces with React and Vue, working closely with design and backend teams to ensure performance and cross-device consistency."
      },
      {
        year: "2024+",
        title: "Frontend & Mobile Developer",
        company: "Toks Net",
        type: "Full-time",
        description:
          "Develop and maintain web and mobile applications, building interfaces from scratch and integrating backend services to deliver scalable, user-focused products."
      },
      {
        year: "2024+",
        title: "Frontend Developer",
        company: "Aya HQ",
        type: "Contract (3 months)",
        description:
          "Assisted the frontend lead in building platform features, creating reusable components, improving responsiveness, and integrating backend services using modern tools."
      }
    ];
  

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2  data-aos="fade-down" className='text-[#c726a4]'>Experience</h2>
                        <p className="text-xl text-[white]">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div data-aos="fade-up" className="">
                                    <h3 className="font-bold mb-2 dark:text-white text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal text-back dark:text-[#ffffff89]">{exp.title}</h4>
                                </div>

                                <div  data-aos="fade-up" className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-black dark:bg-softGray`}></div>
                                    )}

                                    <div data-aos="zoom-in" className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1  bg-black dark:bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div data-aos="zoom-in" className="w-1.5 h-1.5 rounded-full "></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black  dark:text-[#ffffff89] font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal text-black dark:text-white">{exp.type}</p>
                                    </div>
                                </div>

                                <div data-aos="fade-up" className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base text-black dark:text-white">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;