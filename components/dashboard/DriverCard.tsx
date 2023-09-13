"use client";

import React, { ReactElement } from "react";
import Link from "next/link";

interface DriverCardProps {
  driverId: number;
  familyName: string;
  givenName: string;
  permanentNumber: number;
  points: number;
  position: number;
  onDragStart: any;
  role: string;
}

export default function DriverCard({
  driverId,
  familyName,
  givenName,
  permanentNumber,
  points,
  position,
}: DriverCardProps): ReactElement {
  const createSuffix = (position: number) => {
    var j = position % 10,
      k = position % 100;
    if (j == 1 && k != 11) {
      return position + "st";
    }
    if (j == 2 && k != 12) {
      return position + "nd";
    }
    if (j == 3 && k != 13) {
      return position + "rd";
    }
    return position + "th";
  };
  const suffixedPosition = createSuffix(position);
  return (
    <div className="mx-auto w-[100px] sm:w-[140px] group " key={driverId}>
      <Link href={`/drivers/${permanentNumber}`}>
        <div className="text-center">{`${suffixedPosition}`}</div>
        <img
          src={`./drivers/${permanentNumber}.jpg`}
          alt={driverId.toString()}
          className="object-cover h-12 sm:h-24 rounded-xl w-full object-top group-hover:brightness-125 transition-all duration-100 ease-in-out"
        />
        <div className="flex flex-row mt-1">
          <div className="text-[10px]">#{permanentNumber}</div>
          <div className=" hidden sm:block px-1">|</div>
          <div className="flex flex-col">
            <div className="text-[10px]">
              <span className="text-zinc-400 pr-[2px]">{givenName}</span>
              <span>{familyName}</span>
            </div>
            <div className="pl-6 text-[10px]">{points}PTS</div>
          </div>
        </div>{" "}
      </Link>
    </div>
  );
}
