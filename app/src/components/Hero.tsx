'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";
import Mockup from "./Mockup";

const socialIcons = [
  { 
    light: "/tiktok.svg", 
    dark: "/tiktokdark.svg", 
    alt: "TikTok", 
    href: "https://www.tiktok.com/" 
  },
  {
    light: "/instagram.svg",
    dark: "/instagram dark.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/",
  },
  { 
    light: "/facebook.svg", 
    dark: "/facebookdark.svg", 
    alt: "Facebook", 
    href: "https://www.facebook.com/" 
  },
  { 
    light: "/twitterx.svg", 
    dark: "/twitterdark.svg", 
    alt: "TwitterX", 
    href: "https://twitter.com/" 
  },
  { 
    light: "/snap.svg", 
    dark: "/snapdark.svg", 
    alt: "Snapchat", 
    href: "https://www.snapchat.com/" 
  },
];

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="hero-section px-10 pb-10 pt-10 md:pt-0 md:h-[calc(100vh-60px)] lg:h-[calc(100vh-60px)] flex w-full justify-center items-center ">
      <div className="w-full md:space-y-10">
        <div className=" flex flex-col  gap-4 md:gap-10">
          <h1 className=" text-5xl text-primary sm:text-7xl font-semibold tracking-tighter md:leading-7 text-center md:text-left">
            Quill Nest
          </h1>
          <h3 className="text-secondary  font-semibold text-2xl text-center md:text-left sm:text-5xl">
            Sleep better today!
          </h3>
        </div>
        <div className="pb-10 pt-4 block md:hidden"> <Mockup /></div>
        <div className=" flex flex-col justify-center items-center md:flex-row  md:justify-between md:items-center  ">
          <div className="flex flex-col md:flex-row gap-3 justify-between w-full items-center">
            <Link
              href=""
              className="flex gap-2 bg-button md:bg-primary
             rounded-full items-center justify-center w-fit py-2 px-4"
            >
              <FaWhatsapp className="text-white" />
              Contact us
            </Link>

            <div className="hidden  md:flex gap-6 md:gap-4  justify-center items-center">
              {socialIcons.map((icon) => (
                <Link
                  href={icon.href}
                  key={icon.alt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src={isDark ? icon.dark : icon.light} 
                    alt={icon.alt} 
                    width={20} 
                    height={20} 
                  />
                </Link>
              ))}
            </div>

          </div>
          <div className=" md:hidden pt-8 mx-auto md:mx-0 w-fit flex gap-1 cursor-pointer">
            <Image src={isDark ? "/maildark.svg" : "/mail.svg"} alt="" width={20} height={20} />
            <p className="text-[#767877] font-semibold">
              quillnest01@gmail.com
            </p>
          </div>

        </div>
        <div className="hidden  mx-auto md:mx-0 w-fit md:flex gap-1 cursor-pointer">
          <Image src={isDark ? "/maildark.svg" : "/mail.svg"} alt="" width={20} height={20} />
          <p className="text-[#767877] font-semibold">quillnest01@gmail.com</p>
        </div>
        <div className="flex pt-4 gap-6 md:gap-4  justify-center items-center">
              {socialIcons.map((icon) => (
                <Link
                  href={icon.href}
                  key={icon.alt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src={isDark ? icon.dark : icon.light} 
                    alt={icon.alt} 
                    width={20} 
                    height={20} 
                  />
                </Link>
              ))}
            </div>

      </div>
    </div>
  );
}
