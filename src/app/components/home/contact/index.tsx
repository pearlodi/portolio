"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formEndpoint = "https://formspree.io/f/movajqpq";

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", number: "", email: "", message: "" });
      } else {
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className="no-print bg-[#080e29]">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2 data-aos="fade-down" className="text-[#ff4400]">
              Contact Me
            </h2>
            <p className="text-xl text-[#ff4400]">( 05 )</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-white mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="rounded-full "
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="number" className="text-white mb-2">
                      Phone *
                    </label>
                    <Input
                      id="number"
                      name="number"
                      type="number"
                      required
                      value={formData.number}
                      onChange={handleChange}
                      className="rounded-full "
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-white mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    className="rounded-full "
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-white mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    className="rounded-full "
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={4}
                  />
                </div>

                {submitted && (
                  <div className="flex items-center gap-2">
                    <Image
                      src={getImgPath("/images/icon/success-icon.svg")}
                      alt="success-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-white">
                      Great! Email has been successfully sent. I'll will get in
                      touch ASAP.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="relative overflow-hidden cursor-pointer w-fit  border border-primary rounded-full group"
                >
                  <div className="borders resume-btn liquid bg-transparent w-fit px-12 text-white rounded-full py-4">
                    Send now
                  </div>
                </button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
              <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                  <div >
                    <Link
                      className="text-base sm:text-lg font-normal text-white hover:text-primary"
                      onClick={(e) => e.preventDefault()}
                      href={"#!"}
                    >
                      dsds
                    </Link>

                    <Link
                      className="text-base sm:text-lg font-normal text-white hover:text-primary"
                      onClick={(e) => e.preventDefault()}
                      href={"#!"}
                    >
                      dsds
                    </Link>
                    <Link
                      className="text-base sm:text-lg font-normal text-white hover:text-primary"
                      onClick={(e) => e.preventDefault()}
                      href={"#!"}
                    >
                      dsds
                    </Link>

                  </div>
              </div>

              <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                  <div >
                    <Link
                      onClick={(e) => e.preventDefault()}
                      href={"#!"}
                      className="text-base lg:text-lg text-white font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
                    >
                      dsdf
                    </Link>
                    <Link
                      className="text-base sm:text-lg font-normal text-white hover:text-primary"
                      onClick={(e) => e.preventDefault()}
                      href={"#!"}
                    >
                      dsds
                    </Link>
                    <Link
                      className="text-base sm:text-lg font-normal text-white hover:text-primary"
                      onClick={(e) => e.preventDefault()}
                      href={"#!"}
                    >
                      dsds
                    </Link>
                  </div>
              </div>
            </div>          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
