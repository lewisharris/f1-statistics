import React from "react";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex flex-col bg-neutral-950 min-h-screen px-8 pt-36">
      <div className="text-3xl text-white">F1 Logo</div>
      <Link href="/drivers" className="text-neutral-400 semibold">
        DRIVERS
      </Link>
      <Link href="/constructors" className="text-neutral-400 semibold">
        CONSTRUCTORS
      </Link>
      <Link href="/races" className="text-neutral-400 semibold">
        RACES
      </Link>
      <Link href="/circuits" className="text-neutral-400 semibold">
        CIRCUITS
      </Link>
      <div className="pt-8 flex flex-col">
        <Link href="/circuits" className="text-neutral-400 semibold">
          NEWS
        </Link>
        <Link href="/circuits" className="text-neutral-400 semibold">
          SETTINGS
        </Link>
      </div>
    </div>
  );
}
