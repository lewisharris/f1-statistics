"use client";
import React, { useState } from "react";
import Link from "next/link";

type Props = {};

type NavTagProps = { link: string; caption: string; icon?: string };

const NavTag = ({ link, caption, icon }: NavTagProps) => {
  return (
    <div className=" flex flex-row text-neutral-400 min-h-20 text-md semibold py-2 hover:cursor-pointer hover:text-white transition-all">
      <i className="bi bi-columns text-white"></i>
      <Link href={link}>{caption}</Link>
    </div>
  );
};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState();
  return (
    <div
      className={`hidden sm:block transition-all duration-300 flex flex-col bg-neutral-950 min-h-screen items-start ${
        isOpen ? "w-[250px]" : "w-14"
      } px-6 pt-36 overflow-hidden p-4`}
    >
      <button className="text-white" onClick={() => setIsOpen(prev => !isOpen)}>
        {isOpen ? "<" : ">"}
      </button>
      <NavTag link="/dashboard" caption="DASHBOARD" />
      <NavTag link="/drivers" caption="DRIVERS" />
      <NavTag link="/constructors" caption="CONSTRUCTORS" />
      <NavTag link="/races" caption="RACE CALENDAR" />
      <NavTag link="/circuits" caption="CIRCUITS" />
      <div className="pt-6 flex flex-col">
        <NavTag link="/news" caption="NEWS" />
        <NavTag link="/settings" caption="SETTINGS" />
      </div>
    </div>
  );
}
