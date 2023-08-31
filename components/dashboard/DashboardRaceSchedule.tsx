"use client";
import React, { ReactElement } from "react";
import Link from "next/link";

interface RaceScheduleCardProps {
  race: object;
}

function RaceScheduleCard({ race }: RaceScheduleCardProps): ReactElement {
  const round = race.round;
  const firstPracticeDate = new Date(
    race.FirstPractice?.date
  ).toLocaleDateString("en-GB", { day: "2-digit" });

  const raceDate = new Date(race.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
  });

  return (
    <li className="drop-shadow-xl mb-4 bg-[#13171c] hover:brightness-125 transition-all duration-100 ease-in-out first:text-yellow-400 first:border-solid first:border-red-700 first:border-b-2">
      <Link href={`/races/${round}`}>
        <div className="flex flex-row w-full justify-between bg-zinc-950 p-2 text-xs ">
          <div className="text-[#ff1801]">Round: {race.round}</div>
          <div className="text-xs text-white">{`${firstPracticeDate}-${raceDate}`}</div>
        </div>
        <div className="p-2">
          <p>{race.raceName}</p>
          <p className="text-xs">{race.Circuit.circuitName}</p>
        </div>
      </Link>
    </li>
  );
}

interface Props {
  season: number;
  races: Array<object>;
}

export default function DashboardRaceSchedule({
  season,
  races,
}: Props): ReactElement {
  return (
    <div className="flex flex-col bg-[#101317] drop-shadow-2xl text-white m-4 p-4 rounded-2xl grow-0 min-w-[270px]">
      <h4 className="text-xs py-2 sm:py-0 sm:text-lg text-zinc-500 z-20 ">
        RACE SCHEDULE
      </h4>
      <div>{season}</div>
      <ul className="overflow-scroll">
        {races.map((race) => {
          return <RaceScheduleCard race={race} />;
        })}
      </ul>
    </div>
  );
}
