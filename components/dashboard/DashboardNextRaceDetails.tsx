"use client";
import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";

interface DashboardNextRaceDetailsProps {
  races: Array<object>;
}

interface EventSegmentProps {
  event: object;
  eventName: string;
}

function EventSegment({ event, eventName }: EventSegmentProps): ReactElement {
  const date = new Date(event.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
  });

  return (
    <li className="flex flex-col justify-between font-thin bg-[#13171c] m-2 first:rounded-l-full last:rounded-r-full drop-shadow-xl">
      <div className="px-4">
        <div className="text-white text-sm font-bold m-1">{eventName}</div>
        <div className="flex flex-row text-xs m-1">
          <div>{event.time}</div>
          <div>{date}</div>
        </div>
      </div>
      <div className="w-full h-1 bg-red-700 transition-all"></div>
    </li>
  );
}

export default function DashboardNextRaceDetails({
  races,
}: DashboardNextRaceDetailsProps): ReactElement {
  const [race, setRace] = useState(0);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDay();
  console.log(year);
  console.log(month);
  console.log(day);

  const raceDate = new Date(races[race].date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
  });

  const raceDates = races.map((race) => {
    const splitDate = race.date.split("-");
    if (splitDate[0] < year) {
      return;
    }
    if (splitDate[1] < month) {
      return;
    }
    if (splitDate[1] === month && splitDate[2] < day) {
      return;
    }
    return splitDate;
  });

  console.log(raceDates);

  return (
    <div className="flex flex-col bg-[#101317] drop-shadow-2xl text-white m-4  shrink-0 grow rounded-2xl">
      <div className="flex flex-row px-10 py-6">
        <div className="flex flex-col min-w-[50%]">
          <div className="text-lg text-zinc-500">NEXT RACE DETAILS</div>
          <div className="text-2xl">
            {/*  Create custom reusable util function to capitalise strings*/}
            {`${races[race].Circuit.circuitId.charAt(0).toUpperCase()}${races[
              race
            ].Circuit.circuitId.slice(1)}`}
          </div>
          <div className="pb-4 text-xs font-thin">{races[race].raceName}</div>
        </div>
        <Image
          src="/tracks/Circuit_Zandvoort_F1.png"
          alt="zandvoort"
          width={300}
          height={300}
        />
      </div>
      <div>
        <ul className="flex flex-col sm:flex-row">
          {/* If date/time has already passed then show "Event finished, or similar*/}
          {races[race].FirstPractice ? (
            <EventSegment
              event={races[race].FirstPractice}
              eventName="Practice 1"
            />
          ) : null}
          {races[race].SecondPractice ? (
            <EventSegment
              event={races[race].SecondPractice}
              eventName="Practice 2"
            />
          ) : null}
          {races[race].ThirdPractice ? (
            <EventSegment
              event={races[race].ThirdPractice}
              eventName="Practice 3"
            />
          ) : null}
          {races[race].Sprint ? (
            <EventSegment event={races[race].Sprint} eventName="Sprint" />
          ) : null}
          <EventSegment event={races[race].Qualifying} eventName="Qualifying" />
        </ul>
      </div>
      <div className="flex flex-row bg-zinc-950 py-3 px-10">
        <div className="mr-auto">Race</div>
        <div className="px-4">{races[race].time}</div>
        <div className="px-4">{raceDate}</div>
      </div>
    </div>
  );
}
