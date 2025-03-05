import React from "react";
import hi from "../../assets/hi.png";
import CV from "./CV.pdf";
import img from "../../assets/img.png";
import Navbar from "../navbar/Navbar";
import location from "../../assets/location.jpg";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";

export default function About() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      <div
        className="md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600 
        via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]"
      ></div>
      <Navbar />
      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                mb-16 md:mb-0 items-center text-center relative"
          >
            <img
              src={hi}
              data-aos="fade-up"
              data-aos-delay="400"
              className="absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] transform
                    -translate-x-1/2 -translate-y-1/2 w-20 h-20"
            />
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-white">
              Hi! I'm ESHA RAGHUTE
            </h1>
            <p className="flex md:flex-row">
              <img
                src={location}
                alt=""
                className="rounded-full w-6 h-6 object-cover"
              />
              <span className="ml-2">United Kingdom</span>
            </p>
            <p className="flex md:flex-row mt-2">
              <img
                src={email}
                alt=""
                className="rounded-full w-6 h-6 object-cover"
              />
              <span className="ml-2"><a href='mailto:eraghute@gmail.com'>name@outlook.com</a></span>
            </p>
            <p className="flex md:flex-row mt-2">
              <img
                src={phone}
                alt=""
                className="rounded-full w-6 h-6 object-cover"
              />
              <span className="ml-2">+44 0777777777</span>
            </p>
            <p className="mt-8 mb-8 leading-relaxed">
              I am a Frontend Developer based in the United Kingdom with over
              10+ years of total & relevant experience in crafting scalable and
              high performance applications. Demonstrates expertise in UI
              architecture, feature development, responsive design, and
              integration of RESTful APIs, ensuring seamless and engaging user
              experiences. Known for mentoring teams, optimizing code quality,
              and driving innovation in agile environments, committed to
              advancing technology solutions and fostering collaborative growth.
            </p>
            <div className="flex justify-center">
              <a href={CV} download>
                <button
                  className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                        focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                        rounded-full text-lg"
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={img}
              alt="hero"
              className="object-cover object-center rounded-full w-80 h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
