"use client"; // This tells Next.js it's a client-side component

import React from "react";
import Link from "next/link";

const CustomLink = ({ children, link }) => {
  return (
    <Link
      target="_"
      className="
      p-2
      text-customWhite
      bg-customBlue
      rounded-full 
      font-semibold
      text-xl 
      sm:text-4xl
      shadow-[4px_4px_0_rgb(0,0,0)] 
      transition-all 
      hover:shadow-none 
      hover:translate-x-1
      hover:translate-y-1
      active:translate-x-1
      active:translate-y-1
      active:shadow-none
      flex
      justify-center
      items-center
      border-2
    border-customBlack"
      href={`${link}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
