import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Link from "next/link";
import NavLink from "../ui/NavLink";
import Image from "next/image";

const Header = () => {
  return (
    <section className=" bg-customCream border-b-2 border-customBlack w-[100%]">
      <CustomContainer>
        <div className="py-[30px] flex flex-col lg:flex-row justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="arrow vector"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-auto max-w-[125px]"
            />
          </Link>
          <div className="flex flex-row gap-5 lg:gap-[45px] mt-4 lg:mt-0">
            <NavLink link="/blog">Blog</NavLink>
            <NavLink link="/projects">Fun Projects</NavLink>
            <NavLink link="https://www.alifwibowo.my.id/">Portfolio</NavLink>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Header;
