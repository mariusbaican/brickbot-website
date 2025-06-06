"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookBoxLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    const el =
      document.scrollingElement || document.documentElement || document.body;
    el.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#191919] h-auto min-h-[10rem] w-full flex">
      <span className="h-auto w-auto ml-[1.5rem] md:ml-[3rem] lg:ml-[5rem]">
        <h1 className="text-[#ffffff] font-bold text-[1rem] md:text-[1.325rem] lg:text-[1.75rem] pt-[1.5rem] md:pt-[2rem] lg:pt-[2.5rem]">
          BrickBot
        </h1>
        <Link
          href="https://maps.app.goo.gl/nDGHSv337ajW8SPD9"
          className="text-[#929292] font-semibold text-[0.75rem] md:text-[1rem] lg:text-[1.25rem] pt-[0.25rem] md:pt-[0.5rem] lg:pt-[0.75rem] hover:brightness-150 active:scale-90 active:brightness-100 transition-transform duration-150 cursor-pointer"
          target="_blank"
        >
          <p className="pb-[0.5rem]">&quot;Unirea&quot; National College</p>
          <p className="pb-[1.0rem]">
            Str. Cezar-Bolliac Nr. 13-15
            <br /> Focșani, Vrancea, Romania
          </p>
        </Link>
        <Link
          href="https://www.datahost.ro/"
          className="text-[#929292] font-semibold text-[0.75rem] md:text-[1rem] lg:text-[1.25rem] pt-[0.25rem] md:pt-[0.5rem] lg:pt-[0.75rem] hover:brightness-150 active:scale-3d active:brightness-100 transition-transform duration-150 cursor-pointer"
          target="_blank"
        >
          Powered by DataHost
        </Link>
        <p className="text-[#ffffff] font-normal text-[0.75rem] md:text-[1rem] lg:text-[1.25rem] pt-[1rem] md:pt-[1.25rem] lg:pt-[1.5rem] pb-[1.5rem] md:pb-[2rem] lg:pb-[2.5rem]">
          Brickbot © {currentYear}
        </p>
      </span>
      <span className="relative h-auto ml-auto mr-[1.5rem] md:mr-[3rem] lg:mr-[5rem] w-auto select-none">
        <h1 className="text-[#ffffff] font-bold text-[1rem] md:text-[1.325rem] lg:text-[1.75rem] pt-[1.5rem] md:pt-[2rem] lg:pt-[2.5rem]">
          Follow Us
        </h1>
        <div className="grid grid-cols-4 items-start space-x-[1rem] pt-[0.25rem] mr-[-1rem]">
          <Link
            href="https://www.instagram.com/brickbotcnu/"
            target="_blank"
          >
            <RiInstagramLine className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[3rem] w-auto transition-transform duration-150" />
          </Link>
          <Link
            href="https://www.facebook.com/brickbotcnu/"
            target="_blank"
          >
            <RiFacebookBoxLine className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[3rem] w-auto transition-transform duration-150" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCRpA5UNXSZDl2GmPt_E91ew"
            target="_blank"
          >
            <RiYoutubeLine className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[3rem] w-auto transition-transform duration-150" />
          </Link>
          <Link
            href="https://www.tiktok.com/@brickbotcnu"
            target="_blank"
          >
            <Image
              src="/socials/tiktok.svg"
              alt="TikTok"
              width={24}
              height={24}
              className="hover:opacity-75 hover:scale-110 active:opacity-100 active:scale-90 h-[1.5rem] md:h-[3rem] w-auto transition-transform duration-150"
            />
          </Link>
        </div>
        <div className="flex flex-col pt-[2rem] md:pt-[2.5rem] lg:pt-[3rem] items-end">
          <Button
            text="BACK TO TOP"
            arrow={false}
            color="#ffffff"
            action={scrollToTop}
          ></Button>
        </div>
      </span>
    </footer>
  );
}
