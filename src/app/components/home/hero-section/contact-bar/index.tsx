"use client";
import { getDataPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosMailOpen } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";


const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
            {/* Contact Items */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11">
            <a
  href="mailto:pearlodi7@gmail.com"
  className="flex items-center gap-1 lg:gap-2 text-sm md:text-base"
>
  <BiLogoGmail className="dark:text-[#ff4400] text-lg lg:text-[28px]" />
  <h6 className="text-sm xl:text-xl dark:text-white">
    pearlodi7@gmail.com
  </h6>
</a>

                  <div
                    className="flex items-center gap-1 text-sm md:text-base"
                  >
                    <FaPhone  className="dark:text-[#ff4400] text-sm lg:text-[28px] "/>
                   
                    <h6 className="text-sm  xl:text-xl dark:text-white ">
                     +234 903 724 8116
                    </h6>
                  </div>
            </div>

            {/* Social Items */}
            <div className="flex items-center justify-center md:justify-end gap-5 md:gap-5">
            <a
                  href={"https://www.linkedin.com/in/odipearl/"}
                  target="_blank"
                >
                  <BsLinkedin size={24} className="dark:text-[#ff4400]  " />
                </a>
                <Link
                  onClick={(e) => e.preventDefault()}
                  href={"https://github.com/pearlodi"}
                >
                  <FaGithub size={30} className="dark:text-[#ff4400]  " />
                </Link>
                <a
  href="https://wa.me/2347041240169"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer"
>
  <RiWhatsappFill size={30} className="dark:text-[#ff4400]" />
</a>

                
            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
