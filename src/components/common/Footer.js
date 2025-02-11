import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";
import CustomLink from "../custom/CustomLink";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <section className="border-t-[2px] border-customBlack">
      <CustomContainer>
        <div className="py-5 sm:py-14 flex flex-col-reverse gap-4 sm:flex-row justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="arrow vector"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-auto max-w-[85px]"
            />
            <div className="ml-2 tracking-[1px] sm:tracking-[2.5px]">
              <h6>Aliflikescoding</h6>
              <h6>© Copyright - 2025</h6>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
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
        </div>
      </CustomContainer>
    </section>
  );
};

export default Footer;
