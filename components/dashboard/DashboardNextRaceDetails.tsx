"use client";
import React, { ReactElement, useEffect, useState } from "react";

interface DashboardNextRaceDetailsProps {
  races: Array<object>;
}

interface EventSegmentProps {
  event: object;
  eventName: string;
}

function EventSegment({ event, eventName }: EventSegmentProps): ReactElement {
  return (
    <div className="flex flex-row justify-between font-thin">
      <div>{eventName}</div>
      <div>{event.time}</div>
      <div>{event.date}</div>
    </div>
  );
}

export default function DashboardNextRaceDetails({
  races
}: DashboardNextRaceDetailsProps): ReactElement {
  const [race, setRace] = useState(0);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDay();
  console.log(year);
  console.log(month);
  console.log(day);

  const raceDates = races.map(race => {
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
    <div className="flex flex-col bg-[#101317] drop-shadow-2xl text-white m-4 rounded-2xl shrink-0 grow">
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
          <div className="flex flex-row">
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
            <EventSegment
              event={races[race].Qualifying}
              eventName="Qualifying"
            />
          </div>
          <div className="h-200 bg-red-100">Image</div>
        </div>
      </div>
      <div className="flex flex-row bg-zinc-950 py-3 px-10">
        <div className="mr-auto">Race</div>
        <div className="px-4">{races[race].time}</div>
        <div className="px-4">{races[race].date}</div>
      </div>
    </div>
  );
}
