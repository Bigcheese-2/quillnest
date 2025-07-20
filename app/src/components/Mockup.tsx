'use client'
import React from "react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

export default function Mockup() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex justify-center items-center w-full relative min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
      <div className="relative w-[320px] h-[200px] md:w-[500px] md:h-[300px]">
        {!isDark && (
          <Image
            src="/greystar.png"
            alt="Grey Star"
            width={170}
            height={170}
            className="absolute lg:w-40 lg:h-40 md:-left-[-70px] md:top-56 lg:-left-12 -left-1 top-40 -rotate- z-0 w-24 h-24"
          />
        )}
        {!isDark && (
          <Image
            src="/skystar.png"
            alt="Sky Star"
            width={220}
            height={220}
            className="absolute lg:w-56 lg:h-56 -top-10 md:-right-[-120px] lg:-right-[-40px] md:top-16 lg:-top-16 w-28 h-28 -right-[-40px] rotate-[-15deg] z-0"
          />
        )}
        <Image
          className="relative z-10 md:mt-24 lg:mt-0 drop-shadow-xl md:w-80 lg:w-[500px] md:mx-auto lg:mx-0"
          src="/quillmockup.png"
          alt="Quill Nest Pillow"
          width={500}
          height={300}
          style={{objectFit: 'contain'}}
        />
        {!isDark && (
          <Image
            src="/bluestar.png"
            alt="Blue Star"
            width={130}
            height={130}
            className="absolute w-16 lg:w-32 lg:h-32 md:-right-[-100px] bottom-[-20px] -right-[-20px] lg::bottom-[-64px] lg:-right-[-40px] rotate-12 z-20"
          />
        )}
      </div>
    </div>
  );
}
