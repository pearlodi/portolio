import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2 data-aos="fade-down" className="dark:text-[#080e29]">
                About Me
              </h2>
              <p className="text-xl dark:text-[#ff4400]">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div
                data-aos="zoom-in"
                className="w-[400px] h-[500px] rounded-full hidden lg:flex overflow-hidden"
              >
                <Image
                  src={("/images/home/girlie.png")}
                  alt="about-banner"
                  width={500}
                  height={440}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p className="dark:text-[#080e29] font-bold text-4xl">
                  Frontend & Mobile developer
                </p>
                <p className="text-[#080e29] mt-3">
                  <strong>Hi, i'm Odi Pearl</strong><br/>
                  I build front-end interfaces that are clean, functional, and
                  easy to use. I take designs from Figma and bring them to life,
                  making sure they actually feel good to use. I enjoy
                  experimenting with animations, layouts, and small details that
                  make a difference. Basically, I like making apps that are both
                  pretty and practical.
                </p>

                <div className="grid dark:text-[#080e29] grid-cols-2 lg:grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "4+", label: "Years coding" },
                    { count: "50+", label: "UI components built" },
                    { count: "9", label: "Public projects" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  {/* <div className="flex items-center gap-3.5">
                    <Image
                      src={("/images/icon/lang-icon.svg")}
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Language</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Hindi", "Malayalam"].map((lang) => (
                      <p
                        key={lang}
                        className="bg-white text-black  py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                      >
                        {lang}
                      </p>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
