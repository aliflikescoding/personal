"use client";

import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import CustomLink from "../custom/CustomLink";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="py-[10vh] sm:py-[25vh] px-4">
      <CustomContainer>
        <div className="w-full h-full flex justify-center gap-4 items-center">
          <div className="flex flex-col gap-8 items-center justify-center text-center">
            <Image
              src="/logo.svg"
              alt="arrow vector"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-auto max-w-[450px]"
            />
            <div className="flex gap-3 bg-customWhite p-5 rounded-full border-2 border-customBlack shadow-[4px_4px_0_rgb(0,0,0)] ">
              <CustomLink link="https://github.com/aliflikescoding">
                <FaGithub />
              </CustomLink>
              <CustomLink link="https://www.linkedin.com/in/alifwibowo/">
                <FaLinkedinIn />
              </CustomLink>
              <CustomLink link="https://www.instagram.com/aliflikescoding/">
                <FaInstagram />
              </CustomLink>
              <CustomLink link="https://www.youtube.com/@aliflikescoding">
                <FaYoutube />
              </CustomLink>
              <CustomLink link="https://x.com/AlifLikesCoding">
                <FaXTwitter />
              </CustomLink>
              <CustomLink link="https://www.tiktok.com/@aliflikescoding">
                <FaTiktok />
              </CustomLink>
            </div>
            <h1 className="text-4xl">
              AlifLikes
              <span className="text-customBlue">
                <Typewriter
                  words={["Coding", "Designing", "Creating", "Making"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  cursorColor="#282825"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="max-w-[550px] text-xl">
              Hi there! my name is Alif and I like coding! <br />
              I'm going to be show casing some stuff here that I'll be making
              like blogs, fun projects, tutorials, etc.. <br /> be sure to check
              out the page
            </p>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Hero;
