"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="fixed bottom-4 md:bottom-8 lg:bottom-12 right-16 md:right-20 lg:right-24 xl:right-32 2xl:right-[20%] w-[50px] h-[50px] translate-x-[100%] bg-gradient-to-b from-secondary to-primary rounded-full flex justify-center items-end z-[999]"
      onClick={scrollToTop}>
      <Image src="/assets/uparrow.png" alt="↑" width={20} height={35} />
    </button>
  );
};
