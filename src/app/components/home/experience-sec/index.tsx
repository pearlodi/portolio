import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2022",
            title: "Frontend Developer",
            company: "Abitto Global",
            type: "Intern",
            description: "Suffered alteration in some form by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum"
        },
        {
            year: "2023",
            title: "Frontend",
            company: "Ownage Fiditech LLC",
            type: "Intern",
            description: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem"
        },
        {
            year: "2024+",
            title: "Frontend & Mobile Developer",
            company: "Toks Net",
            type: "Fulltime",
            description: "Handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated"
        },
        {
            year: "2024+",
            title: "Frontend developer",
            company: "Aya hq",
            type: "Contract (3 months)",
            description: "Release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software"
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2  data-aos="fade-down" className=''>Experience</h2>
                        <p className="text-xl text-[#ff4400]">( 02 )</p>
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