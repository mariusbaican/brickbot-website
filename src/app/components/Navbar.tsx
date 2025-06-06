"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";

type NavButtonProps = {
  text: string;
  path: string;
  action?: () => void;
};

function NavbarButton({ text, path }: NavButtonProps) {
  return (
    <li className="relative w-[10rem] lg:w-[12rem] h-full flex items-center justify-center cursor-pointer">
      <div className="absolute w-full h-full overflow-visible opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="relative opacity-20 h-full w-full bg-[linear-gradient(0deg,_#ffd100_0%,_transparent_100%)]" />
        <div className="relative opacity-75 w-full h-[0.1rem] bg-[linear-gradient(90deg,_#ffd1003f_0%,_#ffd100_50%,_#ffd1003f_100%)]" />
      </div>
      <Link href={path}>{text}</Link>
    </li>
  );
}

function SidebarButton({ text, path, action }: NavButtonProps) {
  return (
    <button className="bg-transparent rounded-[1rem] text-[#ffffff] hover:text-[#ffd100] text-[1.5rem]/[2.5rem] px-[1rem] py-[0.2rem] font-semibold hover:scale-110 active:scale-90 transition-transform duration-150">
      <Link
        href={path}
        onClick={action}
        className=""
      >
        {text}
      </Link>
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 h-[3.5rem] lg:h-[4rem] w-full bg-[rgba(18,18,18,0.8)] backdrop-blur z-[100] flex justify-center items-center select-none transition-all duration-300"
        style={{
          height: isOpen && isMobile ? "100vh" : undefined,
        }}
      >
        {/* Desktop Navbar */}
        <ul className="hidden md:flex justify-center items-center md:text-[#ffffff] font-bold text-[1.2rem] lg:text-[1.4rem] w-full h-full">
          <NavbarButton
            text="BRICKBOTING"
            path="/tbd"
          />
          <NavbarButton
            text="ACHIEVEMENTS"
            path="/achievements"
          />
          <li className="mx-[1.5rem] lg:mx-[2rem] hover:opacity-75 hover:scale-107 transition-transform duration-150 hover:translate-y-[0.15rem] hover:lg:translate-y-[0.2rem] active:opacity-100 active:scale-93 active:translate-y-[-0.15rem] active:lg:translate-y-[-0.2rem]">
            <Link href="/home">
              <Image
                src="/brick_yellow.png"
                alt="BrickBot Logo"
                priority
                width={928}
                height={502}
                className="h-[4rem] lg:h-[5rem] w-auto object-contain mt-[0.8rem] lg:mt-[1rem]"
              />
            </Link>
          </li>
          <NavbarButton
            text="RESOURCES"
            path="/resources"
          />
          <NavbarButton
            text="SUPPORT US"
            path="/support-us"
          />
        </ul>

        {/* Mobile Navbar */}
        <div className="absolute top-0 left-0 flex justify-center items-center md:hidden h-[3.5rem] lg:h-[4rem] w-full">
          <Link
            href="/home"
            className="relative ml-[1rem] mr-auto hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150"
          >
            <Image
              src="/brick_yellow.png"
              alt="BrickBot Logo"
              priority
              width={1325}
              height={151}
              className="h-[1.5rem] w-auto object-contain inline-block mr-[0.5rem]"
            />
            <Image
              src="/brickbot_text.png"
              alt="BrickBot Text Logo"
              priority
              width={928}
              height={502}
              className="h-[1rem] w-auto object-contain inline-block"
            />
          </Link>
          <div className="relative ml-auto mr-[0.1rem] mt-[0.4rem] cursor-pointer fill-[#ffd100] h-full hover:opacity-75 hover:scale-107 active:opacity-100 active:scale-93 transition-transform duration-150">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#ffd100"
              size={24}
            />
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed top-[3rem] left-0 w-full h-[calc(100vh-3rem)] z-[100] flex md:hidden select-none">
          <div className="w-full h-full text-[#ffffff] flex flex-col space-y-[0.5rem] opacity-0 animate-[fadeInDelay_0.2s_ease-in-out_0.1s_forwards]">
            <h1 className="text-center text-[2.25rem] font-bold text-[#ffd100] pt-[1rem] pb-[0.5rem]">
              MENU
            </h1>
            <SidebarButton
              text="BRICKBOTING"
              path="/tbd"
              action={() => setOpen(false)}
            />
            <SidebarButton
              text="ACHIEVEMENTS"
              path="/achievements"
              action={() => setOpen(false)}
            />
            <SidebarButton
              text="RESOURCES"
              path="/resources"
              action={() => setOpen(false)}
            />
            <SidebarButton
              text="SUPPORT US"
              path="/support-us"
              action={() => setOpen(false)}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInDelay {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
